import TrackerTypes from './actionTypes';

const INITIAL_STATE = [];


const trackerReducer = (state = INITIAL_STATE, action) => {

	switch (action.type) {
        case TrackerTypes.ADD_TRACKER:
            const addTracker = [
                action.payload,
                ...state
            ]
            localStorage.setItem('trackers', JSON.stringify(addTracker))
            return addTracker
		case TrackerTypes.REMOVE_TRACKER:
            const removeTracker = [
                ...state?.filter(elem => elem.id !== action.payload)
            ]
            localStorage.setItem('trackers', JSON.stringify(removeTracker))
			return removeTracker;
        case TrackerTypes.PAUSE_TOGGLE:
            const pauseTrackers = [
                ...state?.map(elem => {
                    if(elem.id === action.payload){
                        return {
                            ...elem,
                            paused: !elem.paused
                        }
                    }else return elem
                })
            ]
            localStorage.setItem('trackers', JSON.stringify(pauseTrackers))
            return pauseTrackers
        case TrackerTypes.FETCH_TRACKERS:
            const fetchedData = localStorage?.getItem('trackers')
            if(fetchedData){
                return [
                    ...JSON.parse(fetchedData)
                ]
            }else return []
        case TrackerTypes.MODIFY_TRACKER:
            const modifyTracker = [
                ...state?.map(elem => {
                    if(elem.id === action.payload.id){
                        return {
                            ...elem,
                            ...action.payload,
                        }
                    }else return elem
                })
            ]
            localStorage.setItem('trackers', JSON.stringify(modifyTracker))
            return modifyTracker
		default:
			return state;
	}
};

export default trackerReducer;