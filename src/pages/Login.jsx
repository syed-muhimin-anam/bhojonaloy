import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import Swal from 'sweetalert2';

const Login = () => {
    const { googleLogin, userLogIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state || '/';
    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        userLogIn(email, password)
            .then(res => {
                console.log(res.user);
                Swal.fire({
                    title: "Successfully loggedIn",
                    icon: "success",
                    draggable: true
                });
                e.target.reset();
                navigate(from)
            })
            .catch(error => {
                Swal.fire({
                    title: error.message,
                    icon: "error",
                    draggable: true
                });

            })

    }
    const handleGoogleLogin = e => {
        e.preventDefault();
        googleLogin()
            .then(res => {
                console.log(res.user);
                Swal.fire({
                    title: "Successfully loggedIn with google",
                    icon: "success",
                    draggable: true
                });
                navigate(from)
            })
            .catch(error => {
                Swal.fire({
                    title: error.message,
                    icon: "error",
                    draggable: true
                });

            })
    }
    return (
        <div className="md:w-8/12 mx-auto mt-[60px] pt-10">
            <h1 className="text-4xl font-bold text-purple-700 text-center my-5">Login</h1>
            <form onSubmit={handleLogin} className="card-body">
                {/* email************************************* */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input name="email" type="email" placeholder="email" className="input input-bordered" required />
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
                    <button className="btn bg-purple-400">Login</button>
                    <h1 className="text-center">or</h1>
                    <button onClick={handleGoogleLogin} className="btn bg-purple-400">Continue With Google</button>
                    <p>Don't have any account? <Link className="underline text-purple-700" to='/register'>Register</Link></p>
                </div>
            </form>
        </div>
    );
};

export default Login;