import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AboutUs from './AboutUs';
import Main from './Main';
export default class Header extends Component {
    render() {
        return (
            <Router>
                <div className='header'> 
                    <div className="header__inner">
                        <div className="header__item">
                            <Link to='/' className="header__logo"><span className='highlighter'>md5</span> crypto</Link>
                        </div>
                        <div className="header__item">
                            <Link to='/aboutus' className="header__link">About Us</Link>
                            <a href="https://github.com/antoniocra04/md5Crypto" target='blank' className="header__btn">Source code</a>
                        </div>
                    </div>
                </div>
                <Switch>
                    <Route path='/aboutus'>
                        <AboutUs></AboutUs>
                    </Route>
                    <Route path='/'>
                        <Main></Main>
                    </Route>
                </Switch>
            </Router>
        )
    }
}
