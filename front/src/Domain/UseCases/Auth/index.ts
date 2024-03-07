import axios from 'axios';
import { User } from '../../Entity/User';

const baseUrl = `http://localhost:3001/api/auth`;

/**
 * @param id The id of the user
 * @returns User object if it exists, otherwise returns error
 */
export const loginRequest = async (auth: Pick<User, 'id'>) => {
  return await axios.post(`${baseUrl}/login`, auth);
};

/**
 * @param auth The auth
 * @returns User object if it is created successfully, otherwise returns error
 */
export const registryRequest = async (auth: User) => {
  return await axios.post(`${baseUrl}/registry`, auth);
};
