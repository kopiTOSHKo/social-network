import classes from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const 

Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog + ' ' + classes.active}>
                    <NavLink to='/dialogs/1'> Valera </NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/2'> Sergei </NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/3'> Dmitri </NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/4'> Olga </NavLink>
                </div>
            </div>
            <div className={classes.massages}>
                <div className={classes.massage}>Hi!</div>
                <div className={classes.massage}>My name is...</div>
                <div className={classes.massage}>Where are you from?</div>
            </div>
        </div>
    )
}
export default Dialogs;