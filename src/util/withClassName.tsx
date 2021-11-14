import { PropsWithChildren, createElement } from 'react';

import clsx from 'clsx';
import { Element } from 'react-markdown/lib/ast-to-react';

export const withClassNames = <T extends { node: Element; className?: string }>(
  className: string
) => {
  const ElementWithClassNames: React.ComponentType<T> = ({
    node,
    ...props
  }: PropsWithChildren<T>) => {
    return createElement(node.tagName, {
      ...props,
      className: clsx(props.className, className),
    });
  };
  return ElementWithClassNames;
};
