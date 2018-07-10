import React from 'react';
import ReduxBurgerMenu from './Menu';
import './BurgerMenu.css';

class BurgerMenu extends React.Component {

    render () {
        return (
            <ReduxBurgerMenu isOpen={ this.props.isOpen }>
            	<img width="50px" className="text-center my-3" src="/imgs/logo-white.svg" alt="menu logo"/>
                <a id="home" className="menu-item" href="/">Home</a>
                <a id="add" className="menu-item" href="/addjob">Add a Job</a>
                <a id="search" className="menu-item" href="/search">Search for Jobs</a>
                <a id="view" className="menu-item" href="/viewjobs">Tracked Jobs</a>
                <a id="board" className="menu-item" href="/board">Tracker Board</a>
                <a id="charts" className="menu-item" href="/chart">View Charts</a>
                <br/>
                <a id="logout" className="menu-item" href="/">Logout</a>

            </ReduxBurgerMenu>
        );
    }
}

export default BurgerMenu;