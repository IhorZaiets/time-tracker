import TrackerTypes from './actionTypes';

export const addTracker = (tracker) => ({
	type: TrackerTypes.ADD_TRACKER,
	payload: tracker,
});

export const removeTracker = (id) => ({
	type: TrackerTypes.REMOVE_TRACKER,
    payload: id,
});
