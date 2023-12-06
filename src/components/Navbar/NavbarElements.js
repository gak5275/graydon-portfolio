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
                        Other Websites
                    </NavLink>
                    <NavLink to="/games" activeStyle>
                        Games
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