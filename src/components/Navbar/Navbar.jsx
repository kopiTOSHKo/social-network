import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <ul>
                <li className={classes.item}>
                    <NavLink to="/profile" className={navData=>navData.isActive? classes.activeLink: classes.item}>Profile</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to="/dialogs" className={navData=>navData.isActive? classes.activeLink: classes.item}>Messages</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to="/news" className={navData=>navData.isActive? classes.activeLink: classes.item}>News</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to="/music" className={navData=>navData.isActive? classes.activeLink: classes.item}>Music</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to="/settings" className={navData=>navData.isActive? classes.activeLink: classes.item}>Settings</NavLink>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar;