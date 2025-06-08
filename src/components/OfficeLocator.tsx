import React, { useState, useCallback, useEffect, useRef } from 'react';
import { toast } from 'sonner';
import SearchPanel from './SearchPanel';
import OfficeList from './OfficeList';
import { officesData } from '@/data/offices';
import { calculateDistance, geocodeLocation } from '@/utils/locationUtils';

interface SearchParams {
  location: string;
  radius: number;
}

interface Office {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  lat: number;
  lng: number;
  phone?: string;
  email?: string;
}

// Extend Window interface to include google
declare global {
  interface Window {
    google: typeof google;
  }
}

const OfficeLocator = () => {
  const [offices] = useState<Office[]>(officesData);
  const [filteredOffices, setFilteredOffices] = useState<Office[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchCenter, setSearchCenter] = useState<{ lat: number; lng: number } | null>(null);
  const [currentRadius, setCurrentRadius] = useState<number>(0);
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<google.maps.Marker[]>([]);
  const circleRef = useRef<google.maps.Circle | null>(null);

  // Initialize Google Map
  const initializeMap = useCallback(() => {
    if (!mapRef.current || mapInstanceRef.current || !window.google) return;

    const map = new window.google.maps.Map(mapRef.current, {
      zoom: 7,
      center: { lat: 31.9686, lng: -99.9018 }, // Center of Texas
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: false,
      zoomControl: true, // Enable zoom controls
      styles: [
        {
          featureType: 'poi',
          elementType: 'labels',
          stylers: [{ visibility: 'off' }]
        }
      ]
    });

    mapInstanceRef.current = map;
    
    // Add all office markers when map initializes
    addOfficeMarkersToMap(offices);
  }, [offices]);

  // Load Google Maps script
  useEffect(() => {
    if (window.google) {
      initializeMap();
      return;
    }

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBaTFTW_OSfqCt93_P7rcjlXhU1RInOkj0&libraries=geometry`;
    script.async = true;
    script.defer = true;
    script.onload = initializeMap;
    script.onerror = () => {
      toast.error('Failed to load Google Maps. Please check your API key.');
    };
    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector(`script[src*="maps.googleapis.com"]`);
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, [initializeMap]);

  // Clear existing markers and circle
  const clearMapElements = useCallback(() => {
    markersRef.current.forEach(marker => marker.setMap(null));
    markersRef.current = [];
    
    if (circleRef.current) {
      circleRef.current.setMap(null);
      circleRef.current = null;
    }
  }, []);

  // Add office markers to map (for initial load)
  const addOfficeMarkersToMap = useCallback((offices: Office[]) => {
    if (!mapInstanceRef.current || !window.google) return;

    clearMapElements();

    // Add office markers
    offices.forEach((office) => {
      const marker = new window.google.maps.Marker({
        position: { lat: office.lat, lng: office.lng },
        map: mapInstanceRef.current,
        title: office.name,
        icon: {
          url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#3B82F6" stroke="white" stroke-width="2"/>
              <circle cx="12" cy="9" r="2.5" fill="white"/>
            </svg>
          `),
          scaledSize: new window.google.maps.Size(24, 24),
        },
      });

      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div class="p-2">
            <h3 class="font-semibold text-lg">${office.name}</h3>
            <p class="text-sm text-gray-600">${office.address}</p>
            <p class="text-sm text-gray-600">${office.city}, ${office.state} ${office.zip}</p>
            ${office.phone ? `<p class="text-sm text-blue-600 mt-1">${office.phone}</p>` : ''}
          </div>
        `,
      });

      marker.addListener('click', () => {
        infoWindow.open(mapInstanceRef.current, marker);
      });

      markersRef.current.push(marker);
    });

    // Fit map bounds to show all offices with reasonable zoom
    if (offices.length > 0) {
      const bounds = new window.google.maps.LatLngBounds();
      offices.forEach(office => {
        bounds.extend({ lat: office.lat, lng: office.lng });
      });
      mapInstanceRef.current.fitBounds(bounds);
      
      // Set maximum zoom level to keep reasonable view
      const listener = window.google.maps.event.addListener(mapInstanceRef.current, 'bounds_changed', () => {
        if (mapInstanceRef.current!.getZoom()! > 12) {
          mapInstanceRef.current!.setZoom(12);
        }
        window.google.maps.event.removeListener(listener);
      });
    }
  }, [clearMapElements]);

  // Add markers to map (for search results)
  const addMarkersToMap = useCallback((offices: Office[], center: { lat: number; lng: number }) => {
    if (!mapInstanceRef.current || !window.google) return;

    clearMapElements();

    // Add radius circle
    const circle = new window.google.maps.Circle({
      strokeColor: '#3B82F6',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#3B82F6',
      fillOpacity: 0.15,
      map: mapInstanceRef.current,
      center: center,
      radius: currentRadius * 1609.34, // Convert miles to meters
    });
    circleRef.current = circle;

    // Add center marker
    new window.google.maps.Marker({
      position: center,
      map: mapInstanceRef.current,
      title: 'Search Center',
      icon: {
        url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="8" fill="#EF4444" stroke="white" stroke-width="2"/>
          </svg>
        `),
        scaledSize: new window.google.maps.Size(20, 20),
      },
    });

    // Add office markers
    offices.forEach((office) => {
      const marker = new window.google.maps.Marker({
        position: { lat: office.lat, lng: office.lng },
        map: mapInstanceRef.current,
        title: office.name,
        icon: {
          url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#3B82F6" stroke="white" stroke-width="2"/>
              <circle cx="12" cy="9" r="2.5" fill="white"/>
            </svg>
          `),
          scaledSize: new window.google.maps.Size(24, 24),
        },
      });

      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div class="p-2">
            <h3 class="font-semibold text-lg">${office.name}</h3>
            <p class="text-sm text-gray-600">${office.address}</p>
            <p class="text-sm text-gray-600">${office.city}, ${office.state} ${office.zip}</p>
            ${office.phone ? `<p class="text-sm text-blue-600 mt-1">${office.phone}</p>` : ''}
          </div>
        `,
      });

      marker.addListener('click', () => {
        infoWindow.open(mapInstanceRef.current, marker);
      });

      markersRef.current.push(marker);
    });

    // Fit map bounds to show all markers with reasonable zoom
    if (offices.length > 0) {
      const bounds = new window.google.maps.LatLngBounds();
      bounds.extend(center);
      offices.forEach(office => {
        bounds.extend({ lat: office.lat, lng: office.lng });
      });
      mapInstanceRef.current.fitBounds(bounds);
      
      // Set maximum zoom level to keep reasonable view
      const listener = window.google.maps.event.addListener(mapInstanceRef.current, 'bounds_changed', () => {
        if (mapInstanceRef.current!.getZoom()! > 12) {
          mapInstanceRef.current!.setZoom(12);
        }
        window.google.maps.event.removeListener(listener);
      });
    }
  }, [clearMapElements, currentRadius]);

  // Handle search
  const handleSearch = async ({ location, radius }: SearchParams) => {
    setIsLoading(true);
    setCurrentRadius(radius);
    
    try {
      console.log('Searching for location:', location, 'with radius:', radius);
      
      const coordinates = await geocodeLocation(location);
      console.log('Geocoded coordinates:', coordinates);
      
      if (!coordinates) {
        toast.error('Location not found. Please try a different address or ZIP code.');
        setFilteredOffices([]);
        return;
      }

      setSearchCenter(coordinates);

      // Filter offices within radius
      const nearbyOffices = offices.filter(office => {
        const distance = calculateDistance(
          coordinates.lat,
          coordinates.lng,
          office.lat,
          office.lng
        );
        return distance <= radius;
      });

      console.log('Found', nearbyOffices.length, 'offices within', radius, 'miles');
      setFilteredOffices(nearbyOffices);

      // Update map
      if (mapInstanceRef.current) {
        addMarkersToMap(nearbyOffices, coordinates);
      }

      if (nearbyOffices.length === 0) {
        toast.info(`No offices found within ${radius} miles of ${location}.`);
      } else {
        toast.success(`Found ${nearbyOffices.length} office${nearbyOffices.length === 1 ? '' : 's'} near ${location}.`);
      }
    } catch (error) {
      console.error('Search error:', error);
      toast.error('An error occurred while searching. Please try again.');
      setFilteredOffices([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Search Panel */}
        <div className="lg:col-span-1">
          <SearchPanel onSearch={handleSearch} isLoading={isLoading} />
          <OfficeList offices={filteredOffices} />
        </div>

        {/* Map */}
        <div className="lg:col-span-2">
          <div className="bg-card rounded-lg shadow-lg overflow-hidden h-[600px]">
            <div 
              ref={mapRef} 
              id="map" 
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficeLocator;
