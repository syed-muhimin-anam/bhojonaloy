import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="md:w-8/12 mx-auto">
        <h1 className="text-2xl font-bold text-center my-5">Register</h1>
            <form  className="card-body">
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
                    <button className="btn btn-primary">Register</button>
                    {/* <h1 className="text-center">or</h1>
                    <button onClick={handleGoogle} className="btn btn-primary">Continue With Google</button> */}
                    <p>Don't have any account? <Link className="underline text-blue-500" to='/login'>Login</Link></p>
                </div>
            </form>
    </div>
    );
};

export default Register;