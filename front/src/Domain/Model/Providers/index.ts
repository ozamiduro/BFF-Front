import { Dispatch, SetStateAction, createContext } from 'react';
import { User } from '../../Entity/User';

interface Auth {
  auth: User | undefined;
  setAuth: Dispatch<SetStateAction<User | undefined>>;
}

export const AuthContext = createContext<Auth>({
  auth: undefined,
  setAuth: () => {},
});
