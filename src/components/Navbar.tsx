import React, { useState } from 'react';

import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from '../styles/Nav.module.css';
import { ThemeToggle } from './ThemeToggle';

export const Navbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const router = useRouter();
  const shouldPlayAnimation = router.query.m;

  const handleHamburgerClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div
      className={clsx(
        'mx-auto w-full fixed z-10',
        shouldPlayAnimation ? styles.navAnimation : ''
      )}
    >
      <nav className="flex items-center justify-between flex-wrap bg-teal p-2 pl-4 m-2 shadow-md rounded-md dark:bg-gray-800 bg-white">
        <Link href="/">
          <a>
            <div className="flex items-center flex-no-shrink mr-6">
              <span className="font-semibold text-3xl tracking-tight">
                Arne Boedt
              </span>
            </div>
          </a>
        </Link>
        <div className="block">
          <button
            className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white lg:hidden"
            onClick={handleHamburgerClick}
          >
            <svg
              className="h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={clsx(
            'w-full flex-grow lg:flex lg:h-full lg:items-center lg:w-auto transition-all duration-300 overflow-hidden ease-in-out',
            showMenu ? 'h-24' : 'h-0'
          )}
        >
          <ul className="lg:flex text-lg lg:flex-grow">
            <li>
              <Link href="/blog">
                <a
                  className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter mr-4 "
                  onClick={handleHamburgerClick}
                >
                  Blog
                </a>
              </Link>
            </li>
            <li>
              <Link href="/blog/erasmus">
                <a
                  className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter mr-4"
                  onClick={handleHamburgerClick}
                >
                  Erasmus
                </a>
              </Link>
            </li>
          </ul>
          <ThemeToggle className="float-right lg:mt-0 sm:-mt-10" />
        </div>
      </nav>
    </div>
  );
};
