import { BASE_PATH, databaseSecret } from 'services';
import { Event } from 'services/types';

import axios from 'axios';

const getSpecificEventSubPath = (currentUserId: string, event: Event) => {
  return `users/${currentUserId}/Events/${event.id}`;
};

export default (currentUserId: string, event: Event) => {
  return axios.get(
    `${BASE_PATH}${getSpecificEventSubPath(
      currentUserId,
      event,
    )}.json?auth=${databaseSecret}`,
  );
};
