import TrackerTypes from './actionTypes';

const INITIAL_STATE = [
    {
        name: 'first',
        id: 'ajhfbvqwyf97364gf'
    },
    {
        name: 'second',
        id: 'afhbvqergv qkuev'
    },
];

const trackerReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
        case TrackerTypes.ADD_TRACKER:
            return [
                action.payload,
                ...state
            ];
		case TrackerTypes.REMOVE_TRACKER:
			return [
                ...state.filter(elem => elem.id !== action.payload)
            ];
		default:
			return state;
	}
};

export default trackerReducer;