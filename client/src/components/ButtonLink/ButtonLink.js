import React from 'react'
import {Link} from 'react-router-dom'
import './ButtonLink.css'

const ButtonLink = (props)=>
(
    <Link to={props.to}><button className="col-12 button-link">{props.name}</button></Link>
)

export default ButtonLink;