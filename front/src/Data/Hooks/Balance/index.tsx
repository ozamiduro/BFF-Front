import { useContext } from 'react';
import { AuthContext } from '../../../Domain/Model/Providers';
import { getBalanceRequest } from '../../../Domain/UseCases/Balance';

export const useBalance = () => {
  const { auth } = useContext(AuthContext);

  const balance = async () => {
    try {
      const { data } = await getBalanceRequest({ id: auth!!.id });
      console.log(data);
      return data;
    } catch (error: any) {
      console.log(error);
      return 'Error al obtener la información del usuario.';
    }
  };

  return { balance };
};
