import React from 'react';

import '../styles/globals.css';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <main className="container mx-auto flex">
      <Component {...pageProps} />
    </main>
  );
};

export default App;
