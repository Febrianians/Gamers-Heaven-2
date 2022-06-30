import { useEffect } from 'react';
import { useState } from "react";
import Header from "../header"
import { auth, db } from "../../services/firebase";
import { ref, set, onValue } from "firebase/database";
import { useRouter } from 'next/router'
import Link from "next/link";
export default function LeaderboardPageComponent(){
    
    const [numpangData, setNumpangData] = useState([])


    function fetchDataFromDB(){
        const dbRef = ref(db, 'users');

        onValue(dbRef, (snapshot) => {
            let getData = []
        snapshot.forEach((childSnapshot) => {
            const childKey = childSnapshot.key;
            const childData = childSnapshot.val();
            console.log(childKey, "====> ini ChdildKey");
            // console.log(childData, "====> ini ChildData");
            getData.push({
                username : childData.username,
                gameName : childData.game.game_name,
                gameScore : childData.game.play_count
            })
        })
        setNumpangData(getData)
        console.log(numpangData, "===> ini numpang data");
        numpangData.forEach((game)=>{
            console.log(game);
        })
        

       


        })
        , {
            onlyOnce: true
            }
        }
    

    useEffect(()=>{

        fetchDataFromDB()
    },[])
    return(
        <>
        <section className="leaderborad-page">
            <Header title="Leaderboard Page"/>
            <h1>ROCK PAPER SCISSORS</h1>
            {
                // numpangData.map((data)=>{
                    
                    
                    
                //     return(
                //         <table>
                //             <tr>
                //                 <th>Nama</th>
                //                 {data.username}
                //             </tr>
                //             <tr>
                //                 <td>Alfreds Futterkiste</td>
                //                 <td>Maria Anders</td>
                //                 <td>Germany</td>
                //             </tr>
                //             <tr>
                //                 <td>Centro comercial Moctezuma</td>
                //                 <td>Francisco Chang</td>
                //                 <td>Mexico</td>
                //             </tr>
                //         </table>
                //     )
                // })
            }
        </section>
        </>
    )
}