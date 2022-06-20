import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const NavBar = () => {
  return (
    <nav
      class="navbar nav justify-content-end bg-dark"
      aria-label="Main navigation"
    >
      <div class="container">
       
          <a class="nav-brand" href="#">
            <img
              src="https://wallpapercave.com/wp/wp2220883.jpg"
              alt=""
              width="30"
              height="24"
              class="d-inline-block align-text-top"
            />
            Bootstrap
          </a>
          <ul className="nav justify-content-end">
          <li className="nav-item">
            <a className="nav-link dropbox" aria-current="page" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Servicess
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
