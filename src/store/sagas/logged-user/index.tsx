import { put, takeLatest, delay } from 'redux-saga/effects';
import {
  Creators as LoggedUserCreators,
  Types as LoggedUserTypes,
} from 'store/ducks/logged-user';
import firebase, { googleProvider, facebookProvider } from 'my-firebase';

export function* googleLoginStartAsync() {
  const response = yield firebase.auth().signInWithPopup(googleProvider);
  const { user } = yield response;
  yield put(LoggedUserCreators.googleLoginSuccess(user));
}
export function* watchGoogleLoginStart() {
  yield takeLatest(LoggedUserTypes.GOOGLE_LOGIN_START, googleLoginStartAsync);
}

export function* facebookLoginStartAsync() {
  const response = yield firebase.auth().signInWithPopup(facebookProvider);
  const { user } = yield response;
  yield put(LoggedUserCreators.facebookLoginSuccess(user));
}
export function* watchFacebookLoginStart() {
  yield takeLatest(
    LoggedUserTypes.FACEBOOK_LOGIN_START,
    facebookLoginStartAsync,
  );
}

export function* logoutStartAsync() {
  let error: Error | typeof undefined = undefined;
  let success = false;

  yield firebase
    .auth()
    .signOut()
    .then(() => {
      success = true;
    })
    .catch(errorParam => {
      error = errorParam;
    });
  yield delay(1500);
  if (success) {
    yield put(LoggedUserCreators.logoutSuccess());
  } else {
    yield put(LoggedUserCreators.logoutError(error));
  }
}
export function* watchLogoutStart() {
  yield takeLatest(LoggedUserTypes.LOGOUT_START, logoutStartAsync);
}
