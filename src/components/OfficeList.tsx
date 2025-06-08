
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Building, ExternalLink } from 'lucide-react';

interface Office {
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

interface OfficeListProps {
  offices: Office[];
}

const OfficeList = ({ offices }: OfficeListProps) => {
  // Don't render anything if there are no offices
  if (offices.length === 0) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Building className="h-5 w-5 text-primary" />
          Search Results
        </CardTitle>
        <CardDescription>
          <Badge variant="secondary" className="mr-2">
            {offices.length} office{offices.length === 1 ? '' : 's'} found
          </Badge>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div id="resultsList" className="space-y-4 max-h-96 overflow-y-auto">
          {offices.map((office) => (
            <div
              key={office.id}
              className="p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg">{office.name}</h3>
                <Button asChild size="sm" variant="outline">
                  <Link to={`/office/${office.id}`}>
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Details
                  </Link>
                </Button>
              </div>
              
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <p>{office.address}</p>
                    <p>{office.city}, {office.state} {office.zip}</p>
                  </div>
                </div>
                
                {office.phone && (
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 flex-shrink-0" />
                    <a 
                      href={`tel:${office.phone}`}
                      className="text-primary hover:underline"
                    >
                      {office.phone}
                    </a>
                  </div>
                )}
                
                {office.email && (
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 flex-shrink-0" />
                    <a 
                      href={`mailto:${office.email}`}
                      className="text-primary hover:underline"
                    >
                      {office.email}
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default OfficeList;
