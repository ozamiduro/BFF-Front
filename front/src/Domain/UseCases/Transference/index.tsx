import axios from 'axios';
import { User } from '../../Entity/User';
import { SendTransference } from '../../Entity/Transference';

// const baseUrl = `${process.env.REACT_APP_BACKEND_URL}/auth`;
const baseUrl = `http://localhost:3001/api`;

export const getTransferencesRequest = async (id: Pick<User, 'id'>) => {
  return await axios.get(`${baseUrl}/transferences/${id.id}`);
};

export const postTransferenceRequest = async (tf: SendTransference) => {
  return await axios.post(`${baseUrl}/transferences/`, tf);
};
