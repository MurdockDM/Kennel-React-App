import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = props => {
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
                        }}></NavLink>
                    </li>
                    {props.hasUser
                        ? <li>
                            <NavLink className="nav-link" to="/animals" activeStyle={{
                            fontWeight: "bold",
                            color: "lime"}}> Animals</NavLink> 
                        </li>
                        : null}
                    <li>
                        <NavLink className="nav-link" to="/locations" activeStyle={{
                            fontWeight: "bold",
                            color: "lime"
                        }}> Locations </NavLink>
                    </li>
                    {props.hasUser
                        ? <li>
                            <NavLink className="nav-link" to="/employees" activeStyle={{
                            fontWeight: "bold",
                            color: "lime"
                        }}> Employees </NavLink>
                        </li>
                        : null}
                    {props.hasUser
                        ? <li>
                            <NavLink className="nav-link" to="/owner" activeStyle={{
                            fontWeight: "bold",
                            color: "lime"
                        }}> Owners </NavLink>
                        </li>
                        : null}
                    {!props.hasUser
                        ? <li>
                            <NavLink className="nav-link" to="/login"> Login </NavLink>
                        </li>
                        : null}
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;

