import React from "react";
import { NavLink,useHistory } from "react-router-dom";

//redux
import { useSelector,useDispatch } from "react-redux";
import { authActions } from "../../store/auth";

import './navbar.scss';
import { userActions } from "../../store/username";

const NavBar=()=>{
    const isAuth=useSelector(state=>state.auth.isAuthenticated);
    const dispatch=useDispatch();
    const history=useHistory();

    function onLogoutHandler(){
        localStorage.removeItem('isLoggedIn');
        dispatch(authActions.logout());
        dispatch(userActions.logout)
        history.push('/home');
    }

    return(
        <header className="header">
            <NavLink to="/home" className="logo">
            <h1>Memories</h1>
            </NavLink>
            <ul className="lists">
                {isAuth && <li>
                    <NavLink to='/others' className="list">
                    Others Memories
                    </NavLink>
                </li>}
                {isAuth && <li>
                    <NavLink to='/profile' className="list">
                    Profile
                    </NavLink>
                </li>}
                {!isAuth && <li>
                    <NavLink to='/login'className="list">
                    Login
                    </NavLink>
                </li>}
                {!isAuth && <li>
                    <NavLink to='/register'className="list">
                    Register
                    </NavLink>
                </li>}
                {isAuth && <li>
                    <button onClick={onLogoutHandler} className="logout">Logout</button>
                </li>}
            </ul>
        </header>
    )
}

export default NavBar;