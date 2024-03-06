export interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: 'button' | 'reset' | 'submit';
  children?: React.ReactElement<any>;
}
