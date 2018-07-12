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

            <h3>Hello {`${props.firstName} ${props.lastName}`}!</h3>
            <Link 
            to="/board"
            className="menu-item">
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
            className="menu-item">
            <i className="fas fa-chart-bar"></i> &nbsp; &nbsp; Progress Charts
            </Link>
            <Link
            to="/viewjobs" 
            className="menu-item">
            <i className="far fa-eye"></i> &nbsp; &nbsp; View Tracked Jobs
            </Link>
            <br/>
            <Link
            to="/" 
            className="menu-item"
            onClick={executeLogout}>
            Logout &nbsp; <i className="fas fa-sign-out-alt"></i> 

            </Link>

        </ReduxBurgerMenu>
    );
}

export default BurgerMenu;
