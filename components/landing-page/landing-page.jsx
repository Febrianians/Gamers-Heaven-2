// import NavbarComponent from "../components/navbarLanding";
import Header from '../header';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

export default function LandingPageComponent() {

  return(
    <>
      <div className='landingpage'>
        <Header title='Landing Page'/>
        <div className='wrapperUp'>
          <div className='content'>
            <h1>PLAY TRADITIONAL GAME</h1>
            <h3>Experience New Traditional Game Play</h3>
            <div>
              <Button color="warning" size="lg">
                PLAY NOW
              </Button>
            </div>
          </div>
        </div>
        <div className='wrapperDown'>
          <h6>THE STORY</h6>
          <a href="/landing-page">
            <FontAwesomeIcon icon={faCaretDown} />
          </a>
        </div>
      </div>
    </>
  )
}