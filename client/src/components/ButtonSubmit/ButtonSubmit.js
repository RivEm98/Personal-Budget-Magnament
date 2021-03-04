import React from 'react'
import './ButtonSubmit.css'

const ButtonSubmit = (props)=>
(
    <button onClick={props.event} className="col-12 button-submit">{props.name}</button>
)

export default ButtonSubmit;