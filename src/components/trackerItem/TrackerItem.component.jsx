import { Button } from '../../common/button/Button.component';

import { useEffect, useState } from 'react';

import { removeTracker } from '../../store/tracker/actionCreators';
import { pauseToggle } from '../../store/tracker/actionCreators';
import { modifyTracker } from '../../store/tracker/actionCreators';

import classes from './TrackerItem.module.css';
import { connect } from 'react-redux';

const TrackerItem = ({name, id, paused, date, pauseTime, modifyTracker, removeTracker, pauseToggle}) => {
    if(!paused){
        const timerDate = new Date(date)
        const dateNow = new Date()
        const difference = dateNow - timerDate + pauseTime;
        var initialHours = Math.floor((difference / 3600000) % 60)
        var initialMins = Math.floor((difference / 60000) % 60)
        var initialSec = Math.floor((difference / 1000) % 60)
    }else {
        initialHours = Math.floor((pauseTime / 3600000) % 60)
        initialMins = Math.floor((pauseTime / 60000) % 60)
        initialSec = Math.floor((pauseTime / 1000) % 60)
    }


    const [isPause, setIsPause] = useState(paused);
    const [timer, setTimer] = useState({
        h: initialHours,
        m: initialMins,
        s: initialSec,
    });

    let updatedS = timer.s;
    let updatedM = timer.m;
    let updatedH = timer.h;


    const run = () => {
        if(updatedM === 60){
          updatedH++;
          updatedM = 0;
        }
        if(updatedS === 60){
          updatedM++;
          updatedS = 0;
        }
        updatedS++;
        return setTimer({s:updatedS, m:updatedM, h:updatedH});
    };


    useEffect(() => {
        let interval = null;
        if(!isPause){
            interval = setInterval(run, 1000);
        }else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };

    }, [isPause])



    const onPauseClick = event => {
        if(!isPause){
            const timerDate = new Date(date)
            const dateNow = new Date()
            const difference = dateNow - timerDate;
            modifyTracker({
                id:id,
                pauseTime: pauseTime + difference
            })
        }else{
            modifyTracker({
                id:id,
                date: new Date(),
            })
        }
        setIsPause(prevState => !prevState);
        pauseToggle(id);
    }

    const onRemoveClick = () => {
        removeTracker(id)
    }


    return (
        <li className={`${classes['tracker-item']} ${isPause ? '' : classes.paused}`}>
            <h3 className={classes['item-name']}>{name}</h3>
            <span className={classes['item-timer']}>
                {(timer.h >= 10)? timer.h : "0"+ timer.h}
                :
                {(timer.m >= 10)? timer.m : "0"+ timer.m}
                :
                {(timer.s >= 10)? timer.s : "0"+ timer.s}
            </span>
            <Button className={classes['item-btn']} onClick = {onPauseClick}>
                {
                    isPause
                    ? <span>&#9654;</span>
                    : <span className="material-icons">pause</span>
                }
            </Button>
            <Button className={`${classes['item-btn']} ${classes.red}`} onClick={onRemoveClick}>
                <span className="material-icons">remove</span>
            </Button>
        </li>
    )
}

const mapDispatchToProps = {
    removeTracker,
    pauseToggle,
    modifyTracker,
}

export default connect(null, mapDispatchToProps)(TrackerItem);