import TrackerItem from "../trackerItem/TrackerItem.component";
import { fetchTrackers } from "../../store/tracker/actionCreators";

import classes from './TrackerList.module.css';

import { connect } from "react-redux";
import { useEffect } from "react";

const TrackerList = ({ trackers, fetchTrackers }) => {

    useEffect(() => {
        fetchTrackers()
        if(localStorage.getItem('trackers')){
        }
    }, [])

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

const mapDispatchToProps = {
    fetchTrackers,
}

export default connect(mapStateToProps, mapDispatchToProps)(TrackerList);