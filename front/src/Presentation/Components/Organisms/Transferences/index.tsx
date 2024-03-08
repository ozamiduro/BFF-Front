import { useEffect, useState } from 'react';
import { Button } from '../../Atoms/Button';
import { Modal } from '../../Atoms/Modal';
import { Title } from '../../Atoms/Title';
import { TransferenceLine } from '../../Atoms/TransferenceLine';

import './styles.css';
import { Form, Formik } from 'formik';
import { Input } from '../../Atoms/Input';
import { useTransference } from '../../../../Data/Hooks/Transference';

/**
 * Renders a Transferences component.
 *
 * Is a organisms responsible to present transferences history.
 *
 * **Usage example**
 *
 * **Default properties**
 *
 *  ```tsx
 * <Transferences />
 * ```
 * ---
 * @category Component
 */
const Transferences = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const { transferences, getTransferences, postTransference } =
    useTransference();

  useEffect(() => {
    const unSub = async () => {
      await getTransferences();
    };

    unSub();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const initialValues = {
    name: '',
    amount: '',
  };

  const validation = (values: any) => {
    const errors: any = {};
    const typesInitialValues = ['string', 'number'];
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
    const result: number | undefined = await postTransference(values);
    if (result && result === 201) {
      await getTransferences();
      setOpenModal(false);
    }
  };

  return (
    <>
      <Title title={'Transferencias'} />
      <div className={'container-transfer'}>
        <TransferenceLine data={transferences ?? []} />
        <div className={'container-btns'}>
          <Button
            text={'Enviar transferencia'}
            onClick={() => setOpenModal(true)}
          />
        </div>
      </div>
      {openModal && (
        <Modal setModal={setOpenModal} title={'Realizar transferencia'}>
          <div>
            <Formik
              initialValues={initialValues}
              validate={validation}
              onSubmit={onSubmit}
            >
              {() => {
                return (
                  <Form className={'form-container'}>
                    <div className={'inputs-container'}>
                      <div>
                        <h3>Nombre de la persona a recibir la transferencia</h3>
                        <Input
                          type={'text'}
                          name={'name'}
                          placeholder={'Ingrese el nombre de la persona'}
                        />
                      </div>
                      <div>
                        <h3>Cantidad</h3>
                        <Input
                          type={'number'}
                          name={'amount'}
                          placeholder={'Ingrese la cantidad de la transacción'}
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
                      <Button type={'submit'} text={'Realizar transacción'} />
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </Modal>
      )}
    </>
  );
};

export { Transferences };
