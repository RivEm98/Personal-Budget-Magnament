import React from 'react'
import {Link} from 'react-router-dom'
import './buttonSidebar.css'

const ButtonSidebar = (props)=>{
return(
    <Link to={props.to} className="link-sidebar"><li className="button-sidebar" id="btn-sidebar"><i className={props.icon}></i>  {props.name}</li></Link>
)}

export default ButtonSidebar;
