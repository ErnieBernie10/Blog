import React, { useEffect } from 'react';

import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    document.body.classList.add('dark:bg-gray-900');
    return () => document.body.classList.remove('dark:bg-gray-900');
  }, []);
  return (
    <ThemeProvider attribute="class">
      <div className="font-serif text-gray-900 dark:text-white h-[100vh]">
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
};

export default App;
