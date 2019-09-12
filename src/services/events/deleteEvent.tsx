import { BASE_PATH, databaseSecret } from 'services';
import { Event } from 'services/types';

import axios from 'axios';

const deleteEventSubPath = (event: Event, currentUserId: string) => {
  return `users/${currentUserId}/events/${event.id}`;
};

export default (event: Event, currentUserId: string) => {
  return axios.delete(
    `${BASE_PATH}${deleteEventSubPath(
      event,
      currentUserId,
    )}.json?auth=${databaseSecret}`,
  );
};
