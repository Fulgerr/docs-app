import { useEffect } from 'react';
import { init } from '@aptabase/web';

export const useAptabase = () => {
  useEffect(() => {
    // Only initialize on the client side
    if (typeof window !== 'undefined') {
      init('A-EU-5971610612', {
        // Optional configuration
        host: 'https://eu.aptabase.com', // or your region-specific endpoint
        isDebug: process.env.NODE_ENV !== 'production', // Enable debug logs in development
      });
    }
  }, []);
};