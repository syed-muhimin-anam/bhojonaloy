import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import Swal from 'sweetalert2';

const Register = () => {
    const {createUser, updateUserProfile} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state || '/';

    const handleCreateUser = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
       
        if (passwordRegex.test(password)) {
            createUser(email, password)
        .then(res => {
            updateUserProfile({ displayName: name, photoURL: photo })
            Swal.fire({
                title: "Successfully Registered",
                icon: "success",
                draggable: true
              });
            e.target.reset();
            navigate(from);
            
        })
        .catch(error => {
            Swal.fire({
                title:error.message,
                icon: "error",
                draggable: true
              });
            
        })
        }
        else{
            Swal.fire({
                title:'  Please contain at least one uppercase, one lowercase one number and 6 char long',
                icon: "error",
                draggable: true
              });
        }
        
        
        
    }
    return (
        <div className="md:w-8/12 mx-auto mt-[60px] pt-10">
        <h1 className="text-4xl text-purple-700 font-bold text-center my-2">Register</h1>
            <form onSubmit={handleCreateUser}  className="card-body">
                {/* name************************************* */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input name="name" type="text" placeholder="name" className="input input-bordered" required />
                </div>
                {/* email************************************* */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                </div>
                {/* photo************************************* */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input name="photo" type="url" placeholder="photo url" className="input input-bordered" required />
                </div>
                {/* password************************************* */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-purple-400">Register</button>
                    {/* <h1 className="text-center">or</h1>
                    <button onClick={handleGoogle} className="btn btn-primary">Continue With Google</button> */}
                    <p>Don't have any account? <Link className="underline text-purple-700" to='/login'>Login</Link></p>
                </div>
            </form>
    </div>
    );
};

export default Register;