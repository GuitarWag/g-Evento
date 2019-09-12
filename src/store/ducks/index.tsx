import { combineReducers } from 'redux';
import appIntegration from './app-integration';
import loggedUser from './logged-user';
import spinner from './spinner';
import language from './language';

export default combineReducers({
  appIntegration,
  loggedUser,
  spinner,
  language,
});
