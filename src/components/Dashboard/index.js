import React from 'react'; 
import styles from './index.module.css';
import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';
import TopHeader from './TopHeader';

const Dashboard = () => {
    
    return(
        <div  className={`${styles.maincontainer} antialiased`}>
            <TopHeader/>
            <div className={`${styles.container}`}>
                <div className={`${styles.sidebar} flex flex-col`}>  
                    <SideBar/>
                </div>
                <div className={`${styles.contentcontainer}`}>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;