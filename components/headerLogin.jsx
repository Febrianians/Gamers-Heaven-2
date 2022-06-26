import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import { useEffect, useState } from 'react'
import { auth, db } from '../services/firebase'
import { ref, get, child } from "firebase/database";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { getAuth, signOut } from "firebase/auth";
import Link from 'next/link';


export default function Header(props) {
    const [isOpen, setIsOpen] = useState(true)
    const [user, loading] = useAuthState(auth);
    const router = useRouter()
    const username = useSelector(state => state.username)
    const totalScore = useSelector(state => state.total_score)

    useEffect(() => {
        console.log(username, '==> username header login');
        console.log(totalScore, '==> totalScore header login');
    }, [])

    function handleToggle () {
        setIsOpen(!isOpen)
    }    

    const logoutBtn = (e) => {
        e.preventDefault();
    const auth = getAuth();
    signOut(auth).then(() => {
    sessionStorage.removeItem('token')
    }).catch((error) => {
        console.log(error.message, '====> dari logout');
    });
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
            >   <div className="navbrand">
                    <Link href="/" >{props.title}</Link>
                </div>
                <NavbarToggler  onClick={handleToggle} />
                <Collapse isOpen={isOpen ? isOpen : ""} navbar
                className='ms-5'>
                <Nav 
                    navbar
                    >
                    <Nav>
                    <NavItem className={router.pathname == "/home-page" ? "active" : "navitem"}>
                        <Link href={username ? "/home-page" : "/"} >
                        <a className='text-link'>HOME</a>
                        </Link>
                    </NavItem>
                    <NavItem className={router.pathname == "/game-list" ? "active" : "navitem"}>
                        <Link href="/game-list">
                        <a className='text-link'>LIST GAME</a>
                        </Link>
                    </NavItem>
                    </Nav>
                    {
                    username ? 
                        <>
                        <Nav>
                            <NavItem className='navitem'>
                                <a className='text-link' style={{ cursor: 'pointer' }}>TOTAL SCORE = {totalScore ? totalScore : 0}</a>
                            </NavItem>
                            <NavItem className={router.pathname == "/profile-page" ? "active" : "navitem"}>
                                <Link className='navlink' href='/profile-page'>
                                <a className='text-link'>{username.toUpperCase()}</a>
                                </Link>
                            </NavItem>
                            <NavItem onClick={logoutBtn} className='navitem'>
                                <Link href="/" style={{cursor: "pointer"}}  className='navlink'>
                                <a className='text-link'>LOGOUT</a>
                                </Link>
                            </NavItem>
                        </Nav>
                        </>
                            :
                            <>
                                <Nav>
                                <NavItem className={router.pathname == "/register-page" ? "active" : "navitem"}>
                                    <Link className='navlink' href='/register-page'>
                                    <a className='text-link'>REGISTER</a>
                                    </Link>
                                </NavItem>
                                <NavItem className={router.pathname == "/login-page" ? "active" : "navitem"}>
                                    <Link className='navlink' href="/login-page">
                                    <a className='text-link'>LOGIN</a>
                                    </Link>
                                </NavItem>
                                </Nav>
                            </>
                    }
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}