import React from 'react';

import Link from 'next/link';

interface PreviewCardProps {
  title: string;
  subTitle?: string;
  imgSrc: string;
  imgAlt: string;
  description: string;
  to: string;
  date: string;
}

export const PreviewCard: React.FC<PreviewCardProps> = ({
  title,
  subTitle,
  imgSrc,
  imgAlt,
  description,
  to,
  date,
}) => {
  return (
    <div className="relative w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl overflow-hidden flex flex-col xl:flex-row hover:scale-[102%] transition-all duration-100">
      <div className="w-full h-80 bg-white">
        <Link href={to}>
          <img
            className="object-center object-cover w-full h-full hover:cursor-pointer"
            src={imgSrc}
            alt={imgAlt}
            title={imgAlt}
          />
        </Link>
      </div>
      <div className="w-full text-left p-2 sm:md:lg:p-3">
        <Link href={to}>
          <h3 className="text-xl text-red-900 dark:text-gray-100 font-bold hover:cursor-pointer dark:text-blue dark:text-red-200">
            {title}
          </h3>
        </Link>
        <div className="mb-10">
          {subTitle && <h4 className="text-base font-normal">{subTitle}</h4>}
          <p className="text-base leading-relaxed font-normal text-justify mt-2">
            {description}
          </p>
        </div>
        <div className="absolute bottom-1 right-2 w-full pl-7 m-2 xl:w-[51%]">
          <div className="flex justify-between w-full">
            <div className="italic text-gray-600">{date}</div>
            <Link
              href={to}
              className="hover:text-red-800 dark:hover:text-red-400 hover:underline dark:text-red-200 font-bold"
            >
              Read
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
