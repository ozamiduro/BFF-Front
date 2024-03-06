import { useContext } from 'react';
import { User } from '../../../Domain/Entity/User';
import { loginRequest, registryRequest } from '../../../Domain/UseCases/Auth';
import { AuthContext } from '../../../Domain/Model/Providers';
import { useNavigate } from 'react-router';

export const useLogin = () => {
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const login = async (id: number) => {
    try {
      const { data, status } = await loginRequest({ id });

      if (status === 200) {
        setAuth(data.data);
        navigate('/home');
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  return { login };
};

export const useRegister = () => {
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const register = async (auth: User) => {
    try {
      const { data, status } = await registryRequest(auth);

      if (status === 200) {
        setAuth(data.data);
        navigate('/home');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { register };
};
