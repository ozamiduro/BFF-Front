import { ButtonProps } from './type';

import './styles.css';

/**
 * Renders a button component.
 *
 * Is a reusable component, which counts with the following props:
 * - **text:** Props type string, which is the text of the button.
 * - **onClick:** An optional function.
 * - **type:** Props type string, which is the type of the button, with the default value as a button.
 * - **children:** An optional props type string, which count with a jsx o any other element as a child of the component button.
 *
 * **Usage example**
 *
 * **Default properties**
 * ```tsx
 * <Button text={'My button'} />
 * ```
 * ---
 * **OnClick property**
 * ```tsx
 * <Button text={'My button'} onClick={() => console.log('hey')} />
 * ```
 * ---
 * **Type property**
 * ```tsx
 * <Button text={'My button'} type={'submit'} />
 * ```
 * ---
 * **Children property**
 * ```tsx
 * <Button text={'My button'} children={<span>I'm an a children</span>} />
 * ```
 * ---
 * @category Component
 */

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
