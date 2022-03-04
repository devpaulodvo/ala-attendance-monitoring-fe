import React, { useEffect } from 'react';
import styles from './index.module.css';
import { GoogleLogout } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { setAuth } from '../../slice/AuthSlice';
import {
    useNavigate
  } from "react-router-dom";

const clientId = process.env.REACT_APP_CLIENT_ID;

const GoogleLogoutHelper = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogoutSuccess = (res) => {
    // GoogleAuth.disconnect();
    dispatch(setAuth(false))
    navigate("/")
  }
  const logout = () => {
      onLogoutSuccess()
  }
  
  return (
    <GoogleLogout
      clientId={clientId}
      render={(renderProps=>{
          return(
              <div className={`${styles.googleButton} w-full text-center`} onClick={renderProps.onClick} disabled={renderProps.disabled}>
                  Logout
              </div>
          )
      })}
      buttonText="Logout"
      onLogoutSuccess={logout}
    />
  )
}

export default GoogleLogoutHelper;