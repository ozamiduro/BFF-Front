import { ErrorMessage, Field } from 'formik';
import { InputProps } from './type';

import './styles.css';

const Input = ({ type, name, placeholder }: InputProps) => {
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
