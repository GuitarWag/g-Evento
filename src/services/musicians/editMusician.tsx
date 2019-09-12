import axios from 'axios';
import { BASE_PATH, databaseSecret } from 'services';
import { Musician, MusicianReq } from 'services/types';

const editMusicianSubPath = (musician: Musician, currentUserId: string) => {
  return `users/${currentUserId}/months/${musician.id}`;
};
// const editMusicianPaidSubPath = (musician: Musician, currentUserId: string) => {
//   return `/users/${currentUserId}/months/${musician.relativeMonth}/${musician.type}/${musician.identifier}/paid`;
// };

function* editMusician(
  musician: Musician,
  currentUserId: string,
  editedMusician: MusicianReq,
) {
  yield axios.put(
    `${BASE_PATH}${editMusicianSubPath(
      musician,
      currentUserId,
    )}.json?auth=${databaseSecret}`,
    editedMusician,
  );
  // .then(() =>
  //   axios.put(
  //     `${BASE_PATH}${editMusicianPaidSubPath(
  //       musician,
  //       currentUserId,
  //     )}.json?auth=${databaseSecret}`,
  //     false,
  //   ),
  // );
}
export default editMusician;
