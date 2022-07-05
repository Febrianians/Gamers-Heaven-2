import { useEffect } from 'react';
import { useState } from "react";
import Header from "../header"
import { auth, db } from "../../services/firebase";
import { ref, set, onValue, get } from "firebase/database";
import { useAuthState } from "react-firebase-hooks/auth"
import { Container, Row, Col, Table } from 'reactstrap';
import { useRouter } from 'next/router'
import Link from "next/link";
import { list } from 'firebase/storage';
export default function LeaderboardPageComponent(){
    
    const [numpangData, setNumpangData] = useState([])
    const [user, loading] = useAuthState(auth);

    function fetchDataFromDB(){
        console.log("===> masuk sini");
        const dbRef = ref(db, 'users')
        onValue(dbRef, (snapshot) => {
            // let list = Object.entries(snapshot.val()).map(([key, value], index) => {
            //     console.log("===> masuk lagi");
            //     return value
            // })
            // setNumpangData(list)  
            // console.log(list[0].game, "===> ini list lenght");

            let getData = []
            snapshot.forEach((childSnapshot) => {
                const childKey = childSnapshot.key;
                const childData = childSnapshot.val();
                console.log(childKey, "====> ini ChdildKey");
                console.log(childData, "====> ini ChildData");
                console.log(childData.game, "===> ini child data game");
                getData.push({
                    username : childData.username,
                    // gameName : childData.game.game_name,
                    // gameScore : childData.game.play_count
                })
            })
            setNumpangData(getData)
            console.log(numpangData, "===> ini numpang data");
            numpangData.forEach((game)=>{
                console.log(game.username);
            })
        }
        )
    }

    useEffect(()=>{
        fetchDataFromDB()
        if(loading)return;
    },[])
       
        
       
        return(
            <>
            <section className="leaderboard-page">
            <Header title="Leaderboard Page"/>
            <Container>
                <Row>
                <h1>ROCK PAPER SCISSORS</h1>
                    <Col>
                    <Table>
                    <thead>
                    <tr>
                        <th>USER</th>
                        <th>Play Count</th>
                        <th>Score</th>
                    </tr>
                    </thead>
            {/* {
                numpangData.map(value =>{
                    console.log(value.game.play_count, "===> oi oi");
                    let userName = value.username
                    let playCount =value.game.play_count
                    let score =value.game.score
                    let gameId = value.game.game_id
                    let gameUsername = value.username
                    let gameEmail = value.email
                    return(

                        <tbody>
                        <tr>
                        <td key="">
                            {userName}
                        </td>
                        <td key={gameUsername}>
                            {playCount}
                        </td>
                        <td key={gameEmail}>
                            {score}
                        </td>
                        </tr>
                        </tbody>
                        
                    )
                })
            } */}
                    </Table>
                    </Col>
                </Row>
            </Container>
            </section>
            </>
        )
        
}