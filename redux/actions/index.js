import React from 'react';
import { auth, db } from '../../services/firebase'
import { ref, get, child } from "firebase/database";


export function setToken(uid) {
    try {
        console.log(uid, '==> uid dari set token');
        return (dispatch, getState) => {
            get(child(ref(db), `users/${uid}`))
            .then((snapshot) => {
                    const getUser = snapshot.val()
                    if (snapshot.exists()) {
                        console.log(getUser.username,'==> snapshot masuk if');
                dispatch({
                    type: 'SET_USERNAME',
                    payload: getUser.username
                })
                dispatch({
                    type: 'SET_SCORE',
                    payload: getUser.total_score
                })
                    } else {
                        console.log("No data available");
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
                    // router.push('/home-page')              
        }
    }         
    catch (err) {
        console.log(err);
        alert(err.message)
    }
}
