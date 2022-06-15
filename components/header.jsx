import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';


export default function Header(props) {
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
                        <NavLink className='navlink' href='/register-page'>
                        REGISTER
                        </NavLink>
                    </NavItem>
                    <NavItem className='navitem'>
                        <NavLink className='navlink' href="/login-page">
                        LOGIN
                        </NavLink>
                    </NavItem>
        
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}