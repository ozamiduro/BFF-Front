import axios from 'axios';
import { User } from '../../Domain/Entity/User';

const baseUrl = `${process.env.REACT_APP_BFF}`;

/**
 * @param id The id of the user
 * @returns All basic information based on the user id
 */
export const informationRequest = async (id: Pick<User, 'id'>) => {
  return await axios.get(`${baseUrl}/info/${id.id}`);
};
