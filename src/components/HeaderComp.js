import React from "react";
import { NavLink } from "react-router-dom";

import Cart from "../components/Cart";
export default function HeaderComp() {
  // const showCart = () => {
  //   console.log("Show elements");
  // };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid ">
        <NavLink className="navbar-brand" to="/home">
          Meri Kart.com
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll d-flex justify-content-around">
            <li className="nav-item col">
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/home"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item col">
              <NavLink className="nav-link" to="/Shop">
                Shop
              </NavLink>
            </li>
            <li className="nav-item col">
              <NavLink className="nav-link" to="/About">
                About
              </NavLink>
            </li>

            {/* user cart code */}
            <li className="col">
              <Cart />
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
