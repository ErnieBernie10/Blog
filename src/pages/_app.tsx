import React from 'react';

import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute="class">
      <div className="font-serif text-gray-900 dark:text-white dark:bg-gray-900">
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
};

export default App;
