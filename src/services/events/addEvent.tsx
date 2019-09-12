import { BASE_PATH, databaseSecret } from 'services';
import { EventReq } from 'services/types';

import axios from 'axios';

const addEventSubPath = (currentUserId: string) => {
  return `users/${currentUserId}/events`;
};
export default (eventReq: EventReq, currentUserId: string) => {
  axios.post(
    `${BASE_PATH}${addEventSubPath(currentUserId)}.json?auth=${databaseSecret}`,
    eventReq,
  );
};
