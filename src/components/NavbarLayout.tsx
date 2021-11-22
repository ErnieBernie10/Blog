import React from 'react';

import { Navbar } from './Navbar';

export const NavbarLayout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto pt-20">{children}</main>
    </>
  );
};
