
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Search, Loader2 } from 'lucide-react';

interface SearchPanelProps {
  onSearch: (params: { location: string; radius: number }) => void;
  isLoading: boolean;
}

const SearchPanel = ({ onSearch, isLoading }: SearchPanelProps) => {
  const [location, setLocation] = useState('');
  const [radius, setRadius] = useState('25');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!location.trim()) {
      return;
    }
    onSearch({ location: location.trim(), radius: parseInt(radius) });
  };

  const radiusOptions = [
    { value: '5', label: '5 miles' },
    { value: '10', label: '10 miles' },
    { value: '25', label: '25 miles' },
    { value: '50', label: '50 miles' },
    { value: '100', label: '100 miles' },
  ];

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="h-5 w-5 text-primary" />
          Find Offices Near You
        </CardTitle>
        <CardDescription>
          Enter your ZIP code or city name to find nearby office locations.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="locationInput">Location</Label>
            <Input
              id="locationInput"
              type="text"
              placeholder="Enter ZIP code or city name"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full"
              disabled={isLoading}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="radiusInput">Search Radius</Label>
            <Select value={radius} onValueChange={setRadius} disabled={isLoading}>
              <SelectTrigger id="radiusInput">
                <SelectValue placeholder="Select radius" />
              </SelectTrigger>
              <SelectContent>
                {radiusOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button 
            id="searchButton"
            type="submit" 
            className="w-full" 
            disabled={isLoading || !location.trim()}
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Searching...
              </>
            ) : (
              <>
                <Search className="h-4 w-4 mr-2" />
                Search Offices
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default SearchPanel;
