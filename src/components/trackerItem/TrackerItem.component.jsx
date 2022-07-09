import { Button } from '../../common/button/Button.component';

import { useEffect, useState } from 'react';
import { removeTracker } from '../../store/tracker/actionCreators'


import classes from './TrackerItem.module.css';
import { connect } from 'react-redux';
import Moment from 'react-moment';

const TrackerItem = ({name, id, removeTracker}) => {
    const [isPause, setIsPause] = useState(false);
    const [timer, setTimer] = useState({
        h:0,
        m:0,
        s:0,
    });
    const [interv ,setInterv] = useState();

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

    const start = () => {
        let intervalId = setInterval(run, 100);
        setInterv(intervalId);
    };


    useEffect(() => {
        let interval = null;
        if(!isPause){
            interval = setInterval(run, 100);
        }else {
            clearInterval(interval);
        }
        return () => {
            console.log("cleaning up");
            clearInterval(interval);
        };

    }, [isPause])



    const onPauseClick = event => {
        clearInterval(interv);
        setIsPause(prevState => !prevState);
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
}

export default connect(null, mapDispatchToProps)(TrackerItem);