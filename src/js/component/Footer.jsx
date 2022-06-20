import React from "react";

//include images into your bundle
import Navbar from "/workspace/react-hello/src/js/component/navBar.jsx";
import Jumbotron from "/workspace/react-hello/src/js/component/Jumbotron.jsx";
import Card from "/workspace/react-hello/src/js/component/cards.jsx";
//create your first component
const Footer = () => {
	return (
		<div className="container-fluid">
		<footer className="footer my-auto py-3 bg-dark">
		  <p className="text-center text-muted">&copy; 2022 Company, Inc</p>
		</footer>
	  </div>
		)
};

export default Footer;
