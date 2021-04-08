import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import technologies from './technologies';

export default combineReducers({
  form: formReducer,
  technologies
});
