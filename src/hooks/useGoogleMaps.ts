import { useCallback, useEffect, useRef, useState } from 'react';
import { Office } from '@/types/office';

export const useGoogleMaps = () => {
  const [mapError, setMapError] = useState<string | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<google.maps.Marker[]>([]);
  const circleRef = useRef<google.maps.Circle | null>(null);
  const mapLoadedRef = useRef<boolean>(false);
  const scriptLoadedRef = useRef<boolean>(false);

  // Check if Google Maps is already available
  const isGoogleMapsAvailable = useCallback(() => {
    return window.google && window.google.maps && window.google.maps.Map;
  }, []);

  // Check if there's an existing Google Maps instance on this page
  const hasExistingGoogleMaps = useCallback(() => {
    return document.querySelector('script[src*="maps.googleapis.com"]') !== null;
  }, []);

  // Initialize Google Map
  const initializeMap = useCallback(() => {
    if (!mapRef.current || mapInstanceRef.current || !isGoogleMapsAvailable()) return;

    try {
      const map = new window.google.maps.Map(mapRef.current, {
        zoom: 7,
        center: { lat: 31.9686, lng: -99.9018 }, // Center of Texas
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        zoomControl: true,
        styles: [
          {
            featureType: 'poi',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }]
          }
        ]
      });

      mapInstanceRef.current = map;
      mapLoadedRef.current = true;
      setMapError(null);
      
      console.log('Google Maps initialized successfully');
    } catch (error) {
      console.error('Failed to initialize map:', error);
      setMapError('Failed to load map. Please check if ad blockers are interfering.');
    }
  }, [isGoogleMapsAvailable]);

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
    if (!mapInstanceRef.current || !isGoogleMapsAvailable()) return;

    clearMapElements();

    try {
      // Add office markers
      offices.forEach((office) => {
        const marker = new window.google.maps.Marker({
          position: { lat: office.lat, lng: office.lng },
          map: mapInstanceRef.current,
          title: office.name,
          icon: {
            url: 'https://cdn.prod.website-files.com/67eb9b3bbf63235c4d69b63e/67f1849f85b2f6cd4969a4b2_pin.png',
            scaledSize: new window.google.maps.Size(32, 32),
          },
        });

        const infoWindow = new window.google.maps.InfoWindow({
          content: `
            <div class="p-2">
              <h3 class="font-semibold text-lg">${office.name}</h3>
              <p class="text-sm text-gray-600">${office.address}</p>
              <p class="text-sm text-gray-600">${office.city}, ${office.state} ${office.zip}</p>
              ${office.phone ? `<p class="text-sm text-blue-600 mt-1">${office.phone}</p>` : ''}
              <div class="mt-3">
                <a href="/office/${office.id}" class="inline-flex items-center px-3 py-1.5 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors">
                  Details
                </a>
              </div>
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
    } catch (error) {
      console.error('Error adding markers to map:', error);
    }
  }, [clearMapElements, isGoogleMapsAvailable]);

  // Add markers to map (for search results)
  const addMarkersToMap = useCallback((offices: Office[], center: { lat: number; lng: number }, currentRadius: number) => {
    if (!mapInstanceRef.current || !isGoogleMapsAvailable()) return;

    clearMapElements();

    try {
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
            url: 'https://cdn.prod.website-files.com/67eb9b3bbf63235c4d69b63e/67f1849f85b2f6cd4969a4b2_pin.png',
            scaledSize: new window.google.maps.Size(32, 32),
          },
        });

        const infoWindow = new window.google.maps.InfoWindow({
          content: `
            <div class="p-2">
              <h3 class="font-semibold text-lg">${office.name}</h3>
              <p class="text-sm text-gray-600">${office.address}</p>
              <p class="text-sm text-gray-600">${office.city}, ${office.state} ${office.zip}</p>
              ${office.phone ? `<p class="text-sm text-blue-600 mt-1">${office.phone}</p>` : ''}
              <div class="mt-3">
                <a href="/office/${office.id}" class="inline-flex items-center px-3 py-1.5 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors">
                  Details
                </a>
              </div>
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
    } catch (error) {
      console.error('Error updating map markers:', error);
    }
  }, [clearMapElements, isGoogleMapsAvailable]);

  // Load Google Maps script with conflict prevention
  useEffect(() => {
    // First, check if Google Maps is already available
    if (isGoogleMapsAvailable()) {
      console.log('Google Maps already loaded, initializing map');
      initializeMap();
      return;
    }

    // Check if we already tried to load the script
    if (mapLoadedRef.current || scriptLoadedRef.current) return;

    // Check if there's already a Google Maps script loading
    if (hasExistingGoogleMaps() && !window.googleMapsLoaded) {
      console.log('Google Maps script already exists, waiting for it to load');
      
      // Wait for existing script to load
      const checkInterval = setInterval(() => {
        if (isGoogleMapsAvailable()) {
          clearInterval(checkInterval);
          initializeMap();
        }
      }, 100);

      // Timeout after 10 seconds
      setTimeout(() => {
        clearInterval(checkInterval);
        if (!isGoogleMapsAvailable()) {
          setMapError('Google Maps failed to load within timeout period.');
        }
      }, 10000);
      
      return;
    }

    // Only load if there's no existing Google Maps
    if (!hasExistingGoogleMaps()) {
      scriptLoadedRef.current = true;

      // Create unique callback function name to avoid conflicts
      const uniqueCallback = `googleMapsCallback_${Date.now()}`;
      
      (window as any)[uniqueCallback] = () => {
        console.log('Google Maps callback triggered');
        window.googleMapsLoaded = true;
        initializeMap();
      };

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBaTFTW_OSfqCt93_P7rcjlXhU1RInOkj0&libraries=geometry&loading=async&callback=${uniqueCallback}`;
      script.async = true;
      script.defer = true;
      script.id = 'google-maps-office-locator';
      script.onerror = () => {
        console.error('Failed to load Google Maps script');
        setMapError('Failed to load Google Maps. This might be due to an ad blocker or network issue.');
        scriptLoadedRef.current = false;
      };
      
      document.head.appendChild(script);

      return () => {
        // Cleanup - but be careful not to remove existing scripts
        const ourScript = document.getElementById('google-maps-office-locator');
        if (ourScript && ourScript.parentNode) {
          ourScript.parentNode.removeChild(ourScript);
        }
        if ((window as any)[uniqueCallback]) {
          delete (window as any)[uniqueCallback];
        }
      };
    }
  }, [initializeMap, isGoogleMapsAvailable, hasExistingGoogleMaps]);

  return {
    mapRef,
    mapInstanceRef,
    mapError,
    addOfficeMarkersToMap,
    addMarkersToMap
  };
};
