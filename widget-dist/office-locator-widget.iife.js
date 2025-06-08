
(function() {
  'use strict';

  // React and ReactDOM
  const e = React.createElement;
  const { useState, useCallback, useEffect, useRef } = React;
  const { createRoot } = ReactDOM;

  // Office data
  const officesData = [
    {
      id: 1,
      name: "North Houston",
      address: "2930 Cypress Grove Meadows Dr",
      city: "Houston",
      state: "TX",
      zip: "77014",
      lat: 29.9803,
      lng: -95.4431,
      phone: "(346) 353 2291"
    },
    {
      id: 2,
      name: "Houston Clear Lake",
      address: "16441 Space Center Blvd, Suite C-300",
      city: "Houston",
      state: "TX", 
      zip: "77058",
      lat: 29.5527,
      lng: -95.0927,
      phone: "(713) 987 3709"
    },
    {
      id: 3,
      name: "Fort Worth",
      address: "6940 River Park Circle",
      city: "Fort Worth",
      state: "TX",
      zip: "76116", 
      lat: 32.6722,
      lng: -97.4078,
      phone: "(817) 420-7629"
    },
    {
      id: 4,
      name: "Fort Worth - Benbrook",
      address: "6100 Southwest Blvd Suite 200",
      city: "Benbrook",
      state: "TX",
      zip: "76109",
      lat: 32.6732,
      lng: -97.4606,
      phone: "(682) 342-1525"
    },
    {
      id: 5,
      name: "Dallas - Oak Cliff", 
      address: "5787 S Hampton Rd, Suite 430",
      city: "Dallas",
      state: "TX",
      zip: "75232",
      lat: 32.6668,
      lng: -96.8364,
      phone: "(972) 362-5542"
    },
    {
      id: 6,
      name: "Dallas - Carrollton",
      address: "1406 Halsey Way Suite 110", 
      city: "Carrollton",
      state: "TX",
      zip: "75007",
      lat: 32.9537,
      lng: -96.8903,
      phone: "(972) 440-0527"
    }
  ];

  // Utility functions
  const calculateDistance = (lat1, lng1, lat2, lng2) => {
    const R = 3959; // Radius of the Earth in miles
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLng/2) * Math.sin(dLng/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  };

  const geocodeLocation = async (location) => {
    if (!window.google || !window.google.maps) {
      throw new Error('Google Maps not loaded');
    }

    return new Promise((resolve, reject) => {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address: location }, (results, status) => {
        if (status === 'OK' && results[0]) {
          const { lat, lng } = results[0].geometry.location;
          resolve({ lat: lat(), lng: lng() });
        } else {
          reject(new Error('Geocoding failed'));
        }
      });
    });
  };

  // Toast function (simplified)
  const toast = {
    success: (message) => console.log('Success:', message),
    error: (message) => console.error('Error:', message),
    info: (message) => console.info('Info:', message)
  };

  // SearchPanel Component
  const SearchPanel = ({ onSearch, isLoading }) => {
    const [location, setLocation] = useState('');
    const [radius, setRadius] = useState('25');

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!location.trim()) return;
      onSearch({ location: location.trim(), radius: parseInt(radius) });
    };

    const radiusOptions = [
      { value: '5', label: '5 miles' },
      { value: '10', label: '10 miles' },
      { value: '25', label: '25 miles' },
      { value: '50', label: '50 miles' },
      { value: '100', label: '100 miles' },
    ];

    return e('div', { className: 'bg-card rounded-lg shadow-lg p-6 mb-6' },
      e('div', { className: 'mb-4' },
        e('h2', { className: 'text-lg font-medium flex items-center gap-2' },
          '📍 Find Offices Near You'
        ),
        e('p', { className: 'text-sm text-muted-foreground mt-1' },
          'Enter your ZIP code or city name to find nearby office locations.'
        )
      ),
      e('form', { onSubmit: handleSubmit, className: 'space-y-4' },
        e('div', { className: 'space-y-2' },
          e('label', { htmlFor: 'locationInput', className: 'text-sm font-medium' }, 'Location'),
          e('input', {
            id: 'locationInput',
            type: 'text',
            placeholder: 'Enter ZIP code or city name',
            value: location,
            onChange: (e) => setLocation(e.target.value),
            className: 'w-full h-10 px-3 py-2 border border-input bg-background rounded-md text-base placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
            disabled: isLoading
          })
        ),
        e('div', { className: 'space-y-2' },
          e('label', { htmlFor: 'radiusInput', className: 'text-sm font-medium' }, 'Search Radius'),
          e('select', {
            id: 'radiusInput',
            value: radius,
            onChange: (e) => setRadius(e.target.value),
            className: 'w-full h-10 px-3 py-2 border border-input bg-background rounded-md text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
            disabled: isLoading
          },
            radiusOptions.map(option =>
              e('option', { key: option.value, value: option.value }, option.label)
            )
          )
        ),
        e('button', {
          id: 'searchButton',
          type: 'submit',
          className: 'w-full inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2',
          disabled: isLoading || !location.trim()
        },
          isLoading ? '🔄 Searching...' : '🔍 Search Offices'
        )
      )
    );
  };

  // OfficeList Component
  const OfficeList = ({ offices }) => {
    if (offices.length === 0) return null;

    return e('div', { className: 'bg-card rounded-lg shadow-lg p-6' },
      e('div', { className: 'mb-4' },
        e('h2', { className: 'text-lg font-medium flex items-center gap-2' },
          '🏢 Search Results'
        ),
        e('div', { className: 'mt-2' },
          e('span', { className: 'inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-secondary text-secondary-foreground' },
            `${offices.length} office${offices.length === 1 ? '' : 's'} found`
          )
        )
      ),
      e('div', { id: 'resultsList', className: 'space-y-4 max-h-96 overflow-y-auto' },
        offices.map(office =>
          e('div', {
            key: office.id,
            className: 'p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors'
          },
            e('div', { className: 'flex justify-between items-start mb-2' },
              e('h3', { className: 'font-medium text-lg' }, office.name),
              e('button', {
                className: 'inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md transition-colors',
                onClick: () => window.open(`/office/${office.id}`, '_blank')
              },
                '🔗 Details'
              )
            ),
            e('div', { className: 'space-y-2 text-sm text-muted-foreground' },
              e('div', { className: 'flex items-start gap-2' },
                e('span', { className: 'mt-0.5' }, '📍'),
                e('div', {},
                  e('p', {}, office.address),
                  e('p', {}, `${office.city}, ${office.state} ${office.zip}`)
                )
              ),
              office.phone && e('div', { className: 'flex items-center gap-2' },
                e('span', {}, '📞'),
                e('a', {
                  href: `tel:${office.phone}`,
                  className: 'text-primary hover:underline'
                }, office.phone)
              ),
              office.email && e('div', { className: 'flex items-center gap-2' },
                e('span', {}, '✉️'),
                e('a', {
                  href: `mailto:${office.email}`,
                  className: 'text-primary hover:underline'
                }, office.email)
              )
            )
          )
        )
      )
    );
  };

  // Main OfficeLocator Component
  const OfficeLocator = () => {
    const [offices] = useState(officesData);
    const [filteredOffices, setFilteredOffices] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchCenter, setSearchCenter] = useState(null);
    const [currentRadius, setCurrentRadius] = useState(0);
    const [mapError, setMapError] = useState(null);
    const mapRef = useRef(null);
    const mapInstanceRef = useRef(null);
    const markersRef = useRef([]);
    const circleRef = useRef(null);
    const mapLoadedRef = useRef(false);

    const initializeMap = useCallback(() => {
      if (!mapRef.current || mapInstanceRef.current || !window.google) return;

      try {
        const map = new window.google.maps.Map(mapRef.current, {
          zoom: 7,
          center: { lat: 31.9686, lng: -99.9018 },
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
        
        addOfficeMarkersToMap(offices);
      } catch (error) {
        console.error('Failed to initialize map:', error);
        setMapError('Failed to load map. Please check if ad blockers are interfering.');
      }
    }, [offices]);

    useEffect(() => {
      if (window.google && window.google.maps) {
        initializeMap();
        return;
      }

      if (mapLoadedRef.current) return;

      window.googleMapsCallback = initializeMap;

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBaTFTW_OSfqCt93_P7rcjlXhU1RInOkj0&libraries=geometry&loading=async&callback=googleMapsCallback`;
      script.async = true;
      script.defer = true;
      script.onerror = () => {
        console.error('Failed to load Google Maps script');
        setMapError('Failed to load Google Maps. This might be due to an ad blocker or network issue.');
      };
      
      document.head.appendChild(script);

      return () => {
        const existingScript = document.querySelector(`script[src*="maps.googleapis.com"]`);
        if (existingScript) {
          document.head.removeChild(existingScript);
        }
        if (window.googleMapsCallback) {
          delete window.googleMapsCallback;
        }
      };
    }, [initializeMap]);

    const clearMapElements = useCallback(() => {
      markersRef.current.forEach(marker => marker.setMap(null));
      markersRef.current = [];
      
      if (circleRef.current) {
        circleRef.current.setMap(null);
        circleRef.current = null;
      }
    }, []);

    const addOfficeMarkersToMap = useCallback((offices) => {
      if (!mapInstanceRef.current || !window.google) return;

      clearMapElements();

      try {
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
              <div style="padding: 8px;">
                <h3 style="font-weight: 600; font-size: 1.125rem; margin-bottom: 4px;">${office.name}</h3>
                <p style="font-size: 0.875rem; color: #4b5563; margin-bottom: 2px;">${office.address}</p>
                <p style="font-size: 0.875rem; color: #4b5563; margin-bottom: 4px;">${office.city}, ${office.state} ${office.zip}</p>
                ${office.phone ? `<p style="font-size: 0.875rem; color: #2563eb; margin-bottom: 12px;">${office.phone}</p>` : ''}
                <div>
                  <a href="/office/${office.id}" style="display: inline-flex; align-items: center; padding: 6px 12px; background-color: #2563eb; color: white; font-size: 0.875rem; border-radius: 4px; text-decoration: none; transition: background-color 0.15s;" 
                     onmouseover="this.style.backgroundColor='#1d4ed8'" 
                     onmouseout="this.style.backgroundColor='#2563eb'">
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

        if (offices.length > 0) {
          const bounds = new window.google.maps.LatLngBounds();
          offices.forEach(office => {
            bounds.extend({ lat: office.lat, lng: office.lng });
          });
          mapInstanceRef.current.fitBounds(bounds);
          
          const listener = window.google.maps.event.addListener(mapInstanceRef.current, 'bounds_changed', () => {
            if (mapInstanceRef.current.getZoom() > 12) {
              mapInstanceRef.current.setZoom(12);
            }
            window.google.maps.event.removeListener(listener);
          });
        }
      } catch (error) {
        console.error('Error adding markers to map:', error);
      }
    }, [clearMapElements]);

    const addMarkersToMap = useCallback((offices, center) => {
      if (!mapInstanceRef.current || !window.google) return;

      clearMapElements();

      try {
        const circle = new window.google.maps.Circle({
          strokeColor: '#3B82F6',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#3B82F6',
          fillOpacity: 0.15,
          map: mapInstanceRef.current,
          center: center,
          radius: currentRadius * 1609.34,
        });
        circleRef.current = circle;

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
              <div style="padding: 8px;">
                <h3 style="font-weight: 600; font-size: 1.125rem; margin-bottom: 4px;">${office.name}</h3>
                <p style="font-size: 0.875rem; color: #4b5563; margin-bottom: 2px;">${office.address}</p>
                <p style="font-size: 0.875rem; color: #4b5563; margin-bottom: 4px;">${office.city}, ${office.state} ${office.zip}</p>
                ${office.phone ? `<p style="font-size: 0.875rem; color: #2563eb; margin-bottom: 12px;">${office.phone}</p>` : ''}
                <div>
                  <a href="/office/${office.id}" style="display: inline-flex; align-items: center; padding: 6px 12px; background-color: #2563eb; color: white; font-size: 0.875rem; border-radius: 4px; text-decoration: none; transition: background-color 0.15s;" 
                     onmouseover="this.style.backgroundColor='#1d4ed8'" 
                     onmouseout="this.style.backgroundColor='#2563eb'">
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

        if (offices.length > 0) {
          const bounds = new window.google.maps.LatLngBounds();
          bounds.extend(center);
          offices.forEach(office => {
            bounds.extend({ lat: office.lat, lng: office.lng });
          });
          mapInstanceRef.current.fitBounds(bounds);
          
          const listener = window.google.maps.event.addListener(mapInstanceRef.current, 'bounds_changed', () => {
            if (mapInstanceRef.current.getZoom() > 12) {
              mapInstanceRef.current.setZoom(12);
            }
            window.google.maps.event.removeListener(listener);
          });
        }
      } catch (error) {
        console.error('Error updating map markers:', error);
      }
    }, [clearMapElements, currentRadius]);

    const handleSearch = async ({ location, radius }) => {
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

    return e('div', { className: 'max-w-7xl mx-auto' },
      e('div', { className: 'grid grid-cols-1 lg:grid-cols-3 gap-6' },
        e('div', { className: 'lg:col-span-1' },
          e(SearchPanel, { onSearch: handleSearch, isLoading }),
          e(OfficeList, { offices: filteredOffices })
        ),
        e('div', { className: 'lg:col-span-2' },
          e('div', { className: 'bg-card rounded-lg shadow-lg overflow-hidden h-[600px]' },
            mapError ? 
              e('div', { className: 'w-full h-full flex items-center justify-center bg-gray-100' },
                e('div', { className: 'text-center p-6' },
                  e('p', { className: 'text-red-600 font-medium mb-2' }, 'Map Loading Error'),
                  e('p', { className: 'text-sm text-gray-600 mb-4' }, mapError),
                  e('p', { className: 'text-xs text-gray-500' }, 
                    'Try disabling ad blockers or refreshing the page'
                  )
                )
              ) :
              e('div', { 
                ref: mapRef, 
                id: 'map', 
                className: 'w-full h-full'
              })
          )
        )
      )
    );
  };

  // Main App Component
  const OfficeLocatorWidget = () => {
    console.log('OfficeLocatorWidget component rendering');
    
    return e('div', { className: 'min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100' },
      e('div', { className: 'container mx-auto px-4 py-8' },
        e('div', { className: 'text-center mb-8' },
          e('h1', { className: 'text-4xl md:text-5xl font-bold text-foreground mb-4' },
            'Office Locator'
          ),
          e('p', { className: 'text-lg text-muted-foreground max-w-2xl mx-auto' },
            'Find our office locations near you. Enter your ZIP code or city name and search radius to discover nearby offices.'
          )
        ),
        e(OfficeLocator)
      )
    );
  };

  // Widget initialization function
  window.initOfficeLocator = function(containerId) {
    console.log('initOfficeLocator called with containerId:', containerId);
    
    const container = document.getElementById(containerId);
    if (container) {
      console.log('Container found, creating React root');
      try {
        const root = createRoot(container);
        root.render(e(OfficeLocatorWidget));
        console.log('Widget rendered successfully');
      } catch (error) {
        console.error('Error rendering widget:', error);
      }
    } else {
      console.error(`Container with id "${containerId}" not found`);
    }
  };

  // Auto-initialize if a default container exists
  document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, checking for default container');
    const defaultContainer = document.getElementById('office-locator-widget');
    if (defaultContainer) {
      console.log('Default container found, initializing widget');
      window.initOfficeLocator('office-locator-widget');
    } else {
      console.log('No default container found');
    }
  });

  // Also try immediate initialization in case DOM is already loaded
  console.log('Checking for immediate initialization');
  const immediateContainer = document.getElementById('office-locator-widget');
  if (immediateContainer) {
    console.log('Immediate container found, initializing widget');
    window.initOfficeLocator('office-locator-widget');
  }

})();
