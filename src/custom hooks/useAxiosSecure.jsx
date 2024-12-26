import axios from "axios";
import { useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
})

const useAxiosSecure = () => {
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate()
    useEffect(() => {
        axiosInstance.interceptors.response.use(response => {
            return response;
        }, error => {
            if (error.status === 401 || error.status === 403) {
                logout()
                    .then(() => {
                        Swal.fire({
                            title: 'logged out for unauthorized access',
                            icon: "error",
                            draggable: true
                        });
                        navigate('/login')
                    })
                    .catch(error => {
                        
                        console.log(error.message);
                    })
            }
            return Promise.reject(error);
        })
    }, [])
    return axiosInstance;
};

export default useAxiosSecure;