import { Dispatch, SetStateAction, createContext } from 'react';
import { User } from '../../Entity/User';

/**
 * The Auth's interface
 * @interface Auth
 */
interface Auth {
  auth: User | undefined;
  setAuth: Dispatch<SetStateAction<User | undefined>>;
}

export const AuthContext = createContext<Auth>({
  auth: undefined,
  setAuth: () => {},
});
