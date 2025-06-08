const WEBFLOW_API_KEY = 'bc2c022b4536b1e1ce0a25301c7e8cd3a6d9f9ef24b6ed3bd760ecedcb23e69e';
const WEBFLOW_BASE_URL = 'https://api.webflow.com';
const WEBFLOW_JSON_URL = 'https://cpr-training-labs.webflow.io/json';

export interface WebflowOffice {
  id: string;
  name: string;
  slug: string;
  'archived': boolean;
  'draft': boolean;
  fieldData: {
    name: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    latitude?: number;
    longitude?: number;
    phone?: string;
    email?: string;
  };
}

export interface Office {
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

// You'll need to replace 'SITE_ID' and 'COLLECTION_ID' with your actual values
const SITE_ID = 'cpr-training-labs'; // Replace with your Webflow site ID
const COLLECTION_ID = '67f1127b5b0383b05636c457'; // Replace with your offices collection ID

export const fetchOfficesFromWebflow = async (): Promise<Office[]> => {
  try {
    console.log('Fetching offices from Webflow JSON endpoint...');
    
    const response = await fetch(WEBFLOW_JSON_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Webflow JSON endpoint error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log('Webflow JSON response:', data);

    // The data structure might be different from the API - let's handle various possible structures
    let items = [];
    
    if (Array.isArray(data)) {
      items = data;
    } else if (data.items && Array.isArray(data.items)) {
      items = data.items;
    } else if (data.offices && Array.isArray(data.offices)) {
      items = data.offices;
    } else {
      console.error('Unexpected data structure from Webflow JSON:', data);
      throw new Error('Unexpected data structure from Webflow JSON endpoint');
    }

    // Transform Webflow data to our Office interface
    const offices: Office[] = items
      .filter((item: any) => !item.archived && !item.draft)
      .map((item: any, index: number) => {
        // Handle different possible field structures
        const fieldData = item.fieldData || item;
        
        return {
          id: index + 1,
          name: fieldData.name || item.name || '',
          address: fieldData.address || item.address || '',
          city: fieldData.city || item.city || '',
          state: fieldData.state || item.state || '',
          zip: fieldData.zip || item.zip || '',
          lat: parseFloat(fieldData.latitude || item.latitude || '0'),
          lng: parseFloat(fieldData.longitude || item.longitude || '0'),
          phone: fieldData.phone || item.phone,
          email: fieldData.email || item.email,
        };
      })
      .filter((office: Office) => office.lat !== 0 && office.lng !== 0); // Only include offices with valid coordinates

    console.log('Transformed offices from JSON:', offices);
    return offices;
  } catch (error) {
    console.error('Error fetching offices from Webflow JSON:', error);
    throw error;
  }
};

// Keep the collections function for debugging if needed
export const getWebflowCollections = async (siteId: string) => {
  console.log('getWebflowCollections is no longer used with JSON endpoint approach');
  return null;
};
