import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const host = "http://localhost:5000";

const Login = () => {

    const [credentials, setCredentials] = useState({ email: "", password: "" });
    let navigate = useNavigate();   //react-router-dom useNavigate hook to redirect to pages

    const handleLoginBtn = async (e) => {
        e.preventDefault();
        //api call to login
        const response = await fetch(`${host}/api/auth/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        let json = await response.json();
        if (json.success) {
            //if login success then save the auth token and redirect
            localStorage.setItem('authtoken', json.authtoken);
            navigate('/', { replace: true });     //navigate to '/', replace true replaces the page with specified one, it means we can not go back to login page
        }
        else alert("invlid cre")
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <div>
            {/* login form */}
            <form onSubmit={handleLoginBtn}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" name="email" className="form-control" id="email" onChange={onChange} value={credentials.email} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" name="password" className="form-control" id="password" onChange={onChange} value={credentials.password} />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    )
}

export default Login