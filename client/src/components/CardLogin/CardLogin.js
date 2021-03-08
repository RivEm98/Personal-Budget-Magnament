import React, { useState } from 'react';
import ButtonSubmit from '../ButtonSubmit/ButtonSubmit';
import ButtonLink from '../ButtonLink/ButtonLink';
import Axios from 'axios';
import swal from 'sweetalert';
import './CardLoginRegister.css';
import { useHistory } from 'react-router-dom';

const CardLogin = (props)=>{
    const history = useHistory()
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');

    const login = ()=>{
        setErrorEmail("")
        setErrorPassword("")
        Axios.post("http://localhost:3005/users/login",{email: userEmail, password:userPassword})
        .then((response)=>{
            if(response.data.data){
                swal('Welcome', response.data.data.name, 'success')
                .then((value) => {
                    /* window.location="/home" */
                    history.push('/home')
                    window.localStorage.setItem("user", response.data.data.name)
                });

            }else{
                console.log(response.data.errors)
                if(response.data.errors){
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
        <div className="card-login">
                <p className="login text-center">{props.name}</p>
                <div className="container-input d-flex align-items-center">
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
                <div className="container-input d-flex align-items-center">
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
                <ButtonSubmit event={login} name="LOG IN" />
                <ButtonLink name="REGISTER" to="/register"/>
        </div>

    </div>
)}

export default CardLogin;