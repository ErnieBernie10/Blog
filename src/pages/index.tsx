import React, { useState } from 'react';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import type { NextPage } from 'next';
import Link from 'next/link';

import { ThemeToggle } from '../components/ThemeToggle';

const Home: NextPage = () => {
  const [hovering, setHovering] = useState(false);
  const [hoverLocked, setHoverLocked] = useState(false);

  const handleHover = () => {
    if (!hoverLocked) {
      setHovering(!hovering);
      setHoverLocked(true);
    }
  };

  const unlockHover = () => {
    setHoverLocked(false);
    setHovering(!hovering);
  };

  return (
    <div className="container mx-auto md:lg:w-[800px] grid sm:md:lg:grid-cols-3 sm:md:lg:grid-rows-2 sm:md:lg:gap-4 grid-cols-1 grid-rows-2 p-2 h-full">
      <div
        className="self-end col-span-2 pb-1"
        onMouseOver={handleHover}
        onMouseOut={unlockHover}
      >
        <h1 className="text-6xl text-right">Arne Boedt</h1>
        <h2 className="text-2xl text-right dark:text-gray-400 text-gray-700 dark:text-red-200 text-red-800">
          Fullstack Software Developer
        </h2>
        <span className="text-right block text-gray-500">
          <a href="mailto:arneboedt1@gmail.com">arneboedt1@gmail.com</a>
        </span>
      </div>
      <nav className="self-start sm:md:lg:self-end sm:md:lg:text-left text-right md:lg:border-l-2 md:lg:border-t-0 border-t-2 pl-4 pt-5 pb-2 dark:border-gray-200 border-gray-500">
        <ul className="text-lg lg:flex-grow h-full flex flex-col">
          <li>
            <Link href="/blog?m=true">
              <a className="block sm:md:lg:inline-block text-teal-lighter sm:md:lg:mr-4 hover:text-black dark:hover:text-gray-400 hover:underline">
                Blog
              </a>
            </Link>
          </li>
          <li>
            <Link href="/blog/erasmus?m=true">
              <a className="block mt-4 lg:inline-block text-teal-lighter sm:md:lg:mr-4 mt-2 hover:text-black dark:hover:text-gray-400 hover:underline">
                Erasmus
              </a>
            </Link>
          </li>
          {/* <li> */}
          {/*  <Link href="/portfolio"> */}
          {/*    <a */}
          {/*      href="#responsive-header" */}
          {/*      className="block mt-4 lg:inline-block text-teal-lighter mr-4 mt-4" */}
          {/*    > */}
          {/*      Portfolio */}
          {/*    </a> */}
          {/*  </Link> */}
          {/* </li> */}
        </ul>
        <ul className="flex sm:md:lg:justify-start justify-end">
          <li>
            <a
              href="https://github.com/ErnieBernie10"
              target="_blank"
              className="block mt-4 lg:inline-block text-teal-lighter mr-4 mt-4 mb-3"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </li>
          <li className="flex flex-col justify-center">
            <ThemeToggle noBackground className="-ml-3" size="lg" />
          </li>
        </ul>
      </nav>
      <div
        className={clsx(
          'col-span-2 transition-all duration-500 overflow-hidden ease-in-out',
          hovering ? 'h-full' : 'h-0'
        )}
      >
        <p className="text-right mb-3 dark:text-gray-500">
          I’m a passionate Software Engineer with sights on Full-Stack
          development. The passion for computers was always present even as a
          child when I was playing with the family computer and it stuck around
          which now resulted in a highly motivated, skilled and independent
          codaholic.
        </p>
        <p className="text-right mb-3 dark:text-gray-500">
          I always feel personally involved with a project and care about it,
          whether it be a personal or professional project. On top of my passion
          for coding I am also experienced with working abroad and in
          internationally diverse teams as I enjoy working with all kinds of
          people!
        </p>
        <p className="text-right mb-3 dark:text-gray-500">
          Altogether I’m a reliable, highly motivated, independent,
          multicultural Software Engineer who loves to code.
        </p>
      </div>
    </div>
  );
};

export default Home;
