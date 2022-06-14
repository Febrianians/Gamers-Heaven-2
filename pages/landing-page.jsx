// import NavbarComponent from "../components/navbarLanding";
import Header from '../components/header';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import styles from '../styles/landingPage.module.css';

export default function LandingPage() {

  return(
    <>
      <div className={styles.landingpage}>
        <Header title='Landing Page'/>
        <div className={styles.wrapperUp}>
          <div className={styles.content}>
            <h1 className={styles.contenth1}>PLAY TRADITIONAL GAME</h1>
            <h3 className={styles.contenth3}>
              Experience New Traditional Game Play
            </h3>
            <div>
              <Button color="warning" size="lg">
                PLAY NOW
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.wrapperDown}>
          <h6>THE STORY</h6>
          <a className={styles.facaretdown} href="/">
            <FontAwesomeIcon icon={faCaretDown} />
          </a>
        </div>
      </div>
    </>
  )
}