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
    <div className="container mx-auto w-[800px] grid grid-cols-3 grid-rows-2 gap-4 h-full">
      <div
        className="self-end col-span-2 pb-4"
        onMouseOver={handleHover}
        onMouseOut={unlockHover}
      >
        <h1 className="text-6xl text-right">Arne Boedt</h1>
        <h2 className="text-2xl text-right dark:text-gray-400 text-gray-700">
          Fullstack Software Developer
        </h2>
      </div>
      <nav className="self-end border-l-2 pl-4 pt-3 dark:border-gray-200 border-gray-500">
        <ul className="text-lg lg:flex-grow h-full flex flex-col">
          <li>
            <Link href="/blog?m=true">
              <a className="block lg:inline-block text-teal-lighter mr-4 hover:text-black dark:hover:text-gray-400 hover:underline">
                Blog
              </a>
            </Link>
          </li>
          <li>
            <Link href="/blog/erasmus?m=true">
              <a className="block mt-4 lg:inline-block text-teal-lighter mr-4 mt-4 hover:text-black dark:hover:text-gray-400 hover:underline">
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
        <ul className="flex">
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
