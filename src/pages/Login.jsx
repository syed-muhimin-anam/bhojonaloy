import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Login = () => {
    const {googleLogin, userLogIn} = useContext(AuthContext);
    const navigate = useNavigate()
    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        userLogIn(email, password)
        .then(res => {
            console.log(res.user);
            navigate('/')
        })
        .catch(error => {
            console.log(error.message);
            
        })
        
    }
    const handleGoogleLogin = e => {
        e.preventDefault();
        googleLogin()
        .then(res => {
            console.log(res.user);
            navigate('/')
        })
        .catch(error => {
            console.log(error.message);
            
        })
    }
    return (
        <div className="md:w-8/12 mx-auto">
            <h1 className="text-2xl font-bold text-center my-5">Login</h1>
                <form onSubmit={handleLogin}  className="card-body">
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
                        <button className="btn btn-primary">Login</button>
                        <h1 className="text-center">or</h1>
                        <button onClick={handleGoogleLogin} className="btn btn-primary">Continue With Google</button>
                        <p>Don't have any account? <Link className="underline text-blue-500" to='/register'>Register</Link></p>
                    </div>
                </form>
        </div>
    );
};

export default Login;