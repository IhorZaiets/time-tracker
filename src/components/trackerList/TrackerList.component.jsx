import TrackerItem from "../trackerItem/TrackerItem.component";

import classes from './TrackerList.module.css';

import { connect } from "react-redux";

const TrackerList = ({ trackers }) => {
    return (
    <ul className={classes['trackers-list']}>
        {
            trackers.map(({id, ...tracker}) => <TrackerItem key={id} id={id} {...tracker}/>)
        }
    </ul>)
}

const mapStateToProps = (state) => {
	return {
		trackers: state.trackers,
	};
};

export default connect(mapStateToProps)(TrackerList);