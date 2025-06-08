(function(){
var css = ":root { --background: 0 0% 100%; --foreground: 222.2 84% 4.9%; --card: 0 0% 100%; --card-foreground: 222.2 84% 4.9%; --popover: 0 0% 100%; --popover-foreground: 222.2 84% 4.9%; --primary: 221.2 83.2% 53.3%; --primary-foreground: 210 40% 98%; --secondary: 210 40% 96%; --secondary-foreground: 222.2 84% 4.9%; --muted: 210 40% 96%; --muted-foreground: 215.4 16.3% 46.9%; --accent: 210 40% 96%; --accent-foreground: 222.2 84% 4.9%; --destructive: 0 62.8% 30.6%; --destructive-foreground: 210 40% 98%; --border: 214.3 31.8% 91.4%; --input: 214.3 31.8% 91.4%; --ring: 221.2 83.2% 53.3%; --chart-1: 12 76% 61%; --chart-2: 173 58% 39%; --chart-3: 197 37% 24%; --chart-4: 43 74% 66%; --chart-5: 27 87% 67%; --radius: 0.5rem; } *, ::before, ::after { box-sizing: border-box; border-width: 0; border-style: solid; border-color: #e5e7eb; } ::before, ::after { --tw-content: ''; } html, :host { line-height: 1.5; -webkit-text-size-adjust: 100%; -moz-tab-size: 4; tab-size: 4; font-family: ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; font-feature-settings: normal; font-variation-settings: normal; -webkit-tap-highlight-color: transparent; } body { margin: 0; line-height: inherit; } .container { width: 100%; margin-left: auto; margin-right: auto; padding-left: 1rem; padding-right: 1rem; } @media (min-width: 640px) { .container { max-width: 640px; } } @media (min-width: 768px) { .container { max-width: 768px; } } @media (min-width: 1024px) { .container { max-width: 1024px; } } @media (min-width: 1280px) { .container { max-width: 1280px; } } @media (min-width: 1536px) { .container { max-width: 1536px; } } .flex { display: flex; } .grid { display: grid; } .hidden { display: none; } .absolute { position: absolute; } .relative { position: relative; } .inset-0 { top: 0; right: 0; bottom: 0; left: 0; } .top-4 { top: 1rem; } .left-4 { left: 1rem; } .right-4 { right: 1rem; } .z-10 { z-index: 10; } .z-50 { z-index: 50; } .h-full { height: 100%; } .h-10 { height: 2.5rem; } .h-96 { height: 24rem; } .h-\\[500px\\] { height: 500px; } .w-full { width: 100%; } .w-80 { width: 20rem; } .w-32 { width: 8rem; } .max-w-xs { max-width: 20rem; } .max-w-sm { max-width: 24rem; } .max-h-80 { max-height: 20rem; } .flex-1 { flex: 1 1 0%; } .flex-col { flex-direction: column; } .items-center { align-items: center; } .justify-center { justify-content: center; } .justify-between { justify-content: space-between; } .gap-2 { gap: 0.5rem; } .gap-3 { gap: 0.75rem; } .gap-4 { gap: 1rem; } .rounded-lg { border-radius: 0.5rem; } .rounded-md { border-radius: 0.375rem; } .rounded-full { border-radius: 9999px; } .border { border-width: 1px; } .border-gray-200 { border-color: #e5e7eb; } .border-gray-300 { border-color: #d1d5db; } .bg-white { background-color: #ffffff; } .bg-gray-50 { background-color: #f9fafb; } .bg-gray-100 { background-color: #f3f4f6; } .bg-blue-600 { background-color: #2563eb; } .bg-blue-50 { background-color: #eff6ff; } .bg-red-500 { background-color: #ef4444; } .p-3 { padding: 0.75rem; } .p-4 { padding: 1rem; } .p-6 { padding: 1.5rem; } .px-3 { padding-left: 0.75rem; padding-right: 0.75rem; } .px-4 { padding-left: 1rem; padding-right: 1rem; } .py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; } .py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; } .mb-2 { margin-bottom: 0.5rem; } .mb-3 { margin-bottom: 0.75rem; } .mb-4 { margin-bottom: 1rem; } .mr-2 { margin-right: 0.5rem; } .text-sm { font-size: 0.875rem; line-height: 1.25rem; } .text-base { font-size: 1rem; line-height: 1.5rem; } .text-lg { font-size: 1.125rem; line-height: 1.75rem; } .text-xl { font-size: 1.25rem; line-height: 1.75rem; } .font-medium { font-weight: 500; } .font-semibold { font-weight: 600; } .font-bold { font-weight: 700; } .text-gray-600 { color: #4b5563; } .text-gray-700 { color: #374151; } .text-gray-800 { color: #1f2937; } .text-blue-600 { color: #2563eb; } .text-white { color: #ffffff; } .text-red-600 { color: #dc2626; } .shadow-sm { box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05); } .shadow-md { box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1); } .shadow-lg { box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1); } .hover\\:bg-gray-50:hover { background-color: #f9fafb; } .hover\\:bg-blue-700:hover { background-color: #1d4ed8; } .focus\\:outline-none:focus { outline: 2px solid transparent; outline-offset: 2px; } .focus\\:ring-2:focus { --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color); --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color); box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000); } .focus\\:ring-blue-500:focus { --tw-ring-color: #3b82f6; } .transition { transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; } .cursor-pointer { cursor: pointer; } .select-none { user-select: none; } .overflow-hidden { overflow: hidden; } .overflow-y-auto { overflow-y: auto; } .space-y-2 > :not([hidden]) ~ :not([hidden]) { margin-top: 0.5rem; } .space-y-3 > :not([hidden]) ~ :not([hidden]) { margin-top: 0.75rem; } .truncate { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; } @media (min-width: 768px) { .md\\:flex-row { flex-direction: row; } .md\\:w-96 { width: 24rem; } }";
var style = document.createElement('style');
style.textContent = css;
document.head.appendChild(style);

(function() {
  'use strict';

  // Check if React is available
  if (typeof React === 'undefined' || typeof ReactDOM === 'undefined') {
    console.error('Office Locator Widget: React and ReactDOM are required');
    return;
  }

  // React and ReactDOM
  const e = React.createElement;
  const { useState, useCallback, useEffect, useRef } = React;
  const { createRoot } = ReactDOM;

  // Unique namespace for this widget instance
  const WIDGET_ID = `office_locator_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  
  // Function to parse office data from HTML
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
        
        // Handle the comma at the end if it exists
        jsonText = jsonText.replace(/,$/, '');
        
        // Fix unquoted string values in the JSON - handle various patterns
        jsonText = jsonText.replace(/"id":\s*([^",\s]+)/g, '"id": "$1"');
        jsonText = jsonText.replace(/"name":\s*([^",\s][^"]*[^",\s])/g, '"name": "$1"');
        jsonText = jsonText.replace(/"address":\s*([^",\s][^"]*[^",\s])/g, '"address": "$1"');
        jsonText = jsonText.replace(/"city":\s*([^",\s][^"]*[^",\s])/g, '"city": "$1"');
        jsonText = jsonText.replace(/"state":\s*([^",\s]+)/g, '"state": "$1"');
        jsonText = jsonText.replace(/"zip":\s*([^",\s]+)/g, '"zip": "$1"');
        jsonText = jsonText.replace(/"phone":\s*([^",\s][^"]*[^",\s])/g, '"phone": "$1"');
        jsonText = jsonText.replace(/"email":\s*([^",\s][^"]*[^",\s])/g, '"email": "$1"');
        jsonText = jsonText.replace(/"office-url":\s*([^",\s][^"]*[^",\s])/g, '"office-url": "$1"');
        
        console.log('Cleaned JSON text:', jsonText);
        
        const officeData = JSON.parse(jsonText);
        
        // Convert the data to match our expected format
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

    console.log('Parsed offices from HTML:', offices);
    return offices;
  };

  // Haversine formula to calculate distance between two points on Earth
  const calculateDistance = (lat1, lng1, lat2, lng2) => {
    const R = 3959; // Earth's radius in miles
    const dLat = toRadians(lat2 - lat1);
    const dLng = toRadians(lng2 - lng1);
    
    const a = 
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
      Math.sin(dLng / 2) * Math.sin(dLng / 2);
    
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    
    return distance;
  };

  const toRadians = (degrees) => {
    return degrees * (Math.PI / 180);
  };

  // Enhanced geocoding function that relies only on Google Maps API
  const geocodeLocation = async (location) => {
    try {
      if (typeof window !== 'undefined' && window.google && window.google.maps && window.google.maps.Geocoder) {
        console.log('Using Google Maps Geocoding API for:', location);
        const geocoder = new window.google.maps.Geocoder();
        const result = await new Promise((resolve, reject) => {
          try {
            geocoder.geocode({ address: location }, (results, status) => {
              if (status === 'OK' && results && results.length > 0) {
                resolve(results);
              } else {
                reject(new Error(`Geocoding failed: ${status}`));
              }
            });
          } catch (error) {
            reject(error);
          }
        });

        if (result.length > 0) {
          const location = result[0].geometry.location;
          const lat = typeof location.lat === 'function' ? location.lat() : location.lat;
          const lng = typeof location.lng === 'function' ? location.lng() : location.lng;
          return { lat, lng, address: result[0].formatted_address };
        }
        
        return null;
      } else {
        console.error('Google Maps Geocoding API not available');
        return null;
      }
    } catch (error) {
      console.error('Geocoding error:', error);
      return null;
    }
  };

  // Toast function (simplified)
  const toast = {
    success: (message) => console.log('Success:', message),
    error: (message) => console.error('Error:', message),
    info: (message) => console.info('Info:', message)
  };

  // Enhanced Google Maps availability check with more thorough validation
  const isGoogleMapsFullyLoaded = () => {
    try {
      if (typeof window === 'undefined' || !window.google) {
        console.log('Google Maps: window.google not available');
        return false;
      }
      
      if (!window.google.maps) {
        console.log('Google Maps: window.google.maps not available');
        return false;
      }

      // Check for essential classes and methods
      const requiredClasses = [
        'Map', 'Marker', 'Circle', 'Geocoder', 'InfoWindow', 'LatLngBounds'
      ];

      for (const className of requiredClasses) {
        if (!window.google.maps[className]) {
          console.log(`Google Maps: ${className} not available`);
          return false;
        }
      }

      // Check for event system
      if (!window.google.maps.event || !window.google.maps.event.addListener) {
        console.log('Google Maps: event system not available');
        return false;
      }

      console.log('Google Maps is fully loaded and validated');
      return true;
    } catch (error) {
      console.error('Error checking Google Maps availability:', error);
      return false;
    }
  };

  // Wait for Google Maps to be fully loaded with better error handling
  const waitForGoogleMaps = (callback, maxAttempts = 100, attempt = 0) => {
    if (isGoogleMapsFullyLoaded()) {
      console.log('Google Maps is ready, executing callback');
      try {
        callback();
      } catch (error) {
        console.error('Error executing Google Maps callback:', error);
      }
      return;
    }
    
    if (attempt >= maxAttempts) {
      console.error('Google Maps failed to load after maximum attempts');
      return;
    }
    
    console.log(`Waiting for Google Maps... attempt ${attempt + 1}/${maxAttempts}`);
    setTimeout(() => {
      waitForGoogleMaps(callback, maxAttempts, attempt + 1);
    }, 100);
  };

  // useGoogleMaps hook with improved conflict resolution
  const useGoogleMaps = () => {
    const [mapError, setMapError] = useState(null);
    const mapRef = useRef(null);
    const mapInstanceRef = useRef(null);
    const markersRef = useRef([]);
    const circleRef = useRef(null);
    const mapLoadedRef = useRef(false);
    const scriptLoadedRef = useRef(false);

    const hasExistingGoogleMaps = useCallback(() => {
      return document.querySelector('script[src*="maps.googleapis.com"]') !== null;
    }, []);

    const initializeMap = useCallback(() => {
      if (!mapRef.current || mapInstanceRef.current) {
        console.log('Map ref not available or map already initialized');
        return;
      }

      if (!isGoogleMapsFullyLoaded()) {
        console.log('Google Maps not fully loaded yet, waiting...');
        waitForGoogleMaps(initializeMap);
        return;
      }

      try {
        console.log('Initializing Google Maps instance...');
        
        // Create map with additional error handling
        const mapOptions = {
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
        };

        const map = new window.google.maps.Map(mapRef.current, mapOptions);

        // Wait for map to be fully initialized
        window.google.maps.event.addListenerOnce(map, 'idle', () => {
          console.log('Google Maps fully initialized and ready');
          mapInstanceRef.current = map;
          mapLoadedRef.current = true;
          setMapError(null);
        });

        // Add error handling for map
        window.google.maps.event.addListener(map, 'tilesloaded', () => {
          console.log('Map tiles loaded successfully');
        });

      } catch (error) {
        console.error('Failed to initialize map:', error);
        setMapError('Failed to load map. Please check if ad blockers are interfering.');
      }
    }, []);

    const clearMapElements = useCallback(() => {
      try {
        markersRef.current.forEach(marker => {
          if (marker && typeof marker.setMap === 'function') {
            marker.setMap(null);
          }
        });
        markersRef.current = [];
        
        if (circleRef.current && typeof circleRef.current.setMap === 'function') {
          circleRef.current.setMap(null);
          circleRef.current = null;
        }
      } catch (error) {
        console.error('Error clearing map elements:', error);
      }
    }, []);

    const centerMapOnOffice = useCallback(async (office) => {
      if (!mapInstanceRef.current) {
        console.log('Map not ready for centering');
        return;
      }

      try {
        const fullAddress = `${office.address}, ${office.city}, ${office.state} ${office.zip}`;
        const coords = await geocodeLocation(fullAddress);
        
        if (coords) {
          mapInstanceRef.current.setCenter({ lat: coords.lat, lng: coords.lng });
          mapInstanceRef.current.setZoom(15);
          
          // Close any open info windows
          markersRef.current.forEach(marker => {
            if (marker.infoWindow) {
              marker.infoWindow.close();
            }
          });
        }
      } catch (error) {
        console.error('Error centering map on office:', error);
      }
    }, []);

    // ... keep existing code (addOfficeMarkersToMap and addMarkersToMap functions)

    const addOfficeMarkersToMap = useCallback(async (offices) => {
      if (!mapInstanceRef.current) {
        console.log('Map not ready for markers');
        return;
      }

      if (!isGoogleMapsFullyLoaded()) {
        console.log('Google Maps not fully loaded, waiting before adding markers...');
        waitForGoogleMaps(() => addOfficeMarkersToMap(offices));
        return;
      }

      clearMapElements();

      try {
        const bounds = new window.google.maps.LatLngBounds();
        let markersAdded = 0;

        for (const office of offices) {
          const fullAddress = `${office.address}, ${office.city}, ${office.state} ${office.zip}`;
          const coords = await geocodeLocation(fullAddress);
          
          if (coords) {
            try {
              const marker = new window.google.maps.Marker({
                position: { lat: coords.lat, lng: coords.lng },
                map: mapInstanceRef.current,
                title: office.name,
                icon: {
                  url: 'https://cdn.prod.website-files.com/67eb9b3bbf63235c4d69b63e/67f1849f85b2f6cd4969a4b2_pin.png',
                  scaledSize: new window.google.maps.Size(32, 32),
                },
              });

              const infoWindow = new window.google.maps.InfoWindow({
                content: `
                  <div style="max-width: 300px; padding: 16px; font-family: ui-sans-serif, system-ui, sans-serif;">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;">
                      <h3 style="font-size: 18px; font-weight: 600; color: #1f2937; margin: 0; line-height: 1.4;">${office.name}</h3>
                      <button onclick="this.parentElement.parentElement.parentElement.remove()" style="background: none; border: none; font-size: 18px; color: #6b7280; cursor: pointer; padding: 0; margin-left: 8px;">×</button>
                    </div>
                    <div style="margin-bottom: 12px;">
                      <p style="font-size: 14px; color: #4b5563; margin: 0; line-height: 1.4;">${office.address}</p>
                      <p style="font-size: 14px; color: #4b5563; margin: 0; line-height: 1.4;">${office.city}, ${office.state} ${office.zip}</p>
                    </div>
                    ${office.phone ? `<div style="margin-bottom: 12px;"><a href="tel:${office.phone}" style="font-size: 14px; color: #2563eb; text-decoration: none;">${office.phone}</a></div>` : ''}
                    <div style="display: flex; gap: 8px;">
                      <a href="${office.officeUrl || '/office/' + office.id}" target="_blank" style="display: inline-flex; align-items: center; padding: 8px 16px; background-color: #2563eb; color: white; font-size: 14px; font-weight: 500; border-radius: 6px; text-decoration: none; transition: background-color 0.15s;" 
                         onmouseover="this.style.backgroundColor='#1d4ed8'" 
                         onmouseout="this.style.backgroundColor='#2563eb'">
                        View Details
                      </a>
                      <a href="https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fullAddress)}" target="_blank" style="display: inline-flex; align-items: center; padding: 8px 16px; background-color: #f3f4f6; color: #374151; font-size: 14px; font-weight: 500; border-radius: 6px; text-decoration: none; transition: background-color 0.15s;" 
                         onmouseover="this.style.backgroundColor='#e5e7eb'" 
                         onmouseout="this.style.backgroundColor='#f3f4f6'">
                        Get Directions
                      </a>
                    </div>
                  </div>
                `,
              });

              // Store infoWindow reference on marker
              marker.infoWindow = infoWindow;

              if (marker.addListener) {
                marker.addListener('click', () => {
                  // Close all other info windows
                  markersRef.current.forEach(m => {
                    if (m.infoWindow && m !== marker) {
                      m.infoWindow.close();
                    }
                  });
                  infoWindow.open(mapInstanceRef.current, marker);
                });
              }

              markersRef.current.push(marker);
              bounds.extend({ lat: coords.lat, lng: coords.lng });
              markersAdded++;
            } catch (markerError) {
              console.error('Error creating marker for office:', office.name, markerError);
            }
          } else {
            console.warn('Could not geocode office address:', fullAddress);
          }
        }

        if (markersAdded > 0 && mapInstanceRef.current.fitBounds) {
          mapInstanceRef.current.fitBounds(bounds);
          
          if (window.google.maps.event && window.google.maps.event.addListener) {
            const listener = window.google.maps.event.addListener(mapInstanceRef.current, 'bounds_changed', () => {
              if (mapInstanceRef.current && mapInstanceRef.current.getZoom && mapInstanceRef.current.getZoom() > 12) {
                mapInstanceRef.current.setZoom(12);
              }
              if (window.google.maps.event.removeListener) {
                window.google.maps.event.removeListener(listener);
              }
            });
          }
        }
      } catch (error) {
        console.error('Error adding markers to map:', error);
      }
    }, [clearMapElements]);

    const addMarkersToMap = useCallback(async (offices, center, currentRadius) => {
      if (!mapInstanceRef.current) {
        console.log('Map not ready for search markers');
        return;
      }

      if (!isGoogleMapsFullyLoaded()) {
        console.log('Google Maps not fully loaded, waiting before adding search markers...');
        waitForGoogleMaps(() => addMarkersToMap(offices, center, currentRadius));
        return;
      }

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

        const bounds = new window.google.maps.LatLngBounds();
        bounds.extend(center);
        let markersAdded = 0;

        for (const office of offices) {
          const fullAddress = `${office.address}, ${office.city}, ${office.state} ${office.zip}`;
          const coords = await geocodeLocation(fullAddress);
          
          if (coords) {
            try {
              const marker = new window.google.maps.Marker({
                position: { lat: coords.lat, lng: coords.lng },
                map: mapInstanceRef.current,
                title: office.name,
                icon: {
                  url: 'https://cdn.prod.website-files.com/67eb9b3bbf63235c4d69b63e/67f1849f85b2f6cd4969a4b2_pin.png',
                  scaledSize: new window.google.maps.Size(32, 32),
                },
              });

              const infoWindow = new window.google.maps.InfoWindow({
                content: `
                  <div style="max-width: 300px; padding: 16px; font-family: ui-sans-serif, system-ui, sans-serif;">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;">
                      <h3 style="font-size: 18px; font-weight: 600; color: #1f2937; margin: 0; line-height: 1.4;">${office.name}</h3>
                      <button onclick="this.parentElement.parentElement.parentElement.remove()" style="background: none; border: none; font-size: 18px; color: #6b7280; cursor: pointer; padding: 0; margin-left: 8px;">×</button>
                    </div>
                    <div style="margin-bottom: 12px;">
                      <p style="font-size: 14px; color: #4b5563; margin: 0; line-height: 1.4;">${office.address}</p>
                      <p style="font-size: 14px; color: #4b5563; margin: 0; line-height: 1.4;">${office.city}, ${office.state} ${office.zip}</p>
                    </div>
                    ${office.phone ? `<div style="margin-bottom: 12px;"><a href="tel:${office.phone}" style="font-size: 14px; color: #2563eb; text-decoration: none;">${office.phone}</a></div>` : ''}
                    ${office.distance !== undefined ? `<div style="margin-bottom: 12px; font-size: 14px; color: #059669; font-weight: 500;">${office.distance} miles away</div>` : ''}
                    <div style="display: flex; gap: 8px;">
                      <a href="${office.officeUrl || '/office/' + office.id}" target="_blank" style="display: inline-flex; align-items: center; padding: 8px 16px; background-color: #2563eb; color: white; font-size: 14px; font-weight: 500; border-radius: 6px; text-decoration: none; transition: background-color 0.15s;" 
                         onmouseover="this.style.backgroundColor='#1d4ed8'" 
                         onmouseout="this.style.backgroundColor='#2563eb'">
                        View Details
                      </a>
                      <a href="https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fullAddress)}" target="_blank" style="display: inline-flex; align-items: center; padding: 8px 16px; background-color: #f3f4f6; color: #374151; font-size: 14px; font-weight: 500; border-radius: 6px; text-decoration: none; transition: background-color 0.15s;" 
                         onmouseover="this.style.backgroundColor='#e5e7eb'" 
                         onmouseout="this.style.backgroundColor='#f3f4f6'">
                        Get Directions
                      </a>
                    </div>
                  </div>
                `,
              });

              // Store infoWindow reference on marker
              marker.infoWindow = infoWindow;

              if (marker.addListener) {
                marker.addListener('click', () => {
                  // Close all other info windows
                  markersRef.current.forEach(m => {
                    if (m.infoWindow && m !== marker) {
                      m.infoWindow.close();
                    }
                  });
                  infoWindow.open(mapInstanceRef.current, marker);
                });
              }

              markersRef.current.push(marker);
              bounds.extend({ lat: coords.lat, lng: coords.lng });
              markersAdded++;
            } catch (markerError) {
              console.error('Error creating marker for office:', office.name, markerError);
            }
          }
        }

        if (markersAdded > 0 && mapInstanceRef.current.fitBounds) {
          mapInstanceRef.current.fitBounds(bounds);
          
          if (window.google.maps.event && window.google.maps.event.addListener) {
            const listener = window.google.maps.event.addListener(mapInstanceRef.current, 'bounds_changed', () => {
              if (mapInstanceRef.current && mapInstanceRef.current.getZoom && mapInstanceRef.current.getZoom() > 12) {
                mapInstanceRef.current.setZoom(12);
              }
              if (window.google.maps.event.removeListener) {
                window.google.maps.event.removeListener(listener);
              }
            });
          }
        }
      } catch (error) {
        console.error('Error updating map markers:', error);
      }
    }, [clearMapElements]);

    useEffect(() => {
      // Prevent loading if we're in a conflicting environment
      if (window.initAllMaps && typeof window.initAllMaps === 'function') {
        console.warn('Detected conflicting Google Maps initialization (initAllMaps). Avoiding script loading.');
        setMapError('Map integration conflict detected. Please ensure only one Google Maps instance is loaded.');
        return;
      }

      if (isGoogleMapsFullyLoaded()) {
        console.log('Google Maps already loaded, initializing map');
        initializeMap();
        return;
      }

      if (mapLoadedRef.current || scriptLoadedRef.current) return;

      const uniqueCallback = `officeLocatorCallback_${WIDGET_ID}`;
      
      if (hasExistingGoogleMaps()) {
        console.log('Google Maps script already exists, waiting for it to load');
        
        waitForGoogleMaps(() => {
          console.log('Google Maps loaded via existing script');
          initializeMap();
        });
        
        return;
      }

      scriptLoadedRef.current = true;
      
      window[uniqueCallback] = () => {
        console.log('Google Maps callback triggered for widget:', WIDGET_ID);
        window[`googleMapsLoaded_${WIDGET_ID}`] = true;
        waitForGoogleMaps(initializeMap);
      };

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBaTFTW_OSfqCt93_P7rcjlXhU1RInOkj0&libraries=geometry&loading=async&callback=${uniqueCallback}`;
      script.async = true;
      script.defer = true;
      script.id = `google-maps-${WIDGET_ID}`;
      script.onerror = () => {
        console.error('Failed to load Google Maps script');
        setMapError('Failed to load Google Maps. This might be due to an ad blocker or network issue.');
        scriptLoadedRef.current = false;
      };
      
      document.head.appendChild(script);

      return () => {
        const ourScript = document.getElementById(`google-maps-${WIDGET_ID}`);
        if (ourScript && ourScript.parentNode) {
          ourScript.parentNode.removeChild(ourScript);
        }
        if (window[uniqueCallback]) {
          delete window[uniqueCallback];
        }
      };
    }, [initializeMap, hasExistingGoogleMaps]);

    return {
      mapRef,
      mapInstanceRef,
      mapError,
      addOfficeMarkersToMap,
      addMarkersToMap,
      centerMapOnOffice
    };
  };

  // ... keep existing code (useOfficeSearch, SearchPanel, OfficeList, OfficeLocator, OfficeLocatorWidget, and initialization functions)

  const useOfficeSearch = (offices) => {
    const [filteredOffices, setFilteredOffices] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchCenter, setSearchCenter] = useState(null);
    const [currentRadius, setCurrentRadius] = useState(0);

    const handleSearch = async ({ location, radius }, onMapUpdate) => {
      setIsLoading(true);
      setCurrentRadius(radius);
      
      try {
        console.log('Searching for location:', location, 'with radius:', radius);
        
        const coordinates = await geocodeLocation(location);
        console.log('Geocoded coordinates:', coordinates);
        
        if (!coordinates) {
          toast.error('Location not found. Please check if Google Maps is available and try a different address or ZIP code.');
          setFilteredOffices([]);
          return;
        }

        setSearchCenter(coordinates);

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

        console.log('Found', nearbyOffices.length, 'offices within', radius, 'miles');
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
        toast.error('An error occurred while searching. Please ensure Google Maps is loaded and try again.');
        setFilteredOffices([]);
      } finally {
        setIsLoading(false);
      }
    };

    return {
      filteredOffices,
      isLoading,
      searchCenter,
      currentRadius,
      handleSearch
    };
  };

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
      { value: '100', label: '100 miles' }
    ];

    return e('div', { 
      className: 'absolute top-6 left-6 z-10 bg-white rounded-xl shadow-xl p-6 w-96 border border-gray-100'
    },
      e('div', { className: 'mb-4' },
        e('h2', { className: 'text-xl font-bold text-gray-800 mb-2' }, 'Find Nearby Offices'),
        e('p', { className: 'text-sm text-gray-600' }, 'Enter your location to find offices near you')
      ),
      e('form', { onSubmit: handleSubmit, className: 'space-y-4' },
        e('div', null,
          e('label', { className: 'block text-sm font-medium text-gray-700 mb-2' }, 'Location'),
          e('input', {
            type: 'text',
            placeholder: 'ZIP code, city, or address',
            value: location,
            onChange: (e) => setLocation(e.target.value),
            className: 'w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent',
            disabled: isLoading
          })
        ),
        e('div', null,
          e('label', { className: 'block text-sm font-medium text-gray-700 mb-2' }, 'Search Radius'),
          e('select', {
            value: radius,
            onChange: (e) => setRadius(e.target.value),
            className: 'w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent',
            disabled: isLoading
          },
            radiusOptions.map(option =>
              e('option', { key: option.value, value: option.value }, option.label)
            )
          )
        ),
        e('button', {
          type: 'submit',
          className: 'w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors',
          disabled: isLoading || !location.trim()
        },
          isLoading ? 'Searching...' : 'Find Offices'
        )
      )
    );
  };

  const OfficeList = ({ offices, onOfficeClick }) => {
    if (offices.length === 0) return null;

    return e('div', { 
      className: 'absolute top-6 right-6 z-10 bg-white rounded-xl shadow-xl p-6 w-96 border border-gray-100'
    },
      e('div', { className: 'mb-4' },
        e('h3', { className: 'text-xl font-bold text-gray-800' }, 'Nearby Locations'),
        e('p', { className: 'text-sm text-gray-600' }, `${offices.length} location${offices.length === 1 ? '' : 's'} found`)
      ),
      e('div', { className: 'space-y-3 max-h-96 overflow-y-auto' },
        offices.map(office =>
          e('div', {
            key: office.id,
            className: 'p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition cursor-pointer group',
            onClick: () => onOfficeClick(office)
          },
            e('div', { className: 'flex justify-between items-start mb-3' },
              e('h4', { className: 'font-semibold text-gray-800 text-base group-hover:text-blue-600 transition' }, office.name),
              office.distance !== undefined && e('span', { 
                className: 'text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full'
              }, `${office.distance}mi`)
            ),
            e('div', { className: 'text-sm text-gray-600 space-y-1 mb-3' },
              e('p', null, office.address),
              e('p', null, `${office.city}, ${office.state} ${office.zip}`),
              office.phone && e('p', { className: 'text-blue-600 font-medium' }, office.phone)
            ),
            e('div', { className: 'flex gap-2' },
              e('a', {
                href: office.officeUrl || `/office/${office.id}`,
                target: '_blank',
                className: 'text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition font-medium',
                rel: 'noopener noreferrer',
                onClick: (e) => e.stopPropagation()
              }, 'View Details'),
              e('a', {
                href: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${office.address}, ${office.city}, ${office.state} ${office.zip}`)}`,
                target: '_blank',
                className: 'text-sm bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition font-medium',
                rel: 'noopener noreferrer',
                onClick: (e) => e.stopPropagation()
              }, 'Directions')
            )
          )
        )
      )
    );
  };

  const OfficeLocator = () => {
    const [offices, setOffices] = useState([]);
    const { mapRef, mapInstanceRef, mapError, addOfficeMarkersToMap, addMarkersToMap, centerMapOnOffice } = useGoogleMaps();
    const { filteredOffices, isLoading, currentRadius, handleSearch } = useOfficeSearch(offices);

    useEffect(() => {
      const parsedOffices = parseOfficesFromHTML();
      setOffices(parsedOffices);
    }, []);

    useEffect(() => {
      if (mapInstanceRef.current && offices.length > 0) {
        addOfficeMarkersToMap(offices);
      }
    }, [mapInstanceRef.current, offices, addOfficeMarkersToMap]);

    const onSearch = (searchParams) => {
      handleSearch(searchParams, (nearbyOffices, center, radius) => {
        if (mapInstanceRef.current) {
          addMarkersToMap(nearbyOffices, center, radius);
        }
      });
    };

    const handleOfficeClick = (office) => {
      centerMapOnOffice(office);
    };

    return e('div', { className: 'relative w-full h-[600px] rounded-xl overflow-hidden shadow-lg' },
      e(SearchPanel, { onSearch: onSearch, isLoading }),
      e(OfficeList, { offices: filteredOffices, onOfficeClick: handleOfficeClick }),
      mapError ? 
        e('div', { className: 'w-full h-full flex items-center justify-center bg-gray-100' },
          e('div', { className: 'text-center p-8 max-w-md' },
            e('div', { className: 'text-red-500 text-4xl mb-4' }, '⚠️'),
            e('p', { className: 'text-red-600 font-semibold text-lg mb-2' }, 'Map Loading Error'),
            e('p', { className: 'text-gray-600 text-sm mb-4' }, mapError),
            e('p', { className: 'text-xs text-gray-500' }, 
              'Try disabling ad blockers or refreshing the page'
            )
          )
        ) :
        e('div', { 
          ref: mapRef, 
          id: 'map', 
          className: 'w-full h-full bg-gray-100'
        })
    );
  };

  const OfficeLocatorWidget = () => {
    console.log('OfficeLocatorWidget component rendering');
    
    return e('div', { className: 'w-full' },
      e(OfficeLocator)
    );
  };

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

  console.log('Checking for immediate initialization');
  const immediateContainer = document.getElementById('office-locator-widget');
  if (immediateContainer) {
    console.log('Immediate container found, initializing widget');
    window.initOfficeLocator('office-locator-widget');
  }

})();
})();
