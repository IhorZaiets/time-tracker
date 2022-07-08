import { connect } from 'react-redux';
import { useState } from "react";

import { Button } from "../../common/button/Button.component";
import { Input } from "../../common/input/Input.component";

import { addTracker } from '../../store/tracker/actionCreators';

import classes from './TrackerFrom.module.css';

const TrackerForm = ({ addTracker }) => {
    const [trackerName, setTrackerName] = useState('');

    const onHandleSubmit = event => {
        event.preventDefault();
        addTracker(trackerName);
    }

    const onHandleChange = event => {
        setTrackerName(event.target.value)
    }

    return (
        <form className={classes['tracker-form']} onSubmit={onHandleSubmit}>
            <Input value={trackerName} onChange={onHandleChange} type = 'text' placeholder="Enter tracker name" className={classes.input} />
            <Button className={classes.btn}>&#9654;</Button>
        </form>
    )
}

const mapDispatchToProps = {
    addTracker,
}


export default connect(null, mapDispatchToProps)(TrackerForm);