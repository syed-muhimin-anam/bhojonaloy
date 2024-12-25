import React, { Children, useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRout = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <h1>loading....</h1>
    }
    if (user) {
        return children
    }
    return <Navigate to={'/login'} state={location?.pathname}></Navigate>
};

export default PrivateRout;