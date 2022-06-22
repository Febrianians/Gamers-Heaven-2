import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import { useEffect, useState } from 'react'
import { auth, db } from '../services/firebase'
import { ref, get, child } from "firebase/database";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import Link from 'next/link';


export default function Header(props) {

    const [user, loading] = useAuthState(auth);
    const router = useRouter()
    const username = useSelector(state => state.username)
    const totalScore = useSelector(state => state.total_score)

    useEffect(() => {
        console.log(username, '==> username header login');
        console.log(totalScore, '==> totalScore header login');
    }, [])


      const logoutBtn = (e) => {
        e.preventDefault();
        localStorage.removeItem('firebase:host:challenge-chapter10-default-rtdb.asia-southeast1.firebasedatabase.app')
        console.log('User signed out!');
        // router.push('/')
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
                        <Link href="/home-page">
                        HOME
                        </Link>
                    </NavItem>
                    <NavItem className='navitem'>
                        <Link href="/game-list">
                        LIST GAME
                        </Link>
                    </NavItem>
                    {
                        username ? 
                        <>
                            <NavItem className='navitem'>
                                <Link href="/profile-page">
                                PROFILE
                                </Link>
                            </NavItem>
                            <NavItem className='navitem'>
                                TOTAL SCORE = {totalScore}
                            </NavItem>
                        </>
                            : ''
                    }
                    <NavItem className='navitem'>
                        <Link href="/profile-page-update">
                        PROFILE UPDATE
                        </Link>
                    </NavItem>
                    </Nav>
                    <Nav>
                    <NavItem className='navitem'>
                        <Link className='navlink' href='/profile-page'>
                        {username}
                        </Link>
                    </NavItem>
                    <NavItem className='navitem'>
                        <Link href="/" style={{cursor: "pointer"}} onClick={logoutBtn} className='navlink'>
                        LOGOUT
                        </Link>
                    </NavItem>
        
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}