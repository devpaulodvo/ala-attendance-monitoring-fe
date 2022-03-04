import React from 'react';
import { Navigate, useLocation, Outlet } from 'react-router-dom';

const ProtectedRoutes = ({isLoggedIn, ...props}) => {
    const location = useLocation()
    
    return(
        isLoggedIn ? (
            <Outlet/>
        ) : (
            <Navigate to={
                {
                    pathname: `/login`,
                    state: { location },
                }
            }
            />
        )
    )
}

export default ProtectedRoutes;