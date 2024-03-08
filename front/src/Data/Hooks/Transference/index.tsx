import { useContext, useState } from 'react';
import { AuthContext } from '../../../Domain/Model/Providers';
import {
  getTransferencesRequest,
  postTransferenceRequest,
} from '../../../Controllers/Transference';
import {
  SendTransference,
  Transference,
} from '../../../Domain/Entity/Transference';
import { toast } from 'react-toastify';

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

  const postTransference = async (
    transferenceInfo: Exclude<SendTransference, 'userId'>
  ) => {
    try {
      const { data, status } = await postTransferenceRequest({
        ...transferenceInfo,
        userId: auth?.id ?? 0,
      });
      if (status === 201) {
        toast.success(
          `Transferencia a ${data.data.name} realizada exitosamente!`
        );
        return status;
      }
    } catch (error: any) {
      toast.error(error.response.data.error);
      console.log(error);
    }
  };

  return { transferences, getTransferences, postTransference };
};
