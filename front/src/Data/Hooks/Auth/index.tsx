import { useContext } from 'react';
import { User } from '../../../Domain/Entity/User';
import { loginRequest, registryRequest } from '../../../Controllers/Auth';
import { AuthContext } from '../../../Domain/Model/Providers';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

/**
 * @function Hook responsible for the login process.
 */
export const useLogin = () => {
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const login = async (id: number) => {
    try {
      const { data, status } = await loginRequest(id);

      if (status === 200) {
        localStorage.setItem('auth', JSON.stringify(data.data));
        setAuth(data.data);
        navigate('/home');
        toast.success(`Bienvenido ${data.data.name}!`);
      }
    } catch (error: any) {
      toast.error('Cliente no encontrado');
      console.log(error);
    }
  };

  return { login };
};

/**
 * @function Hook responsible for the registration process.
 */
export const useRegister = () => {
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const register = async (auth: User) => {
    try {
      const { data, status } = await registryRequest(auth);

      if (status === 201) {
        localStorage.setItem('auth', JSON.stringify(data.data));
        setAuth(data.data);
        navigate('/home');
        toast.success(`Bienvenido ${data.data.name}!`);
      }
    } catch (error: any) {
      toast.error('Cliente no encontrado');
      console.log(error);
    }
  };

  return { register };
};
