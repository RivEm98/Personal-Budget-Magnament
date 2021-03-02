import React from 'react'
import './ButtonLink.css'

const ButtonLink = (props)=>
(
    <a href={props.to}><button className="col-12 button-link">{props.name}</button></a>
)

export default ButtonLink;