import React, { Component } from 'react'
import moneyTransfer from '../image/money-transfer-mobile-banking.jpg' 
import './Welcome.css'
import {Link} from 'react-router-dom'

class Welcome extends Component {
    render() {
        return (
            <div style={{ backgroundImage: `url(${moneyTransfer})`}} className="landing">
                <div className="light-overlay landing-inner text-dark">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1 className="display-3 mb-4">Personal Expense Manager</h1>
                                <p className="lead">
                                    Create your account to manage your daily expenses
                        </p>
                                <hr />
                                {/* <a href="register.html" className="btn btn-lg btn-primary mr-2">
                                    Sign Up
                        </a> */}

                            <Link className="navbar-brand" to="/sign-up">
                                    signup
                            </Link>
                                <Link className="navbar-brand" to="/login">
                                        signin   
                                </Link>
                                {/* <a href="login.html" className="btn btn-lg btn-secondary mr-2">
                                    Login
                        </a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Welcome
