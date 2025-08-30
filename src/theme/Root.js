import React from 'react';
import { useAptabase } from '../hooks/useAptabase';
import { trackEvent } from '@aptabase/web';
import { useLocation, useHistory } from '@docusaurus/router';

export default function Root({ children }) {
  useAptabase(); // Initialize Aptabase
  const location = useLocation();
  const history = useHistory();
  
React.useEffect(() => {
        trackEvent('screen_view', {
            screen: location.pathname,
        });
    
    return () => {
      unlisten();
    };
  }, [location]);

  return <>{children}</>;
}