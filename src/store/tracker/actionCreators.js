import TrackerTypes from './actionTypes';

export const addTracker = tracker => ({
	type: TrackerTypes.ADD_TRACKER,
	payload: tracker,
});

export const removeTracker = id => ({
	type: TrackerTypes.REMOVE_TRACKER,
    payload: id,
});

export const pauseToggle = id => ({
	type: TrackerTypes.PAUSE_TOGGLE,
    payload: id,
})

export const fetchTrackers = () => ({
	type: TrackerTypes.FETCH_TRACKERS,
	payload: '',
})

export const modifyTracker = obj => ({
	type: TrackerTypes.MODIFY_TRACKER,
	payload: obj,
}) 
