import { useEffect } from 'react';
import { useState } from "react";
import Header from "../header"
import { auth, db } from "../../services/firebase";
import { ref, set, onValue } from "firebase/database";
import { useRouter } from 'next/router'
import Link from "next/link";
export default function LeaderboardPageComponent(){
    
    function fetchDataFromDB(){
        const dbRef = ref(db, 'users');

        onValue(dbRef, (snapshot) => {
            let getData = []
        snapshot.forEach((childSnapshot) => {
            const childKey = childSnapshot.key;
            const childData = childSnapshot.val();
            console.log(childKey, "====> ini child key");
            console.log(childData, "====> ini child key");
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
            <h1>Test</h1>
        </section>
        </>
    )
}