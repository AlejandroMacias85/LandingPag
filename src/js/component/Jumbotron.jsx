import React from "react";

//include images into your bundle

//create your first component
const Jumbotron = () => {
  return (
    <div className="container">
      <div className="jumbotron p-5 mx-0 border rounded-3 bg-secondary ">
        <h1 className="display-1">Welcome to react</h1>
        <p className="lead">
          React is the most popular rendering library in the world
        </p>
        <a
          className="btn btn-primary btn-lg"
          href="https://reactjs.org/"
          role="button"
        >
          Go to the official website
        </a>
      </div>
    </div>
  );
};

export default Jumbotron;
