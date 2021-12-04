import React from 'react';

import Link from 'next/link';

interface PreviewCardProps {
  title: string;
  subTitle?: string;
  imgSrc: string;
  imgAlt: string;
  description: string;
  to: string;
}
export const PreviewCard: React.FC<PreviewCardProps> = ({
  title,
  subTitle,
  imgSrc,
  imgAlt,
  description,
  to,
}) => {
  return (
    <div className="relative w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl overflow-hidden flex flex-col xl:flex-row hover:scale-[102%] transition-all duration-100">
      <div className="w-full h-80 bg-white">
        <Link href={to}>
          <a>
            <img
              className="object-center object-cover w-full h-full hover:cursor-pointer"
              src={imgSrc}
              alt={imgAlt}
              title={imgAlt}
            />
          </a>
        </Link>
      </div>
      <div className="w-full text-left p-6 md:p-2">
        <Link href={to}>
          <a>
            <h3 className="text-xl text-red-900 dark:text-gray-100 font-bold hover:cursor-pointer">
              {title}
            </h3>
          </a>
        </Link>
        <div className="mb-10">
          {subTitle && <h4 className="text-base font-normal">{subTitle}</h4>}
          <p className="text-base leading-relaxed font-normal">{description}</p>
        </div>
        <div className="absolute bottom-4 right-4 hover:text-red-900 hover:underline">
          <Link href={to}>
            <a>Learn more...</a>
          </Link>
        </div>
      </div>
    </div>
  );
};
