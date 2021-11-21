import React from 'react';

import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { Navbar } from '../components/Navbar';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="font-serif">
      <Navbar />
      <main className="container mx-auto ">
        <Component {...pageProps} />
      </main>
    </div>
  );
};

export default App;
