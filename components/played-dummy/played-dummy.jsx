import Image from 'next/image'
import arrow from '../../public/assets/img/_arrow-left.png';
import logosuit from '../../public/assets/img/logo-suit.png';
import rock from '../../public/assets/img/batu.png';
import paper from '../../public/assets/img/kertas.png';
import scissors from '../../public/assets/img/gunting.png';
import refresh from '../../public/assets/img/refresh.png';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import styles from './playedDummy.module.css'
import { useState,useEffect } from 'react';
import {auth,db} from "../../services/firebase"
import { ref, onValue, get, child, set } from 'firebase/database';
import { useAuthState} from "react-firebase-hooks/auth"
import Header from '../headerLogin'

export default function GamePRSPage() {

  const [playerHand,setPlayerHand] = useState("")
  const [comHand,setComHand] = useState("")
  const [userData, setUserData] = useState({})
  const [score,setScore] = useState(0)
  const [user, loading, error] = useAuthState(auth);

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
    if (loading) return;
    // if (!user) return navigate("/");
    fetchUserData();
  }, []);

  function handlePlayerHand (e){
    // console.log(e.target);
    const pHand = e.target.alt
    console.log(pHand, '==> phand');
    
    setPlayerHand(pHand)
      // console.log(playerHand);
      const comHand = PilihanComputer();
      console.log(comHand);
      Result(comHand,pHand);
      console.log(score, '==> ini score');
      writeUserData()
      // console.log(writeUserData(), '==> result game');
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
      {/* <h1>/gamerps is loaded successfully</h1> */}
      {/* <div className="header">
        <Navbar
        color="light"
        dark
        expand="md"
        fixed="off"
        className={styles.navbar}
        >
          <Collapse navbar>
            <Nav
              className="me-auto"
              navbar
            >
              <NavItem>
                <NavLink href="/">
                  <Image src={arrow} alt="back" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Image src={logosuit} alt="logo" />
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div> */}

      <Header title='Rock Paper Scissors Game'/>

      <main>
        <div className='container'>
            {/* game play */}
            <div className='row text-center'>
                <div className='col-lg-5 player'>
                  <h1>{score}</h1>
                    <h2>PLAYER 1</h2>
                    <div id="playerOption" className='choices'>
                        <button id="playerRock" className={styles.choiceSign} onClick = {handlePlayerHand}>
                            <Image height={100} width={100} className={styles.choiceImg} src={rock} alt="rock" />
                        </button>
                        <button id="playerPaper" className={styles.choiceSign} onClick = {handlePlayerHand}>
                            <Image height={100} width={100} className={styles.choiceImg} src={paper} alt="paper" />
                        </button>
                        <button id="playerScissors" className={styles.choiceSign} onClick = {handlePlayerHand}>
                            <Image height={100} width={100} className={styles.choiceImg} src={scissors} alt="scissors" />
                        </button>
                    </div>
                    <div>
                      {playerHand}
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
                        <button id="comRock" className={styles.choiceSign}>
                            <Image height={100} width={100} className={styles.choiceImg} src={rock} alt="rock" />
                        </button>
                        <button id="comPaper" className={styles.choiceSign}>
                            <Image height={100} width={100} className={styles.choiceImg} src={paper} alt="paper" />
                        </button>
                        <button id="comScissors" className={styles.choiceSign}>
                            <Image height={100} width={100} className={styles.choiceImg} src={scissors} alt="scissors" />
                        </button>
                    </div>
                </div>
            </div>

            {/* refresh area */}
            <div className='container'>
                <div className='row text-center'>
                    <div className='col-lg refresh-area'>
                        <button id="refresh">
                            <Image height={100} width={100} className={styles.choiceImg} src={refresh} alt="" />
                        </button>
                    </div>
                </div>
            </div>

        </div>
    </main>

    </>
  )
}