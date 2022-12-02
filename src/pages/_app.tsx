import React, { useEffect, useMemo } from 'react';

import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';

import English from '../../content/compiled-locales/en.json';
import Dutch from '../../content/compiled-locales/nl.json';

const App = ({ Component, pageProps }: AppProps) => {
  const { locale } = useRouter();
  const [shortLocale] = locale ? locale.split('-') : ['en'];

  const messages = useMemo(() => {
    switch (shortLocale) {
      case 'nl':
        return Dutch;
      case 'en':
        return English;
      default:
        return English;
    }
  }, [shortLocale]);

  useEffect(() => {
    document.body.classList.add('dark:bg-gray-900');
    return () => document.body.classList.remove('dark:bg-gray-900');
  }, []);

  return (
    <ThemeProvider attribute="class">
      <IntlProvider locale={shortLocale ?? 'en'} messages={messages}>
        <div className="font-serif text-gray-900 dark:text-white h-[100vh]">
          <Component {...pageProps} />
        </div>
      </IntlProvider>
    </ThemeProvider>
  );
};

export default App;
