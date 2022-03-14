import React, { useEffect, useState } from 'react';
import {
  Routes as Switch,
  Route,
  useNavigate
} from "react-router-dom";
import Axios from 'axios';
import { useSelector, useDispatch} from 'react-redux';
import { selectAuth, setAuth, setUserData, selectUserData } from './slice/AuthSlice';
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Personnel from './components/Dashboard/Personnel'
import ProtectedRoutes from './ProtectedRoutes'
import PageNotFound from './components/PageNotFound';
import { GoogleLogin } from 'react-google-login';
import { GoogleLogout } from 'react-google-login';
import Clubs from './components/Dashboard/Clubs';
import SchoolYear from './components/Dashboard/SchoolYear';
import Students from './components/Dashboard/Students';
import Statistics from './components/Dashboard/Statistics';

const clientId = process.env.REACT_APP_CLIENT_ID;


const App = () => {
  const isAuth = useSelector(selectAuth);
  const user = useSelector(selectUserData);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSuccess = async (res) => {
    const result = await Axios.post("http://localhost:3001/verify", {
      token: res.tokenId,
    });
    dispatch(setUserData(result.data.googleData))
    if(result.data.isAuth){
      dispatch(setAuth(true));
      navigate("/dashboard");
    }
  }


  useEffect(() =>{
  },[])

  return(
    <React.Fragment>
      <GoogleLogin 
        clientId={clientId}
        render={()=>{
            return(
                <></>
            )
        }}
        onSuccess={onSuccess}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />

      <Switch>
        {!isAuth ?
        <React.Fragment>
          <Route path="/login" element={<Login clientId={clientId}/>}/>
          <Route path="/" element={<Login clientId={clientId}/>}/>
        </React.Fragment>
          :
        <>
          <Route path="/" element={<ProtectedRoutes isLoggedIn={isAuth}/>}>
            <Route path="dashboard" element={<Dashboard/>}>
              <Route path="personnel" element={<Personnel/>}/>
              <Route path="students" element={<Students/>}/>
              <Route path="clubs" element={<Clubs/>}/>
              <Route path="statistics" element={<Statistics/>}/>
              <Route path="schoolyear" element={<SchoolYear/>}/>
            </Route>
          </Route>
          <Route path="*" element={<PageNotFound/>}/>
        </>
        }
        
      </Switch>
    </React.Fragment>
  )
}

export default App;
