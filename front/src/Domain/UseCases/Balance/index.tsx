import axios from 'axios';
import { User } from '../../Entity/User';

const baseUrl = `${process.env.REACT_APP_BACKEND_URL}/auth`;

export const getBalanceRequest = async (id: Pick<User, 'id'>) => {
  return await axios.get(`${baseUrl}/balance/${id.id}`);
};
