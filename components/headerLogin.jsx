import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import { useEffect, useState } from 'react'
import { auth, db } from '../services/firebase'
import { ref, get, child } from "firebase/database";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'


export default function Header(props) {

    const [user, loading] = useAuthState(auth);
    const router = useRouter()
    const username = useSelector(state => state.username)
    const totalScore = useSelector(state => state.totalScore)

    useEffect(() => {
        console.log(username, '==> username header login');
        console.log(totalScore, '==> totalScore header login');
    }, [])


      const logoutBtn = (e) => {
        e.preventDefault();
        localStorage.removeItem('firebase:host:challenge-chapter10-default-rtdb.asia-southeast1.firebasedatabase.app')
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
                        <NavLink href="/game-list">
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
                        {username}
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