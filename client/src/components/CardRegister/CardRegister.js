import React, { useState } from 'react'
import Axios from 'axios'
import swal from 'sweetalert';
import ButtonSubmit from '../ButtonSubmit/ButtonSubmit'
import ButtonLink from '../ButtonLink/ButtonLink'
import '../CardLogin/CardLoginRegister.css'

const CardRegister = (props)=>{
const [userName, setUserName] = useState('');
const [userEmail, setUserEmail] = useState('');
const [userPassword, setUserPassword] = useState('');

const [errorName, setErrorName] = useState('');
const [errorEmail, setErrorEmail] = useState('');
const [errorPassword, setErrorPassword] = useState('');

const register = ()=>{
    setErrorName("")
    setErrorEmail("")
    setErrorPassword("")
    Axios.post("http://localhost:3005/users/register",{name: userName, email: userEmail, password:userPassword})
    .then((response)=>{
        if(response.data === "successful"){
            swal('Account created successfully', '', 'success')
            .then((value) => {
                window.location="/"
            });
            
        }else{
            console.log(response.data.errors)
            if(response.data.errors){
                if(response.data.errors.name){
                    setErrorName(response.data.errors.name.msg)
                }
                if(response.data.errors.email){
                    setErrorEmail(response.data.errors.email.msg)
                }
                if(response.data.errors.password){
                    setErrorPassword(response.data.errors.password.msg)
                }
            }

            swal('Something went wrong', "" ,'error')
        }
        
    })
}

return(
    <div className="container-card d-flex justify-content-center align-items-center">
        <div className="card-register">
                <p className="login text-center">{props.name}</p>
                <div className="container-input-register d-flex align-items-center">
                    <input 
                        type="text" 
                        name="name"
                        id="name"
                        placeholder="Name"
                        className="col-11 input-login"
                        onChange={
                            (e)=>{setUserName(e.target.value)}
                        }
                        />
                    <span><i className="bi bi-person-fill login-icon"></i></span>
                </div>
                <span className="msg-input-error">{errorName}</span>
                <div className="container-input-register d-flex align-items-center">
                    <input 
                        type="email" 
                        name="email"
                        id="email"
                        placeholder="Email"
                        className="col-11 input-login"
                        onChange={
                            (e)=>{setUserEmail(e.target.value)}
                        }
                        />
                    <span><i className="bi bi-envelope-fill login-icon"></i></span>
                </div>
                <span className="msg-input-error">{errorEmail}</span>
                <div className="container-input-register d-flex align-items-center">
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="Password"
                        className="col-11 input-login"
                        onChange={
                            (e)=>{setUserPassword(e.target.value)}
                        }
                        />
                    <span>
                        <i className="bi bi-lock-fill login-icon"></i>
                    </span>
                </div>
                <span className="msg-input-error">{errorPassword}</span>
                
                <br/>
                <ButtonSubmit event={register} name="REGISTER" />
                <ButtonLink name="GO BACK" to="/"/>
        </div>
        
    </div>
)
}

export default CardRegister;