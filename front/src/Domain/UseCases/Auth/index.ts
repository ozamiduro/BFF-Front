import axios from 'axios';
import { User } from '../../Entity/User';

const baseUrl = `http://localhost:3001/api/auth`;

export const loginRequest = async (auth: Pick<User, 'id'>) => {
  return await axios.post(`${baseUrl}/login`, auth);
};

export const registryRequest = async (auth: User) => {
  return await axios.post(`${baseUrl}/registry`, auth);
};
