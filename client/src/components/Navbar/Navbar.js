import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = (props)=>
(
    <div className="p-0">
        <div className="row navbar">
            <div className="col-12 col-md-4 col-lg-3 col-xl-2 page-name d-flex justify-content-center align-items-center">
                {props.pageName}
            </div>

            <div className="col-12 col-md-8 col-lg-9 col-xl-10 d-flex justify-content-between user-name-content">
                {/* burger BTN */}
                <nav className="navbar-light d-block d-md-none ">
                    <div className="">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Dashboard</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Income</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Expenses</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Category Income</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Category Expenses</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">My Account</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
                {/* user name */}
                <div className="dropdown">
                    <button className="btn user-name" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        {props.userName}
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" href="#">My account</a></li>
                        <li><a className="dropdown-item" href="#">Log out</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
)

export default Navbar;