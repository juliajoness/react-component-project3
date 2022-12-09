import React from "react";
import {Link} from "react-router-dom";
import { useHistory } from "react-router-dom";

function NavBar() {
    
let history = useHistory();

    return(
        <nav className="nav">
            <h1>Music in an Instance</h1>
            <ul className="ulNav">
                <li>
                    <Link exact to="/"> Home </Link>
                </li>
                <li>
                    <Link to="/myalbums">Albums</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar