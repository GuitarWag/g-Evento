import axios from 'axios';
import { BASE_PATH, databaseSecret } from 'services';
import { Musician } from 'services/types';

const deleteMusicianSubPath = (musician: Musician, currentUserId: string) => {
  return `users/${currentUserId}/musicians}`;
};

function* deleteMusician(musician: Musician, currentUserId: string) {
  yield axios.delete(
    `${BASE_PATH}${deleteMusicianSubPath(
      musician,
      currentUserId,
    )}.json?auth=${databaseSecret}`,
  );
}
export default deleteMusician;
