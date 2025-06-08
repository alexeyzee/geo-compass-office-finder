
const WEBFLOW_API_KEY = 'bc2c022b4536b1e1ce0a25301c7e8cd3a6d9f9ef24b6ed3bd760ecedcb23e69e';
const WEBFLOW_BASE_URL = 'https://api.webflow.com';

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
    console.log('Fetching offices from Webflow API...');
    
    const response = await fetch(`${WEBFLOW_BASE_URL}/collections/${COLLECTION_ID}/items`, {
      headers: {
        'Authorization': `Bearer ${WEBFLOW_API_KEY}`,
        'accept-version': '1.0.0'
      }
    });

    if (!response.ok) {
      throw new Error(`Webflow API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log('Webflow API response:', data);

    // Transform Webflow data to our Office interface
    const offices: Office[] = data.items
      .filter((item: WebflowOffice) => !item.archived && !item.draft)
      .map((item: WebflowOffice, index: number) => ({
        id: index + 1,
        name: item.fieldData.name || item.name,
        address: item.fieldData.address || '',
        city: item.fieldData.city || '',
        state: item.fieldData.state || '',
        zip: item.fieldData.zip || '',
        lat: parseFloat(String(item.fieldData.latitude || '0')),
        lng: parseFloat(String(item.fieldData.longitude || '0')),
        phone: item.fieldData.phone,
        email: item.fieldData.email,
      }))
      .filter((office: Office) => office.lat !== 0 && office.lng !== 0); // Only include offices with valid coordinates

    console.log('Transformed offices from API:', offices);
    return offices;
  } catch (error) {
    console.error('Error fetching offices from Webflow API:', error);
    throw error;
  }
};

// Get site collections (for debugging)
export const getWebflowCollections = async (siteId: string) => {
  try {
    const response = await fetch(`${WEBFLOW_BASE_URL}/sites/${siteId}/collections`, {
      headers: {
        'Authorization': `Bearer ${WEBFLOW_API_KEY}`,
        'accept-version': '1.0.0'
      }
    });

    if (!response.ok) {
      throw new Error(`Webflow API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching Webflow collections:', error);
    throw error;
  }
};
