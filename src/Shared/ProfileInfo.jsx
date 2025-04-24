import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const ProfileInfo = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        Swal.fire({
            title: "Logged out successfully!",
            icon: "success",
            confirmButtonText: "OK"
        });
        navigate('/');
    };

    return (
        <div className=" flex items-center justify-center pt-16 bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm text-center">
                <img
                    src={user?.photoURL || 'https://i.ibb.co/MBtjqXQ/no-avatar.gif'}
                    alt="User"
                    className="w-24 h-24 rounded-full mx-auto object-cover shadow mb-4"
                />
                <h2 className="text-xl font-bold text-purple-700">{user?.displayName || "No name available"}</h2>
                <p className="text-sm text-gray-600 mt-1">{user?.email}</p>

                <button
                    onClick={handleLogout}
                    className="btn bg-purple-500 hover:bg-purple-600 text-white w-full mt-6"
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default ProfileInfo;
