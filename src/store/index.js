import { combineReducers } from 'redux';

import trackerReducer from './tracker/reducer';

const rootReducer = combineReducers({
	trackers: trackerReducer,
});

export default rootReducer;