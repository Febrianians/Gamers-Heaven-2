import { useEffect } from 'react';
import { useState } from "react";
import Header from "../header"
import { auth, db } from "../../services/firebase";
import { ref, set, onValue, get } from "firebase/database";
import { useAuthState } from "react-firebase-hooks/auth"
import { useRouter } from 'next/router'
import Link from "next/link";
import { list } from 'firebase/storage';
export default function LeaderboardPageComponent(){
    
    const [numpangData, setNumpangData] = useState([])
    const [user, loading] = useAuthState(auth);

    function fetchDataFromDB(){
        const dbRef = ref(db, 'users')
        // })
        // console.log("====> masuk sini");
        // get(dbRef)
        // .then((snapshot)=>{
        //     if (snapshot) {
        //         // console.log(snapshot.val(), "====> ini data s");
        //         let dataUser = snapshot.val()
        //     }})
            


        // console.log(get(), "==> ini get");
        onValue(dbRef, (snapshot) => {
            let list = Object.entries(snapshot.val()).map(([key, value], index) => {
                return value
            })
            // Object.entries(snapshot.val()).forEach(([key, value], index) => {
            //     console.log(value, "-----> value")
            //     auw.push(value)
            // })     

            setNumpangData(list)
            // console.log(numpangData)    


            // let getData = []
            // snapshot.forEach((childSnapshot) => {
            //     const childKey = childSnapshot.key;
            //     const childData = childSnapshot.val();
            //     console.log(childKey, "====> ini ChdildKey");
            //     console.log(childData, "====> ini ChildData");
            //     getData.push({
            //         username : childData.username,
            //         gameName : childData.game.game_name,
            //         gameScore : childData.game.play_count
            //     })
            // })
            // setNumpangData(getData)
            // console.log(numpangData, "===> ini numpang data");
            // numpangData.forEach((game)=>{
            //     console.log(game.username);
            // })
        }
        )
    }

    useEffect(()=>{
        if(loading)return;
        fetchDataFromDB()
    },[])
       
        
        let textCenter = {
            textAlign: "center",
            color: "white"
        }
        return(
            <>
            <section className="leaderborad-page">
            {/* <Header title="Leaderboard Page"/> */}

            <div className="container">
            <h1 style={textCenter}>ROCK PAPER SCISSORS</h1>
                <div className="row">
                    <div className="col-lg-12">
                    <table>         
                    <tr style={{width: "100%"}}>  
                    <tr className='keyData'>
                        <th>USER</th>
                        <th>Play Count</th>
                        <th>Score</th>
                    </tr>
            {
                numpangData.map(value =>{
                    let userName = value.username
                    let playCount =value.game.play_count
                    let score =value.game.score
                    console.log(value.game.score, "===> oi oi");
                    return(
                        <>
                        <tr className='valueData'>
                        <td>
                            {userName}
                        </td>
                        <td>
                            {playCount}
                        </td>
                        <td>
                            {score}
                        </td>
                        </tr>
                        
                        </>
                    )
                })
            }
                    </tr>
                    </table>
                    </div>
                </div>
            </div>
            </section>
            </>
        )
        
}