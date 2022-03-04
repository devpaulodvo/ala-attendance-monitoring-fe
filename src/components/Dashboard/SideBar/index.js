import React, { useEffect } from 'react';
import styles from './index.module.css';
import {
    Link
  } from "react-router-dom";

const SideBar = () => {

    useEffect(() =>{
        
    },[])

    return(
        <React.Fragment>
            <div className={`flex flex-col`}>
                <Link className={`${styles.linkcontainer}`} to="personnel">Personnel</Link>
                <Link className={`${styles.linkcontainer}`} to="students">Students</Link>
                <Link className={`${styles.linkcontainer}`} to="clubs">Clubs</Link>
                <Link className={`${styles.linkcontainer}`} to="statistics">Statistics</Link>
                <Link className={`${styles.linkcontainer}`} to="schoolyear">School Year</Link>
                <div className={`w-11/12 flex flex-col border-b border-gray-400 ml-3 pb-3`}/>
            </div>
        </React.Fragment>
    )
}

export default SideBar;