
(function(){
var css = `
/* Reset and base styles */
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; }

/* Layout utilities */
.office-widget { width: 100%; max-width: 1200px; margin: 0 auto; padding: 20px; }
.search-form { background: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); padding: 24px; margin-bottom: 24px; }
.main-content { display: flex; flex-direction: column; gap: 24px; }
.results-panel { background: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); }
.map-panel { background: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); overflow: hidden; height: 400px; }

/* Desktop layout */
@media (min-width: 768px) {
  .main-content { flex-direction: row; }
  .results-panel { width: 380px; flex-shrink: 0; }
  .map-panel { flex: 1; height: 600px; }
}

/* Form styles */
.form-grid { display: grid; grid-template-columns: 1fr auto auto; gap: 16px; align-items: end; }
@media (max-width: 767px) {
  .form-grid { grid-template-columns: 1fr; gap: 16px; }
}

.form-group { display: flex; flex-direction: column; }
.form-label { font-size: 14px; font-weight: 600; color: #374151; margin-bottom: 8px; }
.form-input, .form-select { 
  padding: 12px 16px; 
  border: 2px solid #e5e7eb; 
  border-radius: 8px; 
  font-size: 16px; 
  transition: border-color 0.2s;
}
.form-input:focus, .form-select:focus { 
  outline: none; 
  border-color: #3b82f6; 
}

.search-button { 
  background: #3b82f6; 
  color: white; 
  border: none; 
  padding: 12px 24px; 
  border-radius: 8px; 
  font-size: 16px; 
  font-weight: 600; 
  cursor: pointer; 
  transition: background-color 0.2s;
}
.search-button:hover { background: #2563eb; }
.search-button:disabled { background: #9ca3af; cursor: not-allowed; }

/* Results styles */
.results-header { padding: 20px; border-bottom: 1px solid #e5e7eb; }
.results-title { font-size: 18px; font-weight: 700; color: #111827; margin-bottom: 4px; }
.results-count { font-size: 14px; color: #6b7280; }
.results-list { max-height: 500px; overflow-y: auto; }

.office-card { 
  padding: 20px; 
  border-bottom: 1px solid #f3f4f6; 
  cursor: pointer; 
  transition: background-color 0.2s;
}
.office-card:hover { background: #f9fafb; }
.office-card:last-child { border-bottom: none; }

.office-name { font-size: 16px; font-weight: 600; color: #111827; margin-bottom: 8px; }
.office-address { font-size: 14px; color: #6b7280; margin-bottom: 4px; }
.office-distance { 
  display: inline-block; 
  background: #dbeafe; 
  color: #1e40af; 
  padding: 4px 8px; 
  border-radius: 12px; 
  font-size: 12px; 
  font-weight: 600; 
  margin: 8px 0;
}

.office-actions { display: flex; gap: 8px; margin-top: 12px; }
.btn-primary { 
  background: #3b82f6; 
  color: white; 
  padding: 8px 16px; 
  border-radius: 6px; 
  text-decoration: none; 
  font-size: 14px; 
  font-weight: 500;
  transition: background-color 0.2s;
}
.btn-primary:hover { background: #2563eb; }
.btn-secondary { 
  background: #f3f4f6; 
  color: #374151; 
  padding: 8px 16px; 
  border-radius: 6px; 
  text-decoration: none; 
  font-size: 14px; 
  font-weight: 500;
  transition: background-color 0.2s;
}
.btn-secondary:hover { background: #e5e7eb; }

/* Map styles */
.map-container { width: 100%; height: 100%; position: relative; }
.map-error { 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  height: 100%; 
  text-align: center; 
  padding: 40px;
}
.error-content { max-width: 300px; }
.error-icon { font-size: 48px; margin-bottom: 16px; }
.error-title { font-size: 18px; font-weight: 600; color: #dc2626; margin-bottom: 8px; }
.error-message { font-size: 14px; color: #6b7280; margin-bottom: 16px; }
.error-hint { font-size: 12px; color: #9ca3af; }

/* Loading states */
.loading { opacity: 0.6; pointer-events: none; }
.spinner { 
  width: 20px; 
  height: 20px; 
  border: 2px solid #e5e7eb; 
  border-top: 2px solid #3b82f6; 
  border-radius: 50%; 
  animation: spin 1s linear infinite; 
  display: inline-block; 
  margin-right: 8px;
}
@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }

/* Empty state */
.empty-state { 
  text-align: center; 
  padding: 40px 20px; 
  color: #6b7280; 
}
`;

var style = document.createElement('style');
style.textContent = css;
document.head.appendChild(style);

(function() {
  'use strict';

  if (typeof React === 'undefined' || typeof ReactDOM === 'undefined') {
    console.error('Office Locator Widget: React and ReactDOM are required');
    return;
  }

  const e = React.createElement;
  const { useState, useCallback, useEffect, useRef } = React;
  const { createRoot } = ReactDOM;

  const WIDGET_ID = `office_locator_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  
  // Parse offices from HTML
  const parseOfficesFromHTML = () => {
    const officesContainer = document.getElementById('offices-data');
    if (!officesContainer) {
      console.warn('No offices-data element found on page');
      return [];
    }

    const embedDivs = officesContainer.querySelectorAll('.w-embed');
    const offices = [];

    embedDivs.forEach((embedDiv, index) => {
      try {
        let jsonText = embedDiv.textContent.trim();
        jsonText = jsonText.replace(/,$/, '');
        jsonText = jsonText.replace(/"id":\s*([^",\s]+)/g, '"id": "$1"');
        jsonText = jsonText.replace(/"name":\s*([^",\s][^"]*[^",\s])/g, '"name": "$1"');
        jsonText = jsonText.replace(/"address":\s*([^",\s][^"]*[^",\s])/g, '"address": "$1"');
        jsonText = jsonText.replace(/"city":\s*([^",\s][^"]*[^",\s])/g, '"city": "$1"');
        jsonText = jsonText.replace(/"state":\s*([^",\s]+)/g, '"state": "$1"');
        jsonText = jsonText.replace(/"zip":\s*([^",\s]+)/g, '"zip": "$1"');
        jsonText = jsonText.replace(/"phone":\s*([^",\s][^"]*[^",\s])/g, '"phone": "$1"');
        jsonText = jsonText.replace(/"email":\s*([^",\s][^"]*[^",\s])/g, '"email": "$1"');
        jsonText = jsonText.replace(/"office-url":\s*([^",\s][^"]*[^",\s])/g, '"office-url": "$1"');
        
        const officeData = JSON.parse(jsonText);
        
        offices.push({
          id: index + 1,
          name: officeData.name,
          address: officeData.address,
          city: officeData.city,
          state: officeData.state,
          zip: officeData.zip,
          phone: officeData.phone,
          email: officeData.email,
          officeUrl: officeData['office-url']
        });
      } catch (error) {
        console.error('Error parsing office data:', error, embedDiv.textContent);
      }
    });

    return offices;
  };

  // Distance calculation
  const calculateDistance = (lat1, lng1, lat2, lng2) => {
    const R = 3959;
    const dLat = toRadians(lat2 - lat1);
    const dLng = toRadians(lng2 - lng1);
    
    const a = 
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
      Math.sin(dLng / 2) * Math.sin(dLng / 2);
    
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const toRadians = (degrees) => degrees * (Math.PI / 180);

  // Geocoding with existing Google Maps
  const geocodeLocation = async (location) => {
    try {
      if (typeof window !== 'undefined' && window.google && window.google.maps && window.google.maps.Geocoder) {
        const geocoder = new window.google.maps.Geocoder();
        const result = await new Promise((resolve, reject) => {
          geocoder.geocode({ address: location }, (results, status) => {
            if (status === 'OK' && results && results.length > 0) {
              resolve(results);
            } else {
              reject(new Error(`Geocoding failed: ${status}`));
            }
          });
        });

        if (result.length > 0) {
          const location = result[0].geometry.location;
          const lat = typeof location.lat === 'function' ? location.lat() : location.lat;
          const lng = typeof location.lng === 'function' ? location.lng() : location.lng;
          return { lat, lng, address: result[0].formatted_address };
        }
      }
      return null;
    } catch (error) {
      console.error('Geocoding error:', error);
      return null;
    }
  };

  // Simple toast system
  const toast = {
    success: (message) => console.log('✓', message),
    error: (message) => console.error('✗', message),
    info: (message) => console.info('ℹ', message)
  };

  // Google Maps hook - uses existing instance
  const useGoogleMaps = () => {
    const [mapError, setMapError] = useState(null);
    const mapRef = useRef(null);
    const mapInstanceRef = useRef(null);
    const markersRef = useRef([]);
    const circleRef = useRef(null);

    const isGoogleMapsAvailable = useCallback(() => {
      return window.google && window.google.maps && window.google.maps.Map;
    }, []);

    const initializeMap = useCallback(() => {
      if (!mapRef.current || mapInstanceRef.current || !isGoogleMapsAvailable()) {
        return;
      }

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
        setMapError(null);
      } catch (error) {
        console.error('Failed to initialize map:', error);
        setMapError('Failed to load map. Please refresh the page.');
      }
    }, [isGoogleMapsAvailable]);

    const clearMapElements = useCallback(() => {
      markersRef.current.forEach(marker => {
        if (marker && marker.setMap) marker.setMap(null);
      });
      markersRef.current = [];
      
      if (circleRef.current && circleRef.current.setMap) {
        circleRef.current.setMap(null);
        circleRef.current = null;
      }
    }, []);

    const addMarkersToMap = useCallback(async (offices, center, radius) => {
      if (!mapInstanceRef.current || !isGoogleMapsAvailable()) return;

      clearMapElements();

      try {
        // Add search radius circle
        const circle = new window.google.maps.Circle({
          strokeColor: '#3B82F6',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#3B82F6',
          fillOpacity: 0.15,
          map: mapInstanceRef.current,
          center: center,
          radius: radius * 1609.34,
        });
        circleRef.current = circle;

        // Add center marker
        const centerMarker = new window.google.maps.Marker({
          position: center,
          map: mapInstanceRef.current,
          title: 'Search Center',
          icon: {
            path: window.google.maps.SymbolPath.CIRCLE,
            scale: 8,
            fillColor: '#EF4444',
            fillOpacity: 1,
            strokeColor: '#ffffff',
            strokeWeight: 2
          }
        });

        const bounds = new window.google.maps.LatLngBounds();
        bounds.extend(center);

        // Add office markers
        for (const office of offices) {
          const fullAddress = `${office.address}, ${office.city}, ${office.state} ${office.zip}`;
          const coords = await geocodeLocation(fullAddress);
          
          if (coords) {
            const marker = new window.google.maps.Marker({
              position: { lat: coords.lat, lng: coords.lng },
              map: mapInstanceRef.current,
              title: office.name,
              icon: {
                url: 'https://cdn.prod.website-files.com/67eb9b3bbf63235c4d69b63e/67f1849f85b2f6cd4969a4b2_pin.png',
                scaledSize: new window.google.maps.Size(32, 32),
              }
            });

            const infoWindow = new window.google.maps.InfoWindow({
              content: `
                <div style="max-width: 280px; padding: 16px;">
                  <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: 600;">${office.name}</h3>
                  <p style="margin: 0 0 4px 0; font-size: 14px; color: #666;">${office.address}</p>
                  <p style="margin: 0 0 8px 0; font-size: 14px; color: #666;">${office.city}, ${office.state} ${office.zip}</p>
                  ${office.phone ? `<p style="margin: 0 0 12px 0; font-size: 14px; color: #3b82f6;">${office.phone}</p>` : ''}
                  ${office.distance ? `<p style="margin: 0 0 12px 0; font-size: 14px; color: #059669; font-weight: 600;">${office.distance} miles away</p>` : ''}
                  <div style="display: flex; gap: 8px;">
                    <a href="${office.officeUrl || '/office/' + office.id}" target="_blank" style="padding: 8px 16px; background: #3b82f6; color: white; text-decoration: none; border-radius: 6px; font-size: 14px;">Book Training</a>
                    <a href="https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fullAddress)}" target="_blank" style="padding: 8px 16px; background: #f3f4f6; color: #374151; text-decoration: none; border-radius: 6px; font-size: 14px;">Directions</a>
                  </div>
                </div>
              `
            });

            marker.addListener('click', () => {
              markersRef.current.forEach(m => {
                if (m.infoWindow && m !== marker) m.infoWindow.close();
              });
              infoWindow.open(mapInstanceRef.current, marker);
            });

            marker.infoWindow = infoWindow;
            markersRef.current.push(marker);
            bounds.extend({ lat: coords.lat, lng: coords.lng });
          }
        }

        if (markersRef.current.length > 0) {
          mapInstanceRef.current.fitBounds(bounds);
          
          const listener = window.google.maps.event.addListener(mapInstanceRef.current, 'bounds_changed', () => {
            if (mapInstanceRef.current.getZoom() > 12) {
              mapInstanceRef.current.setZoom(12);
            }
            window.google.maps.event.removeListener(listener);
          });
        }
      } catch (error) {
        console.error('Error adding markers:', error);
      }
    }, [clearMapElements, isGoogleMapsAvailable]);

    const showAllOffices = useCallback(async (offices) => {
      if (!mapInstanceRef.current || !isGoogleMapsAvailable()) return;

      clearMapElements();

      try {
        const bounds = new window.google.maps.LatLngBounds();

        for (const office of offices) {
          const fullAddress = `${office.address}, ${office.city}, ${office.state} ${office.zip}`;
          const coords = await geocodeLocation(fullAddress);
          
          if (coords) {
            const marker = new window.google.maps.Marker({
              position: { lat: coords.lat, lng: coords.lng },
              map: mapInstanceRef.current,
              title: office.name,
              icon: {
                url: 'https://cdn.prod.website-files.com/67eb9b3bbf63235c4d69b63e/67f1849f85b2f6cd4969a4b2_pin.png',
                scaledSize: new window.google.maps.Size(32, 32),
              }
            });

            const infoWindow = new window.google.maps.InfoWindow({
              content: `
                <div style="max-width: 280px; padding: 16px;">
                  <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: 600;">${office.name}</h3>
                  <p style="margin: 0 0 4px 0; font-size: 14px; color: #666;">${office.address}</p>
                  <p style="margin: 0 0 8px 0; font-size: 14px; color: #666;">${office.city}, ${office.state} ${office.zip}</p>
                  ${office.phone ? `<p style="margin: 0 0 12px 0; font-size: 14px; color: #3b82f6;">${office.phone}</p>` : ''}
                  <div style="display: flex; gap: 8px;">
                    <a href="${office.officeUrl || '/office/' + office.id}" target="_blank" style="padding: 8px 16px; background: #3b82f6; color: white; text-decoration: none; border-radius: 6px; font-size: 14px;">Book Training</a>
                    <a href="https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fullAddress)}" target="_blank" style="padding: 8px 16px; background: #f3f4f6; color: #374151; text-decoration: none; border-radius: 6px; font-size: 14px;">Directions</a>
                  </div>
                </div>
              `
            });

            marker.addListener('click', () => {
              markersRef.current.forEach(m => {
                if (m.infoWindow && m !== marker) m.infoWindow.close();
              });
              infoWindow.open(mapInstanceRef.current, marker);
            });

            marker.infoWindow = infoWindow;
            markersRef.current.push(marker);
            bounds.extend({ lat: coords.lat, lng: coords.lng });
          }
        }

        if (markersRef.current.length > 0) {
          mapInstanceRef.current.fitBounds(bounds);
          
          const listener = window.google.maps.event.addListener(mapInstanceRef.current, 'bounds_changed', () => {
            if (mapInstanceRef.current.getZoom() > 12) {
              mapInstanceRef.current.setZoom(12);
            }
            window.google.maps.event.removeListener(listener);
          });
        }
      } catch (error) {
        console.error('Error showing all offices:', error);
      }
    }, [clearMapElements, isGoogleMapsAvailable]);

    useEffect(() => {
      if (isGoogleMapsAvailable()) {
        initializeMap();
      } else {
        // Wait for existing Google Maps to load
        const checkInterval = setInterval(() => {
          if (isGoogleMapsAvailable()) {
            clearInterval(checkInterval);
            initializeMap();
          }
        }, 100);

        setTimeout(() => {
          clearInterval(checkInterval);
          if (!isGoogleMapsAvailable()) {
            setMapError('Google Maps is not available. Please refresh the page.');
          }
        }, 10000);
      }
    }, [initializeMap, isGoogleMapsAvailable]);

    return {
      mapRef,
      mapInstanceRef,
      mapError,
      addMarkersToMap,
      showAllOffices
    };
  };

  // Office search hook
  const useOfficeSearch = (offices) => {
    const [filteredOffices, setFilteredOffices] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSearch = async ({ location, radius }, onMapUpdate) => {
      setIsLoading(true);
      
      try {
        const coordinates = await geocodeLocation(location);
        
        if (!coordinates) {
          toast.error('Location not found. Please try a different address.');
          setFilteredOffices([]);
          return;
        }

        const nearbyOffices = [];
        
        for (const office of offices) {
          const fullAddress = `${office.address}, ${office.city}, ${office.state} ${office.zip}`;
          const officeCoords = await geocodeLocation(fullAddress);
          
          if (officeCoords) {
            const distance = calculateDistance(
              coordinates.lat,
              coordinates.lng,
              officeCoords.lat,
              officeCoords.lng
            );
            
            if (distance <= radius) {
              nearbyOffices.push({
                ...office,
                distance: Math.round(distance * 10) / 10
              });
            }
          }
        }

        nearbyOffices.sort((a, b) => (a.distance || 0) - (b.distance || 0));
        setFilteredOffices(nearbyOffices);

        if (onMapUpdate) {
          onMapUpdate(nearbyOffices, coordinates, radius);
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

    return {
      filteredOffices,
      isLoading,
      handleSearch
    };
  };

  // Search Panel Component
  const SearchPanel = ({ onSearch, isLoading }) => {
    const [location, setLocation] = useState('');
    const [radius, setRadius] = useState('25');

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!location.trim()) return;
      onSearch({ location: location.trim(), radius: parseInt(radius) });
    };

    return e('div', { className: 'search-form' },
      e('form', { onSubmit: handleSubmit },
        e('div', { className: 'form-grid' },
          e('div', { className: 'form-group' },
            e('label', { className: 'form-label' }, 'Enter your ZIP code or city name'),
            e('input', {
              type: 'text',
              placeholder: 'ZIP code, city, or address',
              value: location,
              onChange: (e) => setLocation(e.target.value),
              className: 'form-input',
              disabled: isLoading
            })
          ),
          e('div', { className: 'form-group' },
            e('label', { className: 'form-label' }, 'Search Radius'),
            e('select', {
              value: radius,
              onChange: (e) => setRadius(e.target.value),
              className: 'form-select',
              disabled: isLoading
            },
              e('option', { value: '5' }, '5 miles'),
              e('option', { value: '10' }, '10 miles'),
              e('option', { value: '25' }, '25 miles'),
              e('option', { value: '50' }, '50 miles'),
              e('option', { value: '100' }, '100 miles')
            )
          ),
          e('button', {
            type: 'submit',
            className: 'search-button',
            disabled: isLoading || !location.trim()
          },
            isLoading ? [
              e('span', { className: 'spinner', key: 'spinner' }),
              'Searching...'
            ] : 'Find Locations'
          )
        )
      )
    );
  };

  // Office List Component
  const OfficeList = ({ offices, onOfficeClick }) => {
    if (offices.length === 0) {
      return e('div', { className: 'results-panel' },
        e('div', { className: 'empty-state' },
          e('p', null, 'Enter a location above to find nearby offices')
        )
      );
    }

    return e('div', { className: 'results-panel' },
      e('div', { className: 'results-header' },
        e('h3', { className: 'results-title' }, 'Nearby Locations'),
        e('p', { className: 'results-count' }, `${offices.length} location${offices.length === 1 ? '' : 's'} found`)
      ),
      e('div', { className: 'results-list' },
        offices.map(office =>
          e('div', {
            key: office.id,
            className: 'office-card',
            onClick: () => onOfficeClick && onOfficeClick(office)
          },
            e('div', { className: 'office-name' }, office.name),
            e('div', { className: 'office-address' }, office.address),
            e('div', { className: 'office-address' }, `${office.city}, ${office.state} ${office.zip}`),
            office.phone && e('div', { className: 'office-address' }, office.phone),
            office.distance !== undefined && e('span', { className: 'office-distance' }, `${office.distance} miles away`),
            e('div', { className: 'office-actions' },
              e('a', {
                href: office.officeUrl || `/office/${office.id}`,
                target: '_blank',
                className: 'btn-primary',
                rel: 'noopener noreferrer',
                onClick: (e) => e.stopPropagation()
              }, 'Book CPR Training'),
              e('a', {
                href: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${office.address}, ${office.city}, ${office.state} ${office.zip}`)}`,
                target: '_blank',
                className: 'btn-secondary',
                rel: 'noopener noreferrer',
                onClick: (e) => e.stopPropagation()
              }, 'Get Directions')
            )
          )
        )
      )
    );
  };

  // Main Office Locator Component
  const OfficeLocator = () => {
    const [offices, setOffices] = useState([]);
    const { mapRef, mapInstanceRef, mapError, addMarkersToMap, showAllOffices } = useGoogleMaps();
    const { filteredOffices, isLoading, handleSearch } = useOfficeSearch(offices);

    useEffect(() => {
      const parsedOffices = parseOfficesFromHTML();
      setOffices(parsedOffices);
    }, []);

    useEffect(() => {
      if (mapInstanceRef.current && offices.length > 0) {
        showAllOffices(offices);
      }
    }, [mapInstanceRef.current, offices, showAllOffices]);

    const onSearch = (searchParams) => {
      handleSearch(searchParams, (nearbyOffices, center, radius) => {
        if (mapInstanceRef.current) {
          addMarkersToMap(nearbyOffices, center, radius);
        }
      });
    };

    return e('div', { className: 'office-widget' },
      e(SearchPanel, { onSearch: onSearch, isLoading }),
      e('div', { className: 'main-content' },
        e(OfficeList, { offices: filteredOffices }),
        e('div', { className: 'map-panel' },
          mapError ? 
            e('div', { className: 'map-error' },
              e('div', { className: 'error-content' },
                e('div', { className: 'error-icon' }, '🗺️'),
                e('div', { className: 'error-title' }, 'Map Loading Error'),
                e('div', { className: 'error-message' }, mapError),
                e('div', { className: 'error-hint' }, 'Please refresh the page to try again')
              )
            ) :
            e('div', { 
              ref: mapRef, 
              className: 'map-container'
            })
        )
      )
    );
  };

  // Widget initialization
  window.initOfficeLocator = function(containerId) {
    const container = document.getElementById(containerId);
    if (container) {
      try {
        const root = createRoot(container);
        root.render(e(OfficeLocator));
      } catch (error) {
        console.error('Error rendering widget:', error);
      }
    } else {
      console.error(`Container with id "${containerId}" not found`);
    }
  };

  // Auto-initialize
  document.addEventListener('DOMContentLoaded', () => {
    const defaultContainer = document.getElementById('office-locator-widget');
    if (defaultContainer) {
      window.initOfficeLocator('office-locator-widget');
    }
  });

  const immediateContainer = document.getElementById('office-locator-widget');
  if (immediateContainer) {
    window.initOfficeLocator('office-locator-widget');
  }

})();
})();
