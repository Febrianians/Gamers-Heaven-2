import Header from "../headerLogin"
import { useEffect } from 'react'
import { auth, db } from "../../services/firebase";
import { getDatabase, ref, get, child, onValue } from "firebase/database";
import { useAuthState } from "react-firebase-hooks/auth";



export default function HomePageComponent() {

    const [user, loading] = useAuthState(auth);


    function fetchUserdata() {
          

        get(child(ref(db), `users/${user.uid}`))
          .then((snapshot) => {
            if (snapshot.exists()) {
              console.log(snapshot.val(), '==> user di home-page');
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
            <h1>Welcome {user?.email} the Home Page</h1>
          </div>
        </div>
      </div>    
    </>
  )
}