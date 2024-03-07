/**
 * The props type for {@link Button}.
 */
export interface ButtonProps {
  /** The text of the button. */
  text: string;
  /** The void function for onClick button option. Can be a optional. */
  onClick?: () => void;
  /** Types of button. Defaults to `button`. */
  type?: 'button' | 'reset' | 'submit';
  /** The JSX Element as a children of the button. Can be optional. */
  children?: React.ReactElement<any>;
}
