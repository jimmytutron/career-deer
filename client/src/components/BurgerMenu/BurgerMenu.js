import React from 'react';
import ReduxBurgerMenu from './Menu';
import './BurgerMenu.css';

class BurgerMenu extends React.Component {

    render () {
        return (
            <ReduxBurgerMenu isOpen={ this.props.isOpen }>
            	<img width="50px" className="text-center my-3" src="/imgs/logo-white.svg" />
                <a id="home" className="menu-item" href="/">Home</a>
                <a id="about" className="menu-item" href="/addjob">Add a Job</a>
                <a id="contact" className="menu-item" href="/search">Search for Jobs</a>
                <a id="contact" className="menu-item" href="/chart">View Charts</a>
                <br/>
                <a id="contact" className="menu-item" href="/">Logout</a>

            </ReduxBurgerMenu>
        );
    }
}

export default BurgerMenu;