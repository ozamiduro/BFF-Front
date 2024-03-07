import axios from 'axios';
import { User } from '../../Entity/User';

const baseUrl = `http://localhost:3001/api`;

/**
 * @param id The id of the user
 * @returns All basic information based on the user id
 */
export const informationRequest = async (id: Pick<User, 'id'>) => {
  return await axios.get(`${baseUrl}/info/${id.id}`);
};
