import axios from 'axios';
import { User } from '../../Domain/Entity/User';
import { SendTransference } from '../../Domain/Entity/Transference';

const baseUrl = `${process.env.REACT_APP_BFF}`;

/**
 * @param id The id of the user
 * @returns All transferences based on the user id
 */
export const getTransferencesRequest = async (id: Pick<User, 'id'>) => {
  return await axios.get(`${baseUrl}/transferences/${id.id}`);
};

/**
 * @param id The id of the user
 * @returns The transferences did if it was created successfully, otherwise returns error
 */
export const postTransferenceRequest = async (tf: SendTransference) => {
  return await axios.post(`${baseUrl}/transferences/`, tf);
};
