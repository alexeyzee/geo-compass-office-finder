
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

export interface SearchParams {
  location: string;
  radius: number;
}

// Extend Window interface to include google
declare global {
  interface Window {
    google: typeof google;
    googleMapsCallback: () => void;
    googleMapsLoaded: boolean;
    [key: string]: any; // Allow dynamic properties
  }
}
