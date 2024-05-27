import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink class="navbar-brand" to="/home">
          Tic Tac Toe
        </NavLink>

        <div
          class="collapse navbar-collapse"
          id="navbarNav"
          style={{ justifyContent: "center" }}
        >
          <ul class="navbar-nav">
            <li class="nav-item active">
              <NavLink
                class="nav-link"
                to={"/"}
                style={{
                  textDecoration: "none",
                  marginRight: 20,
                  color: "black",
                }}
              >
                Home
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                class="nav-link"
                to={"/playerLobby"}
                style={{
                  textDecoration: "none",
                  marginRight: 20,
                  color: "black",
                }}
              >
                PlayGame
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
