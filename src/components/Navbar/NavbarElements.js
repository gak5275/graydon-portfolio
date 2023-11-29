import React from "react";
import { Nav, NavLink, NavMenu } from "./index.js";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/art" activeStyle>
                        Art
                    </NavLink>
                    <NavLink to="/stardew" activeStyle>
                        Stardew Valley Analysis
                    </NavLink>
                    <NavLink to="/extra" activeStyle>
                        Cat
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;