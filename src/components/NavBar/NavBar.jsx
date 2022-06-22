import React from 'react';
import { Link, NavLink} from 'react-router-dom';
import '../../styles.css';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link className="navbar-brand ms-3" to="/">
                <img src="src\assets\pokeapi_256.png" alt="" width="120" height="50" className="d-inline-block align-text-top"></img>
            </Link>

            <div className="navbar-collapse ">
                <div className="navbar-nav">

                    <NavLink className="nav-item nav-link" to="/">
                        Home
                    </NavLink>
                    <NavLink className="nav-item nav-link" to="/search">
                        Search
                    </NavLink>
                </div>
            </div>
            
        </nav>
    )
}
