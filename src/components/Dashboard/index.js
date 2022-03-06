import React, { useEffect, useState } from 'react'
import styles from './index.module.css';
import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';
import TopHeader from './TopHeader';
import Axios from "axios";
import { useSelector, useDispatch} from 'react-redux';
import { selectUserData } from '../../slice/AuthSlice';
import { setClubs } from '../../slice/ClubSlice';

const Dashboard = () => {
    const self = useSelector(selectUserData);
    const [role, setRole] = useState('');
    const dispatch = useDispatch();

    useEffect( async () =>{

        const resultclub = await Axios.get("http://localhost:3001/get/clubs");
        dispatch(setClubs(resultclub.data.data))

        const resultrole = await Axios.post("http://localhost:3001/verifyrole", {
            email: self.email
        });
        setRole(resultrole.data.role)
    },[])

    return(
        <div  className={`${styles.maincontainer} antialiased`}>
            <TopHeader/>
            { role === 'admin' ? 
            <div className={`${styles.container}`}>
                <div className={`${styles.sidebar} flex flex-col`}>  
                    <SideBar/>
                </div>
                <div className={`${styles.contentcontainer}`}>
                    <Outlet/>
                </div>
                <div className={`${styles.eventscontainer}`}>
                    
                </div>
            </div>
            :
            <div>
                Not an Admid, please go back!
            </div>
            }
            
        </div>
    )
}

export default Dashboard;