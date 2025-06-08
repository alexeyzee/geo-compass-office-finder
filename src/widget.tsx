
import React from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import OfficeLocator from './components/OfficeLocator';
import './index.css';

console.log('Widget script loaded');

const queryClient = new QueryClient();

const OfficeLocatorWidget = () => {
  console.log('OfficeLocatorWidget component rendering');
  
  return (
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
};

// Widget initialization function
(window as any).initOfficeLocator = function(containerId: string) {
  console.log('initOfficeLocator called with containerId:', containerId);
  
  const container = document.getElementById(containerId);
  if (container) {
    console.log('Container found, creating React root');
    try {
      const root = createRoot(container);
      root.render(<OfficeLocatorWidget />);
      console.log('Widget rendered successfully');
    } catch (error) {
      console.error('Error rendering widget:', error);
    }
  } else {
    console.error(`Container with id "${containerId}" not found`);
  }
};

// Auto-initialize if a default container exists
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded, checking for default container');
  const defaultContainer = document.getElementById('office-locator-widget');
  if (defaultContainer) {
    console.log('Default container found, initializing widget');
    (window as any).initOfficeLocator('office-locator-widget');
  } else {
    console.log('No default container found');
  }
});

// Also try immediate initialization in case DOM is already loaded
console.log('Checking for immediate initialization');
const immediateContainer = document.getElementById('office-locator-widget');
if (immediateContainer) {
  console.log('Immediate container found, initializing widget');
  (window as any).initOfficeLocator('office-locator-widget');
}
