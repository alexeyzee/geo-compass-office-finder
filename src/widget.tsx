
import React from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import OfficeLocator from './components/OfficeLocator';
import './index.css';

const queryClient = new QueryClient();

const OfficeLocatorWidget = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Office Locator
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find our office locations near you. Enter your ZIP code or city name and search radius to discover nearby offices.
            </p>
          </div>
          <OfficeLocator />
        </div>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

// Widget initialization function
(window as any).initOfficeLocator = function(containerId: string) {
  const container = document.getElementById(containerId);
  if (container) {
    const root = createRoot(container);
    root.render(<OfficeLocatorWidget />);
  } else {
    console.error(`Container with id "${containerId}" not found`);
  }
};

// Auto-initialize if a default container exists
document.addEventListener('DOMContentLoaded', () => {
  const defaultContainer = document.getElementById('office-locator-widget');
  if (defaultContainer) {
    (window as any).initOfficeLocator('office-locator-widget');
  }
});
