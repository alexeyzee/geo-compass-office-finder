
import React, { useState, useEffect } from 'react';
import SearchPanel from './SearchPanel';
import OfficeList from './OfficeList';
import { officesData } from '@/data/offices';
import { Office } from '@/types/office';
import { useGoogleMaps } from '@/hooks/useGoogleMaps';
import { useOfficeSearch } from '@/hooks/useOfficeSearch';

const OfficeLocator = () => {
  const [offices] = useState<Office[]>(officesData);
  const { mapRef, mapInstanceRef, mapError, addOfficeMarkersToMap, addMarkersToMap } = useGoogleMaps();
  const { filteredOffices, isLoading, currentRadius, handleSearch } = useOfficeSearch(offices);

  // Add all office markers when map initializes
  useEffect(() => {
    if (mapInstanceRef.current) {
      addOfficeMarkersToMap(offices);
    }
  }, [mapInstanceRef.current, offices, addOfficeMarkersToMap]);

  // Handle search with map update
  const onSearch = (searchParams: { location: string; radius: number }) => {
    handleSearch(searchParams, (nearbyOffices, center, radius) => {
      if (mapInstanceRef.current) {
        addMarkersToMap(nearbyOffices, center, radius);
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Search Panel */}
        <div className="lg:col-span-1">
          <SearchPanel onSearch={onSearch} isLoading={isLoading} />
          <OfficeList offices={filteredOffices} />
        </div>

        {/* Map */}
        <div className="lg:col-span-2">
          <div className="bg-card rounded-lg shadow-lg overflow-hidden h-[600px]">
            {mapError ? (
              <div className="w-full h-full flex items-center justify-center bg-gray-100">
                <div className="text-center p-6">
                  <p className="text-red-600 font-medium mb-2">Map Loading Error</p>
                  <p className="text-sm text-gray-600 mb-4">{mapError}</p>
                  <p className="text-xs text-gray-500">
                    Try disabling ad blockers or refreshing the page
                  </p>
                </div>
              </div>
            ) : (
              <div 
                ref={mapRef} 
                id="map" 
                className="w-full h-full"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficeLocator;
