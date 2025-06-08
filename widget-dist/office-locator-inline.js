(function(){
var css = ":root { --background: 0 0% 100%; --foreground: 222.2 84% 4.9%; --card: 0 0% 100%; --card-foreground: 222.2 84% 4.9%; --popover: 0 0% 100%; --popover-foreground: 222.2 84% 4.9%; --primary: 221.2 83.2% 53.3%; --primary-foreground: 210 40% 98%; --secondary: 210 40% 96%; --secondary-foreground: 222.2 84% 4.9%; --muted: 210 40% 96%; --muted-foreground: 215.4 16.3% 46.9%; --accent: 210 40% 96%; --accent-foreground: 222.2 84% 4.9%; --destructive: 0 62.8% 30.6%; --destructive-foreground: 210 40% 98%; --border: 214.3 31.8% 91.4%; --input: 214.3 31.8% 91.4%; --ring: 221.2 83.2% 53.3%; --chart-1: 12 76% 61%; --chart-2: 173 58% 39%; --chart-3: 197 37% 24%; --chart-4: 43 74% 66%; --chart-5: 27 87% 67%; --radius: 0.5rem; } *, ::before, ::after { box-sizing: border-box; border-width: 0; border-style: solid; border-color: #e5e7eb; } ::before, ::after { --tw-content: ''; } html, :host { line-height: 1.5; -webkit-text-size-adjust: 100%; -moz-tab-size: 4; tab-size: 4; font-family: ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; font-feature-settings: normal; font-variation-settings: normal; -webkit-tap-highlight-color: transparent; } body { margin: 0; line-height: inherit; } .min-h-screen { min-height: 100vh; } .bg-gradient-to-br { background-image: linear-gradient(to bottom right, var(--tw-gradient-stops)); } .from-blue-50 { --tw-gradient-from: #eff6ff var(--tw-gradient-from-position); --tw-gradient-to: rgb(239 246 255 / 0) var(--tw-gradient-to-position); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to); } .to-indigo-100 { --tw-gradient-to: #e0e7ff var(--tw-gradient-to-position); } .container { width: 100%; margin-left: auto; margin-right: auto; padding-left: 1rem; padding-right: 1rem; } @media (min-width: 640px) { .container { max-width: 640px; } } @media (min-width: 768px) { .container { max-width: 768px; } } @media (min-width: 1024px) { .container { max-width: 1024px; } } @media (min-width: 1280px) { .container { max-width: 1280px; } } @media (min-width: 1536px) { .container { max-width: 1536px; } } .mx-auto { margin-left: auto; margin-right: auto; } .px-4 { padding-left: 1rem; padding-right: 1rem; } .py-8 { padding-top: 2rem; padding-bottom: 2rem; } .text-center { text-align: center; } .mb-8 { margin-bottom: 2rem; } .text-4xl { font-size: 2.25rem; line-height: 2.5rem; } @media (min-width: 768px) { .md\\:text-5xl { font-size: 3rem; line-height: 1; } } .font-bold { font-weight: 700; } .text-foreground { color: hsl(var(--foreground)); } .mb-4 { margin-bottom: 1rem; } .text-lg { font-size: 1.125rem; line-height: 1.75rem; } .text-muted-foreground { color: hsl(var(--muted-foreground)); } .max-w-2xl { max-width: 42rem; } .max-w-7xl { max-width: 80rem; } .grid { display: grid; } .grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); } @media (min-width: 1024px) { .lg\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); } } @media (min-width: 1024px) { .lg\\:col-span-1 { grid-column: span 1 / span 1; } } @media (min-width: 1024px) { .lg\\:col-span-2 { grid-column: span 2 / span 2; } } .gap-6 { gap: 1.5rem; } .bg-card { background-color: hsl(var(--card)); } .rounded-lg { border-radius: 0.5rem; } .shadow-lg { box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1); } .overflow-hidden { overflow: hidden; } .h-\\[600px\\] { height: 600px; } .w-full { width: 100%; } .h-full { height: 100%; } .flex { display: flex; } .items-center { align-items: center; } .justify-center { justify-content: center; } .bg-gray-100 { background-color: #f3f4f6; } .p-6 { padding: 1.5rem; } .text-red-600 { color: #dc2626; } .font-medium { font-weight: 500; } .mb-2 { margin-bottom: 0.5rem; } .text-sm { font-size: 0.875rem; line-height: 1.25rem; } .text-gray-600 { color: #4b5563; } .text-xs { font-size: 0.75rem; line-height: 1rem; } .text-gray-500 { color: #6b7280; } .inline-flex { display: inline-flex; } .items-center { align-items: center; } .justify-center { justify-content: center; } .gap-2 { gap: 0.5rem; } .whitespace-nowrap { white-space: nowrap; } .rounded-md { border-radius: 0.375rem; } .font-medium { font-weight: 500; } .ring-offset-background { --tw-ring-offset-color: hsl(var(--background)); } .transition-colors { transition-property: color, background-color, border-color, text-decoration-color, fill, stroke; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; } .focus-visible\\:outline-none:focus-visible { outline: 2px solid transparent; outline-offset: 2px; } .focus-visible\\:ring-2:focus-visible { --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color); --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color); box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000); } .disabled\\:pointer-events-none:disabled { pointer-events: none; } .disabled\\:opacity-50:disabled { opacity: 0.5; } .bg-primary { background-color: hsl(var(--primary)); } .text-primary-foreground { color: hsl(var(--primary-foreground)); } .hover\\:bg-primary\\/90:hover { background-color: hsl(var(--primary) / 0.9); } .h-10 { height: 2.5rem; } .px-4 { padding-left: 1rem; padding-right: 1rem; } .py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; } .border { border-width: 1px; } .border-border { border-color: hsl(var(--border)); } .bg-card { background-color: hsl(var(--card)); } .text-card-foreground { color: hsl(var(--card-foreground)); } .shadow-sm { box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05); } .border-input { border-color: hsl(var(--input)); } .bg-background { background-color: hsl(var(--background)); } .px-3 { padding-left: 0.75rem; padding-right: 0.75rem; } .text-base { font-size: 1rem; line-height: 1.5rem; } .placeholder\\:text-muted-foreground::placeholder { color: hsl(var(--muted-foreground)); } .focus-visible\\:ring-ring:focus-visible { --tw-ring-color: hsl(var(--ring)); } .select-none { user-select: none; } .text-sm { font-size: 0.875rem; line-height: 1.25rem; } .font-medium { font-weight: 500; } .leading-none { line-height: 1; } .space-y-2 > :not([hidden]) ~ :not([hidden]) { margin-top: 0.5rem; } .space-y-4 > :not([hidden]) ~ :not([hidden]) { margin-top: 1rem; } .mr-2 { margin-right: 0.5rem; } .mt-1 { margin-top: 0.25rem; } .mt-3 { margin-top: 0.75rem; } .p-2 { padding: 0.5rem; } .p-4 { padding: 1rem; } .px-3 { padding-left: 0.75rem; padding-right: 0.75rem; } .py-1\\.5 { padding-top: 0.375rem; padding-bottom: 0.375rem; } .text-blue-600 { color: #2563eb; } .bg-blue-600 { background-color: #2563eb; } .hover\\:bg-blue-700:hover { background-color: #1d4ed8; } .text-white { color: #ffffff; } .max-h-96 { max-height: 24rem; } .overflow-y-auto { overflow-y: auto; } .border-border { border-color: hsl(var(--border)); } .hover\\:bg-accent\\/50:hover { background-color: hsl(var(--accent) / 0.5); } .flex-shrink-0 { flex-shrink: 0; } .text-primary { color: hsl(var(--primary)); } .hover\\:underline:hover { text-decoration-line: underline; } .animate-spin { animation: spin 1s linear infinite; } @keyframes spin { to { transform: rotate(360deg); } } .h-4 { height: 1rem; } .w-4 { width: 1rem; } .h-5 { height: 1.25rem; } .w-5 { width: 1.25rem; } .w-3 { width: 0.75rem; } .h-3 { height: 0.75rem; } .mr-1 { margin-right: 0.25rem; } .mt-0\\.5 { margin-top: 0.125rem; } .bg-secondary { background-color: hsl(var(--secondary)); } .text-secondary-foreground { color: hsl(var(--secondary-foreground)); } .px-2\\.5 { padding-left: 0.625rem; padding-right: 0.625rem; } .py-0\\.5 { padding-top: 0.125rem; padding-bottom: 0.125rem; } .border-input { border-color: hsl(var(--input)); } .hover\\:bg-accent:hover { background-color: hsl(var(--accent)); } .hover\\:text-accent-foreground:hover { color: hsl(var(--accent-foreground)); } .h-9 { height: 2.25rem; } .justify-between { justify-content: space-between; } .items-start { align-items: flex-start; }";
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
        
        // Fix unquoted string values in the JSON
        // This regex finds patterns like "id": value, and wraps the value in quotes if it's not already quoted
        jsonText = jsonText.replace(/"id":\s*([^",\s]+)/g, '"id": "$1"');
        
        console.log('Cleaned JSON text:', jsonText);
        
        const officeData = JSON.parse(jsonText);
        
        // Convert the data to match our expected format
        offices.push({
          id: index + 1, // Use numeric ID for internal use
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

  // Enhanced geocoding function with better error handling
  const geocodeLocation = async (location) => {
    try {
      // Check if Google Maps is available and properly loaded
      if (window.google && window.google.maps && window.google.maps.Geocoder) {
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
          // Use proper methods to get lat/lng
          const lat = typeof location.lat === 'function' ? location.lat() : location.lat;
          const lng = typeof location.lng === 'function' ? location.lng() : location.lng;
          return { lat, lng, address: result[0].formatted_address };
        }
        
        return null;
      }
    } catch (error) {
      console.error('Geocoding error, falling back to mock data:', error);
    }

    console.log('Using mock geocoding for:', location);
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const mockLocations = {
      '77014': { lat: 29.9803, lng: -95.4431, address: 'North Houston, TX 77014' },
      '77058': { lat: 29.5527, lng: -95.0927, address: 'Houston Clear Lake, TX 77058' },
      '76116': { lat: 32.6722, lng: -97.4078, address: 'Fort Worth, TX 76116' },
      '76109': { lat: 32.6732, lng: -97.4606, address: 'Benbrook, TX 76109' },
      '75232': { lat: 32.6668, lng: -96.8364, address: 'Dallas Oak Cliff, TX 75232' },
      '75007': { lat: 32.9537, lng: -96.8903, address: 'Carrollton, TX 75007' },
      'houston': { lat: 29.7604, lng: -95.3698, address: 'Houston, TX' },
      'dallas': { lat: 32.7767, lng: -96.7970, address: 'Dallas, TX' },
      'fort worth': { lat: 32.7555, lng: -97.3308, address: 'Fort Worth, TX' },
      'austin': { lat: 30.2672, lng: -97.7431, address: 'Austin, TX' },
      'san antonio': { lat: 29.4241, lng: -98.4936, address: 'San Antonio, TX' },
      'carrollton': { lat: 32.9537, lng: -96.8903, address: 'Carrollton, TX' },
      'benbrook': { lat: 32.6732, lng: -97.4606, address: 'Benbrook, TX' }
    };

    const normalizedLocation = location.toLowerCase().trim();
    const coords = mockLocations[normalizedLocation];
    
    console.log('Mock geocoding for:', location, '->', coords);
    
    return coords || null;
  };

  // Toast function (simplified)
  const toast = {
    success: (message) => console.log('Success:', message),
    error: (message) => console.error('Error:', message),
    info: (message) => console.info('Info:', message)
  };

  // Enhanced Google Maps availability check
  const isGoogleMapsFullyLoaded = () => {
    try {
      return !!(window.google && 
               window.google.maps && 
               window.google.maps.Map &&
               window.google.maps.Marker &&
               window.google.maps.Circle &&
               window.google.maps.Geocoder &&
               window.google.maps.InfoWindow &&
               window.google.maps.LatLngBounds &&
               window.google.maps.event &&
               window.google.maps.event.addListener);
    } catch (error) {
      console.error('Error checking Google Maps availability:', error);
      return false;
    }
  };

  // Wait for Google Maps to be fully loaded
  const waitForGoogleMaps = (callback, maxAttempts = 50, attempt = 0) => {
    if (isGoogleMapsFullyLoaded()) {
      console.log('Google Maps is fully loaded');
      callback();
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

  // useGoogleMaps hook with improved loading and error handling
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
        console.log('Initializing Google Maps...');
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
        
        console.log('Google Maps initialized successfully');
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
                  <div style="padding: 8px;">
                    <h3 style="font-weight: 600; font-size: 1.125rem; margin-bottom: 4px;">${office.name}</h3>
                    <p style="font-size: 0.875rem; color: #4b5563; margin-bottom: 2px;">${office.address}</p>
                    <p style="font-size: 0.875rem; color: #4b5563; margin-bottom: 4px;">${office.city}, ${office.state} ${office.zip}</p>
                    ${office.phone ? `<p style="font-size: 0.875rem; color: #2563eb; margin-bottom: 12px;">${office.phone}</p>` : ''}
                    <div>
                      <a href="${office.officeUrl || '/office/' + office.id}" style="display: inline-flex; align-items: center; padding: 6px 12px; background-color: #2563eb; color: white; font-size: 0.875rem; border-radius: 4px; text-decoration: none; transition: background-color 0.15s;" 
                         onmouseover="this.style.backgroundColor='#1d4ed8'" 
                         onmouseout="this.style.backgroundColor='#2563eb'">
                        Details
                      </a>
                    </div>
                  </div>
                `,
              });

              if (marker.addListener) {
                marker.addListener('click', () => {
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
                  <div style="padding: 8px;">
                    <h3 style="font-weight: 600; font-size: 1.125rem; margin-bottom: 4px;">${office.name}</h3>
                    <p style="font-size: 0.875rem; color: #4b5563; margin-bottom: 2px;">${office.address}</p>
                    <p style="font-size: 0.875rem; color: #4b5563; margin-bottom: 4px;">${office.city}, ${office.state} ${office.zip}</p>
                    ${office.phone ? `<p style="font-size: 0.875rem; color: #2563eb; margin-bottom: 12px;">${office.phone}</p>` : ''}
                    <div>
                      <a href="${office.officeUrl || '/office/' + office.id}" style="display: inline-flex; align-items: center; padding: 6px 12px; background-color: #2563eb; color: white; font-size: 0.875rem; border-radius: 4px; text-decoration: none; transition: background-color 0.15s;" 
                         onmouseover="this.style.backgroundColor='#1d4ed8'" 
                         onmouseout="this.style.backgroundColor='#2563eb'">
                        Details
                      </a>
                    </div>
                  </div>
                `,
              });

              if (marker.addListener) {
                marker.addListener('click', () => {
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
      // Check if Google Maps is already fully loaded
      if (isGoogleMapsFullyLoaded()) {
        console.log('Google Maps already loaded, initializing map');
        initializeMap();
        return;
      }

      if (mapLoadedRef.current || scriptLoadedRef.current) return;

      const uniqueCallback = `googleMapsCallback_${WIDGET_ID}`;
      
      if (hasExistingGoogleMaps()) {
        console.log('Google Maps script already exists, waiting for it to load');
        
        waitForGoogleMaps(() => {
          console.log('Google Maps loaded via existing script');
          initializeMap();
        });
        
        return;
      }

      // Only load if there's no existing Google Maps
      scriptLoadedRef.current = true;
      
      window[uniqueCallback] = () => {
        console.log('Google Maps callback triggered for widget:', WIDGET_ID);
        window[`googleMapsLoaded_${WIDGET_ID}`] = true;
        // Use waitForGoogleMaps even in callback to ensure everything is ready
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
      addMarkersToMap
    };
  };

  // useOfficeSearch hook with improved distance calculation
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
          toast.error('Location not found. Please try a different address or ZIP code.');
          setFilteredOffices([]);
          return;
        }

        setSearchCenter(coordinates);

        // Filter offices within radius using proper distance calculation
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
                distance: Math.round(distance * 10) / 10 // Round to 1 decimal place
              });
            }
          }
        }

        // Sort by distance
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
        toast.error('An error occurred while searching. Please try again.');
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
      { value: '100', label: '100 miles' }
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
                onClick: () => window.open(office.officeUrl || `/office/${office.id}`, '_blank')
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
              ),
              office.distance !== undefined && e('div', { className: 'flex items-center gap-2' },
                e('span', {}, '📏'),
                e('span', { className: 'text-primary font-medium' }, `${office.distance} miles away`)
              )
            )
          )
        )
      )
    );
  };

  // Main OfficeLocator Component
  const OfficeLocator = () => {
    const [offices, setOffices] = useState([]);
    const { mapRef, mapInstanceRef, mapError, addOfficeMarkersToMap, addMarkersToMap } = useGoogleMaps();
    const { filteredOffices, isLoading, currentRadius, handleSearch } = useOfficeSearch(offices);

    // Parse offices from HTML on component mount
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

    return e('div', { className: 'max-w-7xl mx-auto' },
      e('div', { className: 'grid grid-cols-1 lg:grid-cols-3 gap-6' },
        e('div', { className: 'lg:col-span-1' },
          e(SearchPanel, { onSearch: onSearch, isLoading }),
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
})();
