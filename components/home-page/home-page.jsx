import Header from "../headerLogin"
import { useEffect } from 'react'
import { auth, db } from "../../services/firebase";
import { ref, get, child } from "firebase/database";
import { useAuthState } from "react-firebase-hooks/auth";


export default function HomePageComponent() {

    const [user, loading] = useAuthState(auth);


    function fetchUserdata() {
        get(child(ref(db), `users/${user.uid}`))
          .then((snapshot) => {
            if (snapshot.exists()) {
              console.log(snapshot.val());
              setUserData(snapshot.val());
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
            <h1>Welcome to the Home Page</h1>
          </div>
        </div>
      </div>    
    </>
  )
}