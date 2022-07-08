import { Button } from "../../common/button/Button.component";
import { Input } from "../../common/input/Input.component";

import classes from './TrackerFrom.module.css';

const TrackerForm = () => {
    return (
        <form className={classes['tracker-form']}>
            <Input type = 'text' placeholder="Enter tracker name" className={classes.input} />
            <Button className={classes.btn}>&#9654;</Button>
        </form>
    )
}

export default TrackerForm;