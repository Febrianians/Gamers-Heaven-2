import React, { useState, useEffect } from 'react';
import Header from "../components/header"
import { auth, db } from '../services/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function LoginPage(props) {
    // let navigate = useNavigate()
    const {handleProps} = props
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            console.log(email,password)     
            const response = await signInWithEmailAndPassword(auth, email, password);
                console.log(response);
            if (response) {
                alert('Login Success');
                // <Link to={{
                //     pathname: "/",
                //     state: response // your data array of objects
                // }}
                // />
                // navigate('/home') 
            }
                
                } catch (err) {
                  console.error(err);
                  alert(err.message);
                }
        }

    return(
        
    <>
        <Header title="Login"/>
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <form onSubmit={handleSubmit}>
                <div className="form-group text-left">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" 
                       className="form-control" 
                       id="email" 
                       aria-describedby="emailHelp" 
                       placeholder="Enter email"
                       onChange={e=>{setEmail(e.target.value)}}
                />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password"
                        onChange={e=>{setPassword(e.target.value)}}
                    />
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary"
                >
                    Submit
                </button>
            </form>
        </div>
        </>
    )
}