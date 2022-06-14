import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import styles from '../styles/navbarLanding.module.css';


export default function NavbarComponent() {

  return(
    <div>
      <Navbar
      color="dark"
      dark
      expand="md"
      fixed="off"
      className={styles.navbar}
      >
        <NavbarBrand className={styles.navbrand} href="/">
          LOGO
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck(){}} />
        <Collapse navbar>
          <Nav
            className="me-auto"
            navbar
          >
            <NavItem className={styles.navitem}>
              <NavLink href="/">
                HOME
              </NavLink>
            </NavItem>
            <NavItem className={styles.navitem}>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                WORK
              </NavLink>
            </NavItem>
            <NavItem className={styles.navitem}>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                CONTACT
              </NavLink>
            </NavItem>
            <NavItem className={styles.navitem}>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                ABOUT ME
              </NavLink>
            </NavItem>

          </Nav>
          <Nav>
            <NavItem className={styles.navitem}>
              <NavLink className={styles.navlink} href='/register'>
                REGISTER
              </NavLink>
            </NavItem>
            <NavItem className={styles.navitem}>
              <NavLink className={styles.navlink} href="/login">
                LOGIN
              </NavLink>
            </NavItem>

          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}