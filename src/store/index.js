import { combineReducers } from 'redux';

import trackerReducer from './tracker/reducer';

const rootReducer = combineReducers({
	courses: trackerReducer,
});

export default rootReducer;