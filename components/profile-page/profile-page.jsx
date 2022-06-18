import { useState, useEffect } from 'react';
import Header from '../header'
import {auth,db} from "../../services/firebase"
import { ref, onValue, get, child, set } from 'firebase/database';
import { useAuthState} from "react-firebase-hooks/auth"

// const [userData, setUserData] = useState('')


export default function ProfilePageComponent() {

    function fetchUserData() {
        let showData = ''
        // const dbRef = ref(getDatabase());
        get(child(ref(db), `users/${user.uid}`))
          .then((snapshot) => {
            if (snapshot.exists()) {
              console.log(snapshot.val(), '==> snapshot');
              setUserData(snapshot.val());
              showData = snapshot.val()
              console.log(showData, '==> ini show data');
              console.log(setUserData, '==> set userdata');
              console.log(userData, '==> ini userData');
            } else {
              console.log("No data available");
            }
          })
          .catch((error) => {
            console.error(error);
          });
      }
    
      useEffect(() => {
        fetchUserData()
      },[])
    

    return (
        <>
        <div className="profilePage">
            <Header title='Profile Page'/>
             <div className="wrapper">
                <div className="card">
                    <div className="cardTitle">
                        <div className="profilePicture">
                            <div className="image"></div>
                        </div>
                       
                    </div>
                    <div className="cardContent">
                        <div className="username">
                             <div><h3>User #1</h3></div>
                        </div>
                        <div className="email">
                            <h3>Email</h3>
                            <h6>Test@mail.com</h6>
                        </div>
                        <div className="gamePlayed">
                            <div className="game">
                                <h3>Game Played</h3>
                            </div>
                            <div className="playedGame">
                                <h6>- Rock Paper Scissors : High Score (30pts)</h6>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}