import React from 'react';
import ReduxBurgerMenu from './Menu';
import { Link } from "react-router-dom";
import { logOut } from "../../utils/API"
import './BurgerMenu.css';

const BurgerMenu = (props) => {
    const executeLogout = () => {
        logOut();
        props.logoutaction();
    }
    return (
        <ReduxBurgerMenu>
            <img width="50px" className="text-center my-3" src="/imgs/logo-white.svg" alt="menu logo"/>

            <h3>Hello [USERNAME]!</h3>
            <a
            href="/"
            className="menu-item">
            Home
            </a>
            <Link 
            to="/addjob"
            className="menu-item">
            Add a Job
            </Link>
            <Link 
            to="/search"
            className="menu-item">
            Search for Jobs</Link>
            <Link
            to="/viewjobs" 
            className="menu-item">
            Tracked Jobs
            </Link>
            <Link 
            to="/board"
            className="menu-item">
            Tracker Board
            </Link>
            <Link 
            to="/chart"
            className="menu-item">
            View Charts
            </Link>
            <br/>
            <Link
            to="/" 
            className="menu-item"
            onClick={executeLogout}>
            Logout

            </Link>

        </ReduxBurgerMenu>
    );
}

export default BurgerMenu;
