import React from "react"
import TrackerForm from "../trackerForm/TrackerForm.component";
import TrackerList from "../trackerList/TrackerList.component";

import classes from './Tracker.module.css'

const Tracker = () => {
    return (
        <main className={classes.tracker}>
            <h1 className={classes['main-header']}>Tracker</h1>
            <TrackerForm />
            <TrackerList />
        </main>
    )
}

export default Tracker;