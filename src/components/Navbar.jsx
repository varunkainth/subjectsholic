import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Hamburger from "hamburger-react";
import { useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = ({ cartItems }) => {
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  const { loginWithRedirect, logout, isAuthenticated, user, isLoading } =
    useAuth0();
  // const { logout } = useAuth0();

  const [sticky, setsticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setsticky(window.scrollY > 0);
      // console.log(window.screenY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const checkActive = (match, location) => {
    console.log(location);
    if (!location) return false;
    const { pathname } = location;
    const { url } = match;
    return pathname === url ? true : false;
  };

  return (
    <>
      <nav className={`${sticky ? "nav sticky" : " nav "}`}>
        <div className="nav-inner">
          <span className="logo">Logo</span>
          <div className="links">
            <ul>
              <li className={splitLocation[1] === "" ? "active" : ""}>
                {" "}
                <NavLink to="/">Home</NavLink>
              </li>
              <li className={splitLocation[1] === "course" ? "active" : ""}>
                {" "}
                <NavLink to="/course">Course</NavLink>
              </li>
              <li className={splitLocation[1] === "products" ? "active" : ""}>
                {" "}
                <NavLink to="/products">Products</NavLink>
              </li>
              <li className={splitLocation[1] === "contact" ? "active" : ""}>
                {" "}
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
          {isAuthenticated && (
            <div>
              <img className="nav-img" src={user.picture} alt={user.name} />
              <h3 className="nav_user_name">{user.name}</h3>
              {/* <p>{user.email}</p> */}
            </div>
          )}

          <a className={isAuthenticated ?"cart actived":"cart"}>
            <NavLink to="/cart">
              {" "}
              <i className="fa-solid fa-cart-shopping"></i>
            </NavLink>
            <sup className="cart_length">
              {cartItems.length === 0 ? "" : cartItems.length}
            </sup>
          </a>
          <span>
            {isAuthenticated ? (
              <button
                type="submit"
                value="logout"
                className="btn login"
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                Logout
              </button>
            ) : (
              <button
                type="submit"
                value="login"
                className="btn login"
                onClick={() => loginWithRedirect()}
              >
                Login
              </button>
            )}
          </span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
