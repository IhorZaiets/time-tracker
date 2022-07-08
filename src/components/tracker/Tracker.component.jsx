import React from "react"
import TrackerForm from "../trackerForm/TrackerForm.component";

import classes from './Tracker.module.css'

const Tracker = () => {
    return (
        <div className={classes.tracker}>
            <h1 className={classes['main-header']}>Tracker</h1>
            <TrackerForm />
        </div>
    )
}

export default Tracker;