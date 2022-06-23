import React, { useCallback, useState, useEffect } from 'react';
import Header from "../components/header"
import { auth, db } from '../services/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { setToken } from '../redux/actions';
import { useAuthState } from "react-firebase-hooks/auth";



export default function LoginPage(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter()
    const dispatch = useDispatch()
    const [user, loading] = useAuthState(auth)

    

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            console.log(email,password)     
            const response = await signInWithEmailAndPassword(auth, email, password)
            .then(response)
                console.log(response, '==> response dari login');
            if (response) {
                // alert('Login Success');
                console.log(response.user.accessToken, '==> response success')
                let token = response.user.accessToken

                sessionStorage.setItem('token', token)

                let uid = response.user.uid
                console.log(uid, '===> uid ini ');
                dispatch(setToken(uid))
                router.push('/home-page')
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
                <small id="emailHelp" className="form-text text-muted">We&apos;ll never share your email with anyone else.</small>
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