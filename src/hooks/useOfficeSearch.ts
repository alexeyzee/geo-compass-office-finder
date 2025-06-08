
import { useState } from 'react';
import { toast } from 'sonner';
import { Office, SearchParams } from '@/types/office';
import { calculateDistance, geocodeLocation } from '@/utils/locationUtils';

export const useOfficeSearch = (offices: Office[]) => {
  const [filteredOffices, setFilteredOffices] = useState<Office[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchCenter, setSearchCenter] = useState<{ lat: number; lng: number } | null>(null);
  const [currentRadius, setCurrentRadius] = useState<number>(0);

  const handleSearch = async ({ location, radius }: SearchParams, onMapUpdate?: (offices: Office[], center: { lat: number; lng: number }, radius: number) => void) => {
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

      // Update map if callback provided
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
