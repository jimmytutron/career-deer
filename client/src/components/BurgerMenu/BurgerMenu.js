import React from 'react';
import ReduxBurgerMenu from './Menu';
import { Link } from "react-router-dom";
import './BurgerMenu.css';
import { logOut } from '../../utils/API'


const BurgerMenu = (props) => {
    const executeLogout = async () => {
        // await props.logoutaction();
        await logOut();
        window.location.pathname="/";
    }

    return (
        <ReduxBurgerMenu>
            <img width="50px" className="text-center my-3" src="/imgs/logo-white.svg" alt="menu logo"/>

            <h3 className="pb-0">Hello {`${props.firstName} ${props.lastName}`}!</h3>
            <Link 
            to="/board"
            className="menu-item font-weight-bold mt-5 mb-3">
            <i className="fab fa-trello"></i> &nbsp; &nbsp; Job Tracker Board
            </Link>
            <Link 
            to="/addjob"
            className="menu-item">
            <i className="fas fa-plus-circle"></i> &nbsp; &nbsp; Track new Job
            </Link>
            <Link 
            to="/search"
            className="menu-item">
            <i className="fas fa-search"></i> &nbsp; &nbsp; Search for Jobs</Link>
            <Link 
            to="/chart"
            className="menu-item mb-3">
            <i className="fas fa-chart-bar"></i> &nbsp; &nbsp; Progress Charts
            </Link>
            <Link
            to="/" 
            className="menu-item mt-5"
            onClick={executeLogout}>
            <i className="fas fa-sign-out-alt"></i> &nbsp; &nbsp; Logout 

            </Link>

        </ReduxBurgerMenu>
    );
}

export default BurgerMenu;
