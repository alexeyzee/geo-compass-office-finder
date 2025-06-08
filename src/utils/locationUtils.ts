
// Haversine formula to calculate distance between two points on Earth
export const calculateDistance = (lat1: number, lng1: number, lat2: number, lng2: number): number => {
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

const toRadians = (degrees: number): number => {
  return degrees * (Math.PI / 180);
};

// Mock geocoding function - replace with actual Google Geocoding API in production
export const geocodeLocation = async (location: string): Promise<{ lat: number; lng: number } | null> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Mock geocoding data for demo purposes
  const mockLocations: Record<string, { lat: number; lng: number }> = {
    // ZIP codes
    '10001': { lat: 40.7589, lng: -73.9851 }, // NYC
    '90210': { lat: 34.0901, lng: -118.4065 }, // Beverly Hills
    '60601': { lat: 41.8781, lng: -87.6298 }, // Chicago
    '02108': { lat: 42.3601, lng: -71.0589 }, // Boston
    '33139': { lat: 25.7617, lng: -80.1918 }, // Miami Beach
    '94102': { lat: 37.7749, lng: -122.4194 }, // San Francisco
    '73301': { lat: 30.2672, lng: -97.7431 }, // Austin
    '98101': { lat: 47.6062, lng: -122.3321 }, // Seattle
    '80202': { lat: 39.7392, lng: -104.9903 }, // Denver
    '30309': { lat: 33.7490, lng: -84.3880 }, // Atlanta
    
    // Cities
    'new york': { lat: 40.7128, lng: -74.0060 },
    'los angeles': { lat: 34.0522, lng: -118.2437 },
    'chicago': { lat: 41.8781, lng: -87.6298 },
    'houston': { lat: 29.7604, lng: -95.3698 },
    'phoenix': { lat: 33.4484, lng: -112.0740 },
    'philadelphia': { lat: 39.9526, lng: -75.1652 },
    'san antonio': { lat: 29.4241, lng: -98.4936 },
    'san diego': { lat: 32.7157, lng: -117.1611 },
    'dallas': { lat: 32.7767, lng: -96.7970 },
    'san jose': { lat: 37.3382, lng: -121.8863 },
    'austin': { lat: 30.2672, lng: -97.7431 },
    'jacksonville': { lat: 30.3322, lng: -81.6557 },
    'fort worth': { lat: 32.7555, lng: -97.3308 },
    'columbus': { lat: 39.9612, lng: -82.9988 },
    'charlotte': { lat: 35.2271, lng: -80.8431 },
    'san francisco': { lat: 37.7749, lng: -122.4194 },
    'indianapolis': { lat: 39.7684, lng: -86.1581 },
    'seattle': { lat: 47.6062, lng: -122.3321 },
    'denver': { lat: 39.7392, lng: -104.9903 },
    'washington': { lat: 38.9072, lng: -77.0369 },
    'boston': { lat: 42.3601, lng: -71.0589 },
    'el paso': { lat: 31.7619, lng: -106.4850 },
    'detroit': { lat: 42.3314, lng: -83.0458 },
    'nashville': { lat: 36.1627, lng: -86.7816 },
    'memphis': { lat: 35.1495, lng: -90.0490 },
    'portland': { lat: 45.5152, lng: -122.6784 },
    'oklahoma city': { lat: 35.4676, lng: -97.5164 },
    'las vegas': { lat: 36.1699, lng: -115.1398 },
    'baltimore': { lat: 39.2904, lng: -76.6122 },
    'milwaukee': { lat: 43.0389, lng: -87.9065 },
    'albuquerque': { lat: 35.0844, lng: -106.6504 },
    'tucson': { lat: 32.2226, lng: -110.9747 },
    'fresno': { lat: 36.7378, lng: -119.7871 },
    'sacramento': { lat: 38.5816, lng: -121.4944 },
    'kansas city': { lat: 39.0997, lng: -94.5786 },
    'mesa': { lat: 33.4152, lng: -111.8315 },
    'atlanta': { lat: 33.7490, lng: -84.3880 },
    'colorado springs': { lat: 38.8339, lng: -104.8214 },
    'omaha': { lat: 41.2565, lng: -95.9345 },
    'raleigh': { lat: 35.7796, lng: -78.6382 },
    'miami': { lat: 25.7617, lng: -80.1918 },
    'long beach': { lat: 33.7701, lng: -118.1937 },
    'virginia beach': { lat: 36.8529, lng: -75.9780 },
    'oakland': { lat: 37.8044, lng: -122.2711 },
    'minneapolis': { lat: 44.9778, lng: -93.2650 },
    'tulsa': { lat: 36.1540, lng: -95.9928 },
    'tampa': { lat: 27.9506, lng: -82.4572 },
    'arlington': { lat: 32.7357, lng: -97.1081 },
    'new orleans': { lat: 29.9511, lng: -90.0715 }
  };

  const normalizedLocation = location.toLowerCase().trim();
  const coords = mockLocations[normalizedLocation];
  
  console.log('Mock geocoding for:', location, '->', coords);
  
  return coords || null;
};

// Production version would use Google Geocoding API:
/*
export const geocodeLocation = async (location: string): Promise<{ lat: number; lng: number } | null> => {
  try {
    const geocoder = new google.maps.Geocoder();
    const result = await new Promise<google.maps.GeocoderResult[]>((resolve, reject) => {
      geocoder.geocode({ address: location }, (results, status) => {
        if (status === 'OK' && results) {
          resolve(results);
        } else {
          reject(new Error(`Geocoding failed: ${status}`));
        }
      });
    });

    if (result.length > 0) {
      const { lat, lng } = result[0].geometry.location;
      return { lat: lat(), lng: lng() };
    }
    
    return null;
  } catch (error) {
    console.error('Geocoding error:', error);
    return null;
  }
};
*/
