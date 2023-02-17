import classes from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog + ' ' + classes.active}>
                    Valera
                </div>
                <div className={classes.dialog}>
                    Sergei
                </div>
                <div className={classes.dialog}>
                    Dmitri
                </div>
                <div className={classes.dialog}>
                    Olga
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