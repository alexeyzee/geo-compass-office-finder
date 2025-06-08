
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, MapPin, Phone, Mail } from 'lucide-react';
import { officesData } from '@/data/offices';

const OfficeDetails = () => {
  const { id } = useParams<{ id: string }>();
  const office = officesData.find(o => o.id === parseInt(id || '0'));

  if (!office) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Office Not Found</h1>
            <Link to="/">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Office Locator
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Office Locator
            </Button>
          </Link>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl">{office.name}</CardTitle>
            <CardDescription>Office Details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
              <div>
                <p className="font-medium">Address</p>
                <p className="text-muted-foreground">{office.address}</p>
                <p className="text-muted-foreground">{office.city}, {office.state} {office.zip}</p>
              </div>
            </div>

            {office.phone && (
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <p className="font-medium">Phone</p>
                  <a 
                    href={`tel:${office.phone}`}
                    className="text-primary hover:underline"
                  >
                    {office.phone}
                  </a>
                </div>
              </div>
            )}

            {office.email && (
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <p className="font-medium">Email</p>
                  <a 
                    href={`mailto:${office.email}`}
                    className="text-primary hover:underline"
                  >
                    {office.email}
                  </a>
                </div>
              </div>
            )}

            <div className="pt-4">
              <Button asChild className="w-full">
                <a 
                  href={`https://maps.google.com/?q=${encodeURIComponent(`${office.address}, ${office.city}, ${office.state} ${office.zip}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Get Directions
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OfficeDetails;
