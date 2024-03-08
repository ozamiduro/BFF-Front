import axios from 'axios';
import { User } from '../../Domain/Entity/User';

const baseUrl = `${process.env.REACT_APP_BFF}/auth`;

/**
 * @param id The id of the user
 * @returns User object if it exists, otherwise returns error
 */
export const loginRequest = async (id: number) => {
  return await axios.get(`${baseUrl}/login/${id}`);
};

/**
 * @param auth The auth
 * @returns User object if it is created successfully, otherwise returns error
 */
export const registryRequest = async (auth: User) => {
  return await axios.post(`${baseUrl}/registry`, auth);
};
