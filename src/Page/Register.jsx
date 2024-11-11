import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const handleRegister = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password)
    }
    return (
        <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered rounded-lg"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered rounded-lg"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered rounded-lg"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary rounded-lg">Register</button>
            </div>
          </form>
          <p className="ml-16 mb-8">You have an account? please <Link to='/log-in' className="text-blue-500 underline">log-in</Link> </p>
        </div>
      </div>
    );
};

export default Register;