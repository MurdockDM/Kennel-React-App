import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
    return (
        <header>
            <h1 className="site-title">
                Student Kennels
        <br />
                <small>Loving care when you're not there.</small>
            </h1>
            <nav>
                <ul className="container">
                    <li>
                        <NavLink className="nav-link" to="/home" activeStyle={{
                            fontWeight: "bold",
                            color: "lime"
                        }}>
                            Home
            </NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to="/animals" activeStyle={{
                            fontWeight: "bold",
                            color: "lime"
                        }}>
                            Animals
            </NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to="/locations" activeStyle={{
                            fontWeight: "bold",
                            color: "lime"
                        }}>
                            Locations
            </NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to="/employees" activeStyle={{
                            fontWeight: "bold",
                            color: "lime"
                        }}>
                            Employees
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to="/owner" activeStyle={{
                            fontWeight: "bold",
                            color: "lime"
                        }}>
                            Owners
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default withRouter(NavBar);