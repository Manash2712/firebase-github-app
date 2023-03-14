import React, { useState, useContext } from "react";

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from "reactstrap";

import { Link } from "react-router-dom"

import { UserContext } from "../context/UserContext";

const Header = () => {

    const context = useContext(UserContext);

    const [isOpen, setIsOpen] = useState(false);

    const toggleIsOpen = () => setIsOpen(!isOpen)

    return (
        <Navbar color="info" light expand="md">
            <NavbarBrand tag={Link} to='/' className="text-white">
                LCO Gitfire App
            </NavbarBrand>
            <NavbarText className="text-white">
                {
                    // context.user ? context.user.user.email : "user email"
                    context.user ? context.user?.email : ""
                }
            </NavbarText>
            {/* <NavbarBrand>
                <Link to="/" className="text-white">LCO Gitfire App</Link>
            </NavbarBrand> */}
            <NavbarToggler onClick={toggleIsOpen} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ms-auto" navbar>
                    {
                        context.user ? (<NavItem>
                            <NavLink onClick={() => { context.setUser(null) }} className="text-white">
                                LogOut
                            </NavLink>
                        </NavItem>) : (
                            <>
                                <NavItem>
                                    <NavLink tag={Link} to='/signup' className="text-white">
                                        SignUp
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to='/signin' className="text-white">
                                        SignIn
                                    </NavLink>
                                </NavItem>
                            </>
                        )
                    }
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Header;