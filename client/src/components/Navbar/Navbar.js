import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import { useHistory } from 'react-router-dom';

const Navbar = (props)=>{
const history = useHistory()
const logOut = () =>{
    window.localStorage.clear()
    history.push('/')
}
const [userName, setUserName]= useState('')

useEffect(() => {
    setUserName(window.localStorage.getItem('user'))
}, [])
return(
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
                                <Link className="nav-link" aria-current="page" to="/home">Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/income">Income</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/expenses">Expenses</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/category/income">Category Income</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/category/expenses">Category Expenses</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/account">My Account</Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
                {/* user name */}
                <div className="dropdown">
                    <button className="btn user-name" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        {userName}
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><Link className="dropdown-item" to="/account">My account</Link></li>
                        <li><button onClick={logOut} className="dropdown-item">Log out</button></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
)}

export default Navbar;