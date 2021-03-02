import React from 'react'
import './ButtonSubmit.css'

const ButtonSubmit = (props)=>
(
    <button type="submit" className="col-12 button-submit">{props.name}</button>
)

export default ButtonSubmit;