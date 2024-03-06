import { Dispatch, SetStateAction } from 'react';
import { Options } from '../HomeView/type';

interface NavBarProps {
  options: {
    name: string;
    option: Options;
  }[];
  onClick: Dispatch<SetStateAction<Options>>;
}

export type { NavBarProps };
