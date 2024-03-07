import { ErrorMessage, Field } from 'formik';
import { InputProps } from './type';

import './styles.css';

/**
 * Renders a input component based on the Formik dependecy.
 * Is a reusable component for Input fields for the Formik's forms, which counts with the following props:
 *
 * - **name:** Props type string, responsible for the id and name of the component, and the identification of the field for the library.
 * - **type:** An optional props type string, the type of the input field, with the default value as a text.
 * - **placeholder:** An optional props type string, responsible for the placeholder of the input field.
 *
 * **Usage example**
 *
 * **Default properties**
 *
 * ```tsx
 * <Input name={'id'} />
 * ```
 * ---
 * **Type property**
 *
 * ```tsx
 * <Input name={'id'} type={'number'} />
 * ```
 * ---
 * **Placeholder property**
 *
 * ```tsx
 * <Input name={'id'} placeholder={'Ingrese su identificación'} />
 * ```
 * ---
 * @category Component
 */

const Input = ({ type = 'text', name, placeholder }: InputProps) => {
  return (
    <div>
      <Field
        className={'input-form'}
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
      />
      <ErrorMessage name={name}>
        {(msg: string) => <div className={'error-msg'}>{msg}</div>}
      </ErrorMessage>
    </div>
  );
};

export { Input };
