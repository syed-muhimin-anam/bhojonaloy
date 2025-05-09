import {
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithEmailAndPassword,
    updateProfile,
} from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init';
import AuthContext from './AuthContext';
import axios from 'axios';



const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    

    // Create user with email and password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };



    // Logout
    const logout = () => {
        setLoading(true);
        return signOut(auth);
    };
    // login with email and password
    const userLogIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Google Sign-in
    const googleLogin = () => {
        setLoading(true);
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    };
    // Update user profile
    const updateUserProfile = (updatedData) => {
        setLoading(true);
        return updateProfile(auth.currentUser, updatedData);
    };

    // observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            if (currentUser?.email) {
                const user = {email: currentUser.email};
                axios.post('https://bhojonaloy-restaurant-server.vercel.app/jwt', user, {withCredentials: true})
                .then(res => {
                    // console.log(res.data)
                    setLoading(false);
                }) 
            }
            else{
                axios.post('https://bhojonaloy-restaurant-server.vercel.app/logout', {}, {withCredentials: true})
                .then(res => {
                    // console.log("logout",res.data )
                    setLoading(false);
                }) 
            }
        });

        return () => unsubscribe();
    }, []);

    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        logout,
        googleLogin,
        userLogIn,
        updateUserProfile,
        
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;
