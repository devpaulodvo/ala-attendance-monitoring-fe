import React, { useEffect, useState } from 'react';
import styles from './index.module.css';
import { useFormik } from 'formik';
import { GoogleLogin } from 'react-google-login';
import { GoogleLogout } from 'react-google-login';
import Axios from 'axios';
import { useDispatch} from 'react-redux';
import { setAuth, setUserData } from '../../slice/AuthSlice';
import {useNavigate
} from "react-router-dom";

import TextBox from '../../UI/TextBox';

const Login = ({clientId}) => {
    
    useEffect(() =>{
        
    },[])

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onSuccess = async (res) => {
        const result = await Axios.post("http://localhost:3001/auth", {
            token: res.tokenId,
        });
        if(result.data.isAuth){
            dispatch(setAuth(true));
            dispatch(setUserData(result.data.googleData))
            navigate("/dashboard");
        }
      }
    
    const onFailure = (res) => {
        console.log("[Login Failed] res: ", res);
    }

    const formik = useFormik({
        initialValues: {
          username: '',
          password: ''
        },
        onSubmit: values => {
          
        },
      });

    return(
        <div className={`${styles.container} font-mono`}>
            <div className={`${styles.loginContainer} flex-col m-auto bg-white rounded-lg justify-center`}>
                <form className={` ${styles.formContainer} flex-col space-y-8`}>
                    <TextBox label="Username" id={"username"} type={"text"} placeholder="Username"/>
                    <TextBox label="Password" id={"password"} type={"password"} placeholder="Password"/>
                </form>
                <div className={`flex mt-4 justify-end`}>
                    <p className={`inline cursor-pointer duration-300 hover:text-sky-500`}>Forgot Password</p>
                </div>
                <p className={`text-center mt-8`}>OR</p>
                <div>
                    <GoogleLogin 
                        clientId={clientId}
                        render={renderProps=>{
                            return(
                                <button className={styles.googleButton} onClick={renderProps.onClick} disabled={renderProps.disabled}>
                                    Sign in using Google Account
                                </button>
                            )
                        }}
                        buttonText="Sign In using Google Account"
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        style={{marginTop: '50px'}}
                        isSignedIn={true}
                    />
                </div>
            </div>
        </div>
    )
}

export default Login;