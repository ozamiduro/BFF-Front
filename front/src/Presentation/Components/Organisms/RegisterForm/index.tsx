import { Formik, Form, ErrorMessage } from 'formik';
import { Title } from '../../Atoms/Title';
import { Input } from '../../Atoms/Input';
import { Button } from '../../Atoms/Button';
import { RegisterFormProps } from './type';

import './styles.css';
import { useRegister } from '../../../../Data/Hooks/Auth';

/**
 * Renders a RegisterForm component.
 *
 * Is a organisms responsible to present the register form.
 *
 * **Usage example**
 *
 * **Default properties**
 *
 *  ```tsx
 * <RegisterForm />
 * ```
 * ---
 * **Children property**
 *
 *  ```tsx
 * <RegisterForm children={<button>Hi!</button>} />
 * ```
 * ---
 * @category Component
 */
const RegisterForm = ({ children }: RegisterFormProps) => {
  const { register } = useRegister();

  const initialValues = {
    id: '',
    email: '',
    name: '',
    birth: '',
  };

  const validation = (values: any) => {
    const errors: any = {};
    const typesInitialValues = ['number', 'string', 'string', 'string'];

    const val = Object.entries(values);

    if (val.some((el) => !el[1])) {
      val.forEach((el) => {
        if (el[1] === '') {
          errors[el[0]] = 'Campo requerido';
        }
      });
    } else {
      val.forEach((el, index) => {
        if (typeof el[1] !== typesInitialValues[index]) {
          errors[el[0]] = 'Campo invalido';
        }
      });
    }

    return errors;
  };

  const onSubmit = async (values: any) => {
    await register(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validation}
      onSubmit={onSubmit}
      style={{ height: '100%' }}
    >
      {({ setFieldValue }) => (
        <Form className={'form-container'}>
          <div style={{ height: '80%' }}>
            <Title title="Registrese" styles={{ marginTop: 0 }} />
            <div className={'container-inputs'}>
              <Input
                type={'number'}
                name={'id'}
                placeholder={'Ingrese su cédula'}
              />
              <Input
                type={'email'}
                name={'email'}
                placeholder={'Ingrese su correo eléctronico'}
              />
              <Input
                type={'text'}
                name={'name'}
                placeholder={'Ingrese su nombre completo'}
              />
              <div className={'date-container'}>
                <span>Fecha de nacimiento</span>
                <input
                  type={'date'}
                  name={'birth'}
                  onChange={(el) => {
                    setFieldValue('birth', el.target.value);
                  }}
                  placeholder={'Ingrese su fecha de nacimiento'}
                />
                <ErrorMessage name={'birth'}>
                  {(msg: string) => <div className={'error-msg'}>{msg}</div>}
                </ErrorMessage>
              </div>
            </div>
          </div>
          <div
            style={{
              height: '20%',
              width: '40%',
              margin: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}
          >
            <Button type={'submit'} text={'Registrar'} />
            {children}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export { RegisterForm };
