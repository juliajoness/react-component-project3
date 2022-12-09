import React from "react";
import {NavLink} from "react-router-dom";

function NavBar (){
    return(
        <nav className="nav">
            <h1>Music in an Instance</h1>
            <ul className="ulNav">
                <li>
                    <NavLink exact to="/"> Home </NavLink>
                </li>
                <li>
                    <NavLink to="/potato">Potato</NavLink>
                </li>
                <li>
                    <NavLink to="/myalbums">Albums</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar