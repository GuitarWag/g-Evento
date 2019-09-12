import { BASE_PATH, databaseSecret } from 'services';
import axios from 'axios';

const getEventsSubPath = (currentUserId: string) => {
  return `users/${currentUserId}/events`;
};

export default (currentUserId: string) => {
  return axios.get(
    `${BASE_PATH}${getEventsSubPath(
      currentUserId,
    )}.json?auth=${databaseSecret}`,
  );
};
