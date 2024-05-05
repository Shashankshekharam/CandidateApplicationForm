import { combineReducers } from 'redux';
import jobReducer from './jobReducer'; // Assuming you have a jobReducer

const rootReducer = combineReducers({
  jobs: jobReducer,
  // Add other reducers here if needed
});

export default rootReducer;
