import { ButtonProps } from './type';

import './styles.css';

const Button = ({ text, onClick, type = 'button', children }: ButtonProps) => {
  return (
    <>
      <button className={'container-button'} onClick={onClick} type={type}>
        {children ? children : text}
      </button>
    </>
  );
};

export { Button };
