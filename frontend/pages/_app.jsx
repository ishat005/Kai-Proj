import { ThemeProvider } from '@emotion/react';

import { useRouter } from 'next/router';
import { GoogleAnalytics } from 'nextjs-google-analytics';

import firebaseConfig from '@/firebase/config';

import GlobalProvider from '@/providers/GlobalProvider';
import theme from '@/theme/theme';

import '@/styles/globals.css';
import NetworkErrorProvider from '@/providers/NetworkErrorProvider';

import { useEffect, useState } from 'react';

const App = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page);
  const { query } = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalProvider>
        {isClient && (
          <NetworkErrorProvider>
            <GoogleAnalytics
              trackPageViews
              gaMeasurementId={firebaseConfig.measurementId}
            />
            {getLayout(<Component {...pageProps} />, query)}
          </NetworkErrorProvider>
        )}
      </GlobalProvider>
    </ThemeProvider>
  );
};

export default App;
