import React, { useEffect } from 'react';
import GoogleLogoutHelper from '../../../helpers/GoogleLogoutHelper';
import styles from './index.module.css';
import  UserDetail from '../../../promises/UserDetailPromise';

const TopHeader = () => {
    const user = UserDetail();
    useEffect(() =>{
        
    }, [])

    return(
        <div className={`${styles.container} flex flex-row justify-between gap-x-4`}>
            <div className={`flex justify-self-start items-center gap-x-3`}>
                <img className={`w-8 h-8 rounded-full`} src={user.picture} alt="profile"/>
                <p>{user.name}</p>
            </div>
            <div className={`flex flex-row justify-end gap-x-4`}>
            <div className={`${styles.logoutbtn} flex items-center`}>
                <GoogleLogoutHelper/>
            </div>
            </div>
        </div>
    )
}

export default TopHeader;