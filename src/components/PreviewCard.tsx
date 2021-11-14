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
    <div className="relative w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col xl:flex-row">
      <div className="w-full h-80">
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
      <div className="w-full text-left p-6 md:p-4 space-y-2">
        <Link href={to}>
          <a>
            <h3 className="text-xl text-red-900 font-bold hover:cursor-pointer">
              {title}
            </h3>
          </a>
        </Link>
        {subTitle && (
          <h4 className="text-base text-gray-400 font-normal">{subTitle}</h4>
        )}
        <p className="text-base leading-relaxed text-gray-800 font-normal">
          {description}
        </p>
        <div className="absolute bottom-4 right-4 hover:text-red-900 hover:underline">
          <Link href={to}>Learn more...</Link>
        </div>
      </div>
    </div>
  );
};
