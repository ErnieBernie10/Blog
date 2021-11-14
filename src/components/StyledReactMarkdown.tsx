import React from 'react';

import ReactMarkdown from 'react-markdown';
import { ReactMarkdownOptions } from 'react-markdown/lib/react-markdown';

import { withClassNames } from '../util/withClassName';

export const StyledReactMarkdown: React.FC<ReactMarkdownOptions> = ({
  children,
}) => {
  return (
    <ReactMarkdown
      components={{
        h1: withClassNames('text-4xl'),
        h2: withClassNames('text-3xl text-gray-800'),
        p: withClassNames('mb-4 text-justify'),
        img: withClassNames('mx-auto rounded-lg max-h-[800px]'),
      }}
    >
      {children}
    </ReactMarkdown>
  );
};
