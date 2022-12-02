import * as React from 'react';
import { ButtonHTMLAttributes, FunctionComponent } from 'react';

import clsx from 'clsx';

interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const ActionButton: FunctionComponent<ActionButtonProps> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={clsx(
        className,
        'flex justify-center p-2 text-gray-500 transition duration-150 ease-in-out bg-gray-100 border border-transparent rounded-md lg:bg-white lg:dark:bg-gray-800 dark:text-gray-200 dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-700 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50'
      )}
    >
      {children}
    </button>
  );
};
