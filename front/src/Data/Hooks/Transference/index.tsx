import { useContext, useState } from 'react';
import { AuthContext } from '../../../Domain/Model/Providers';
import {
  getTransferencesRequest,
  postTransferenceRequest,
} from '../../../Domain/UseCases/Transference';
import {
  SendTransference,
  Transference,
} from '../../../Domain/Entity/Transference';

/**
 * @function Hook responsible for the managment of transferences.
 * For get all the transferences and make a transference.
 */
export const useTransference = () => {
  const { auth } = useContext(AuthContext);
  const [transferences, setTransferences] = useState<
    Transference[] | undefined
  >(undefined);

  const getTransferences = async () => {
    try {
      const { data, status } = await getTransferencesRequest({ id: auth!!.id });

      if (status === 200) {
        setTransferences(data.data);
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  const postTransference = async (transferenceInfo: SendTransference) => {
    try {
      const { data, status } = await postTransferenceRequest(transferenceInfo);
      if (status === 201) {
        console.log('Enviado', data.data);
        return status;
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  return { transferences, getTransferences, postTransference };
};
