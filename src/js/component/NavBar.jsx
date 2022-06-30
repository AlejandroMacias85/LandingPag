import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Bootstrap</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNavDarkDropdown">
        <ul className="navbar-nav">
        <li className="nav-item active">
    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">About</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Services</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Contact</a>
  </li>
          <li className="nav-item dropdown">
            
            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Home</a></li>
              <li><a className="dropdown-item" href="#">About</a></li>
              <li><a className="dropdown-item" href="#">Servicess</a></li>
              <li><a className="dropdown-item" href="#">Contact</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
};

export default NavBar;
<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
<ul className="navbar-nav ms-auto me-5">
  <li className="nav-item active">
    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">About</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Services</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Contact</a>
  </li>
</ul>
</div>