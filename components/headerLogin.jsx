import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import { useEffect } from 'react'
import { auth, db } from '../services/firebase'
import { ref, get, child } from "firebase/database";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from 'next/router'


export default function Header(props) {

    const [user, loading] = useAuthState(auth);
    const router = useRouter()


    function fetchUserdata() {
        get(child(ref(db), `users/${user.uid}`))
          .then((snapshot) => {
            if (snapshot.exists()) {
              console.log(snapshot.val());
              setUserData(snapshot.val());
            } else {
              console.log("No data available");
            }
          })
          .catch((error) => {
            console.error(error);
          });
      }
    
      useEffect(() => {
        if (loading) return;
        fetchUserdata();
      }, []);

      const logoutBtn = (e) => {
        e.preventDefault();
        auth.signOut();
        console.log('User signed out!');
        router.push('/')

      }
      

    return(
        <div>
            <Navbar
            color="dark"
            dark
            expand="md"
            fixed="off"
            className='navbar'
            >
                <NavbarBrand className='navbrand' href="/landing-page">
                    {props.title}
                </NavbarBrand>
                <NavbarToggler onClick={function noRefCheck(){}} />
                <Collapse navbar>
                    <Nav
                    className="me-auto"
                    navbar
                    >
                    <NavItem className='navitem'>
                        <NavLink href="/landing-page">
                        HOME
                        </NavLink>
                    </NavItem>
                    <NavItem className='navitem'>
                        <NavLink href="/game-list-page">
                        LIST GAME
                        </NavLink>
                    </NavItem>
                    <NavItem className='navitem'>
                        <NavLink href="/game-detail-page">
                        LIST DETAIL GAME
                        </NavLink>
                    </NavItem>
                    <NavItem className='navitem'>
                        <NavLink href="https://github.com/reactstrap/reactstrap">
                        ABOUT ME
                        </NavLink>
                    </NavItem>
        
                    </Nav>
                    <Nav>
                    <NavItem className='navitem'>
                        <NavLink className='navlink' href='/profile-page'>
                        {user?.email}
                        </NavLink>
                    </NavItem>
                    <NavItem className='navitem'>
                        <NavLink style={{cursor: "pointer"}} onClick={logoutBtn} className='navlink'>
                        LOGOUT
                        </NavLink>
                    </NavItem>
        
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}