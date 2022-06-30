import React from "react";

//include images into your bundle
import Navbar from './NavBar.jsx';
import Jumbotron from './Jumbotron.jsx';
import Card from './cards.jsx';
import Footer from './Footer.jsx';
//create your first component
const Home = () => {
	return (
		<div className="App">
		<Navbar />
		<div className="container">
		<Jumbotron />
		<div className="row row-cols-1 row-cols-md-4 m-1">
		<Card imageUrl="http://via.placeholder.com/500x325" title="A nice image" />
		<Card imageUrl="http://via.placeholder.com/500x325" title="Hello" />
		<Card imageUrl="http://via.placeholder.com/500x325" title="Hi There" />
		<Card imageUrl="http://via.placeholder.com/500x325" title="Look at This" />
		</div>
		</div>
		<Footer />
		</div>
		);
};

export default Home;
