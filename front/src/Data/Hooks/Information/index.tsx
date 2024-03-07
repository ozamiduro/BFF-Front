import { useContext, useState } from 'react';
import { AuthContext } from '../../../Domain/Model/Providers';
import { informationRequest } from '../../../Domain/UseCases/Information';
import { User } from '../../../Domain/Entity/User';
import { Balance } from '../../../Domain/Entity/Balance';

type UserInfo = User & Exclude<Balance, 'idUser'>;

/**
 * @function Hook responsible for the managment basic information.
 */
export const useInformation = () => {
  const { auth } = useContext(AuthContext);

  const [userInfo, setUserInfo] = useState<UserInfo | undefined>(undefined);

  const information = async () => {
    try {
      const { data, status } = await informationRequest({ id: auth!!.id });

      if (status === 200) {
        setUserInfo(data.data);
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  return { userInfo, information };
};
