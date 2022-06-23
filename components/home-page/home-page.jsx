import Header from "../headerLogin"
import { Button } from 'reactstrap'
import { useEffect } from 'react'
import { auth, db } from "../../services/firebase";
import { getDatabase, ref, get, child, onValue } from "firebase/database";
import { useAuthState } from "react-firebase-hooks/auth";
import { useState } from "react";
import Link from "next/link";


export default function HomePageComponent() {

    const [user, loading] = useAuthState(auth);
    const [userData, setUserData] = useState({})

    function fetchUserdata() {
          

        get(child(ref(db), `users/${user.uid}`))
          .then((snapshot) => {
            if (snapshot.exists()) {
              console.log(snapshot.val(), '==> user di home-page');
              setUserData(snapshot.val());
              console.log(userData, "===> ini user")
            } else {
              console.log("No data available");
            }
          })
          .catch((error) => {
            console.error(error);
          });
      }
    
      useEffect(() => {
        if (loading) return;
        fetchUserdata();
      }, []);


  return(
    <>
      <div className='homePage'>
      <Header title='Home Page' />
        <div className="wrapper">
          <div className='bodySection'>
            <h1>Welcome {userData ? userData.username : ""} the Home Page</h1>
          </div>
          <div>
            <Link href="/game-list">
              <button className="btn mt-3" size="lg">
                  PLAY NOW
              </button>
            </Link>
            </div>
        </div>
      </div>    
    </>
  )
}