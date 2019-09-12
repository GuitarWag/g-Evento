import axios from 'axios';
import { BASE_PATH, databaseSecret } from 'services';
import { MusicianReq } from 'services/types';

const addMusicianSubPath = (
  musicianReq: MusicianReq,
  currentUserId: string,
) => {
  return `users/${currentUserId}/musicians}`;
};

export default (musicianReq: MusicianReq, currentUserId: string) => {
  axios.post(
    `${BASE_PATH}${addMusicianSubPath(
      musicianReq,
      currentUserId,
    )}.json?auth=${databaseSecret}`,
    musicianReq,
  );
};
