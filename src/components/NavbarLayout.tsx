import React, { PropsWithChildren } from 'react';

import clsx from 'clsx';

import styles from '../styles/NavbarLayout.module.css';
import { Navbar } from './Navbar';

interface NavbarLayoutProps {
  fullWidth?: boolean;
  className?: string;
}
export const NavbarLayout: React.FC<PropsWithChildren<NavbarLayoutProps>> = ({
  children,
  fullWidth = false,
  className,
}) => {
  return (
    <>
      <Navbar />
      <main
        className={clsx(
          fullWidth ? 'w-full' : 'container',
          'mx-auto pt-20',
          className,
          styles.navbarLayoutAnimation
        )}
      >
        {children}
      </main>
    </>
  );
};
