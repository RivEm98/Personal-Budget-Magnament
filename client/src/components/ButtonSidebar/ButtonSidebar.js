import React from 'react'
import {Link} from 'react-router-dom'
import './buttonSidebar.css'

const ButtonSidebar = (props)=>
(
    <Link to={props.to} class="link-sidebar"><li className="button-sidebar"><i class={props.icon}></i>  {props.name}</li></Link>
)

export default ButtonSidebar;
