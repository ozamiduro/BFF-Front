import { Dispatch, SetStateAction } from 'react';
import { Options } from '../HomeView/type';

/**
 * The props type for {@link NavBar}.
 */
interface NavBarProps {
  /** An object with the name and options {@link Options} of the element.  */
  options: {
    name: string;
    option: Options;
  }[];
  /** A function to update a {@link useState} to navigate. */
  onClick: Dispatch<SetStateAction<Options>>;
}

export type { NavBarProps };
