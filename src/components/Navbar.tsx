import React, { useState } from 'react';

import clsx from 'clsx';
import Link from 'next/link';

import { ThemeToggle } from './ThemeToggle';

export const Navbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleHamburgerClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="mx-auto w-full fixed z-10">
      <nav className="flex items-center justify-between flex-wrap bg-teal p-2 pl-4 m-2 shadow-md rounded-md dark:bg-gray-800 bg-white">
        <Link href="/">
          <a>
            <div className="flex items-center flex-no-shrink mr-6">
              <svg
                className="h-8 w-8 mr-2"
                width="54"
                height="54"
                viewBox="0 0 54 54"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
              </svg>
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
            showMenu ? 'h-32' : 'h-0'
          )}
        >
          <ul className="lg:flex text-lg lg:flex-grow">
            <li>
              <Link href="/blog">
                <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter mr-4">
                  Blog
                </a>
              </Link>
            </li>
            <li>
              <Link href="/blog/erasmus">
                <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter mr-4">
                  Erasmus
                </a>
              </Link>
            </li>
            <li>
              <Link href="/portfolio">
                <a
                  href="#responsive-header"
                  className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter mr-4"
                >
                  Portfolio
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
