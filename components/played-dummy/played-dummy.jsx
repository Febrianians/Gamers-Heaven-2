import arrow from '../../public/_arrow-left.png';
import logosuit from '../../public/assets/img/logo-suit.png';
import rock from '../../public/assets/img/batu.png';
import paper from '../../public/assets/img/kertas.png';
import scissors from '../../public/assets/img/gunting.png';
import refresh from '../../public/assets/img/refresh.png';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import styles from './playedDummy.module.css'

export default function GamePRSPage() {

  return(
    <>
      {/* <h1>/gamerps is loaded successfully</h1> */}
      <div className="header">
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
                  <img src={arrow} alt="back" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <img src={logosuit} alt="logo" />
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>

      <main>
        <div className='container'>
            {/* game play */}
            <div className='row text-center'>
                <div className='col-lg-5 player'>
                    <h2>PLAYER 1</h2>
                    <div id="playerOption" className='choices'>
                        <button id="playerRock" className={styles.choiceSign}>
                            <img className='choiceImg' src={rock} alt="rock" />
                        </button>
                        <button id="playerPaper" className={styles.choiceSign}>
                            <img className='choiceImg' src={paper} alt="paper" />
                        </button>
                        <button id="playerScissors" className={styles.choiceSign}>
                            <img className='choiceImg' src={scissors} alt="scissors" />
                        </button>
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
                            <img className='choiceImg' src={rock} alt="rock" />
                        </button>
                        <button id="comPaper" className={styles.choiceSign}>
                            <img className='choiceImg' src={paper} alt="paper" />
                        </button>
                        <button id="comScissors" className={styles.choiceSign}>
                            <img className='choiceImg' src={scissors} alt="scissors" />
                        </button>
                    </div>
                </div>
            </div>

            {/* refresh area */}
            <div className='container'>
                <div className='row text-center'>
                    <div className='col-lg refresh-area'>
                        <button id="refresh">
                            <img className={styles.choiceImg} src={refresh} alt="" />
                        </button>
                    </div>
                </div>
            </div>

        </div>
    </main>

    </>
  )
}