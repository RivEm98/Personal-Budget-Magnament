import React from 'react'
import ButtonSubmit from '../ButtonSubmit/ButtonSubmit'
import ButtonLink from '../ButtonLink/ButtonLink'
import '../CardLogin/CardLoginRegister.css'

const CardRegister = (props)=>
(
    <div className="container-card d-flex justify-content-center align-items-center">
        <div class="card-login">
            <form>
                <p className="login text-center">{props.name}</p>
                <div class="container-input d-flex align-items-center">
                    <input 
                        type="text" 
                        name="name"
                        id="name"
                        placeholder="Name"
                        className="col-11 input-login"
                        />
                    <span><i className="bi bi-person-fill login-icon"></i></span>
                </div>
                <div class="container-input d-flex align-items-center">
                    <input 
                        type="email" 
                        name="email"
                        id="email"
                        placeholder="Email"
                        className="col-11 input-login"
                        />
                    <span><i className="bi bi-envelope-fill login-icon"></i></span>
                </div>
                <div className="container-input d-flex align-items-center">
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="Password"
                        className="col-11 input-login"
                        />
                    <span>
                        <i class="bi bi-lock-fill login-icon"></i>
                    </span>
                </div>
                
                <br/>
                <ButtonSubmit name="REGISTER" />
            </form>
                <ButtonLink name="GO BACK" to="/"/>
        </div>
        
    </div>
)

export default CardRegister;