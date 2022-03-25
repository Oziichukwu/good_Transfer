import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-1">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        Expense Manager
            </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse" id="mobile-nav">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="navbar-brand" to="/dashboard">
                                    Dashboard
                        </Link>
                            </li>
                        </ul>

                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                            <Link className="navbar-brand" to="/sign-up">
                                signup
                            </Link>
                            </li>

                            <li className="">

                            <Link className="navbar-brand" to="/login">
                                signin
                            </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Nav;
