import Image from 'next/image'
import arrow from '../../public/assets/img/_arrow-left.png';
import logosuit from '../../public/assets/img/logo-suit.png';
import rock from '../../public/assets/img/batu.png';
import paper from '../../public/assets/img/kertas.png';
import scissors from '../../public/assets/img/gunting.png';
import refresh from '../../public/assets/img/refresh.png';
import { useState,useEffect } from 'react';
import {auth,db} from "../../services/firebase"
import { ref, onValue, get, child, set } from 'firebase/database';
import { useAuthState } from "react-firebase-hooks/auth"
import { useRouter } from 'next/router';
import Header from '../headerLogin'

export default function GamePRSPage() {

  const [playerHand, setPlayerHand] = useState("")
  const [showCompHand, setShowCompHand] = useState("")
  const [userData, setUserData] = useState({})
  const [score,setScore] = useState(0)
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter()
  function fetchUserData() {
    // const dbRef = ref(getDatabase());
    get(child(ref(db), `users/${user.uid}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val(), '==> snapshot');
          setUserData(snapshot.val());
          console.log(setUserData, '==> set userdata');
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function writeUserData() {
    set(ref(db, 'users/' + user.uid), {...userData, total_score: + score});
  }

  useEffect(() => {
    let token = sessionStorage.getItem('token')
    if (!token) {
      alert('hehehhe')
      router.push('/')
      return
    }
    if (loading) return;
  fetchUserData();

  }, []);

  function handlePlayerHand (e){
    // console.log(e.target);
    const pHand = e.target.alt
    console.log(pHand, '==> phand');
    setPlayerHand(pHand)
    const comHand = PilihanComputer();
    console.log(comHand);
    setShowCompHand(comHand)
    Result(comHand,pHand);
    console.log(score, '==> ini score');
    writeUserData()
  }

  function PilihanComputer(){
    let comp = Math.random();

    if( comp < 0.34 ) return 'rock';
    if( comp >= 0.34 && comp < 0.67 ) return 'paper';
      return 'scissors';
    
  }

  function Result(comp, player){
    if( player == comp ) return setScore(score+1);
    if( player == 'rock' ) return ( comp == 'scissors' ) ? setScore(score+3) : setScore(score-1);
    if( player == 'scissors' ) return ( comp == 'rock' ) ? setScore(score-1) : setScore(score+3);
    if( player == 'paper' ) return ( comp == 'scissors' ) ? setScore(score-1) : setScore(score+3);
  }

  return(
    <>
      <Header title='Rock Paper Scissors Game'/>
      <main>
        <div className='container'>
            <div className='row text-center'>
            <div className='col-lg-5 player'>
              <h1>Score Player</h1>
              <h1>{score}</h1>
              <h2>PLAYER 1</h2>      
                <div id="playerOption" className='choices'>
                <Image
                  onClick={handlePlayerHand}
                  height={100}
                  width={100}
                  src={rock} id="playerRock"
                  alt="rock" />
                <Image onClick={handlePlayerHand}
                  height={100}
                  width={100}
                  src={paper}
                  id="playerPaper"
                  alt="paper" />
                <Image onClick={handlePlayerHand}
                  height={100}
                  width={100}
                  src={scissors}
                  id="playerScissors" alt="scissors" />
                  </div>
                    <div>
                      <h6>Player Pick</h6>
                      {playerHand.toUpperCase()}
                    </div>
          </div>
                <div className='col-lg-2 versus'>
                    <div id="versusBox">
                        <h2 id="displayResult">VS</h2>
                    </div>
                </div>
                <div className='col-lg-5 com'>
                    <h2>COM</h2>
                    <div id="comOption" className='choices'>
                      <Image height={100} width={100} className="choiceImg" src={rock} id="comRock"
                      alt="rock" />
                      <Image 
                      height={100} width={100} className="choiceImg" src={paper} id="comPaper"
                      alt="paper" />
                      <Image height={100} width={100} className="choiceImg" src={scissors} id="comScissors"
                      alt="scissors" />
                    </div>
                    <div>
                      <h6>Computer Pick</h6>
                       {showCompHand.toUpperCase()}
                    </div>
                </div>
            </div>

            {/* refresh area */}
            <div className='container'>
                <div className='row text-center'>
                    <div className='col-lg refresh-area'>
                            <Image height={100} width={100} className="choiceImg" src={refresh} 
                            id="refresh"
                            alt="" />
                    </div>
                </div>
            </div>

        </div>
    </main>

    </>
  )
}