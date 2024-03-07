import { CSSProperties } from 'react';

/**
 * The props type for {@link Title}.
 */
interface TitleProps {
  /** The text of the title. */
  title: string;
  /** The color of the title. Defaults to `black`. */
  color?: string;
  /** The CSSProperties of the title. Can be optional. */
  styles?: CSSProperties;
}

export type { TitleProps };
