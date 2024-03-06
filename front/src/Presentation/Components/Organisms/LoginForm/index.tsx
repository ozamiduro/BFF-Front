import { Form, Formik } from 'formik';
import { Input } from '../../Atoms/Input/Input';
import { Button } from '../../Atoms/Button';
import { Title } from '../../Atoms/Title';
import { LoginFormProps } from './type';
import { useLogin } from '../../../../Data/Hooks/Auth';

const LoginForm = ({ children }: LoginFormProps) => {
  const { login } = useLogin();

  const initialValues = {
    id: '',
  };

  const validation = (values: any) => {
    const errors: any = {};

    if (!values.id) {
      errors.id = 'Cédula requerida';
    } else if (typeof values.id !== 'number') {
      errors.id = 'Cédula invalida';
    }
    return errors;
  };

  const onSubmit = async (values: any) => {
    await login(values.id);
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validation}
      onSubmit={onSubmit}
      style={{ height: '100%' }}
    >
      {() => {
        return (
          <Form className={'form-container'}>
            <div style={{ height: '85%' }}>
              <Title title="Ingrese su cédula" styles={{ marginTop: 0 }} />
              <div>
                <Input
                  type={'number'}
                  name={'id'}
                  placeholder={'Ingrese su cédula'}
                />
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
              <Button type={'submit'} text={'Ingresar'} />
              {children}
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export { LoginForm };
