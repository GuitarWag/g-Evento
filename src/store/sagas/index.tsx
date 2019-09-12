import { all } from 'redux-saga/effects';
import { watchAppStart } from './app-integration';
import {
  watchGoogleLoginStart,
  watchFacebookLoginStart,
  watchLogoutStart,
} from './logged-user';

// !!!!!!!!!! ADD SAGA HERE TO WORK !!!!!!!!!!!!!!!!
export default function* rootSaga() {
  yield all([
    watchAppStart(),
    watchGoogleLoginStart(),
    watchFacebookLoginStart(),
    watchLogoutStart(),
  ]);
}
