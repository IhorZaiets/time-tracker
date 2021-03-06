
import React from 'react';

import { connect } from 'react-redux';
import { useState } from "react";

import { Button } from "../../common/button/Button.component.jsx";
import { Input } from "../../common/input/Input.component.jsx";

import { addTracker } from '../../store/tracker/actionCreators.js';

import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

import classes from './TrackerFrom.module.css';

const TrackerForm = ({ addTracker }) => {
    const [trackerName, setTrackerName] = useState('');

    const onHandleSubmit = event => {
        event.preventDefault();
        addTracker({
            name: trackerName === '' ? moment(new Date()).format("DD-MM-YYYY(hh:mm)") : trackerName,
            id: uuidv4(),
            date: new Date(),
            paused: false,
            pauseTime: 0,
        });
        setTrackerName('')
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