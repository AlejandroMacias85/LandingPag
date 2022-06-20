import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "/workspace/react-hello/src/js/component/navBar.jsx";
import Jumbotron from "/workspace/react-hello/src/js/component/Jumbotron.jsx";
//create your first component
const Card = () => {
  return (
    <div className="container">
      <div className="row row-cols-md-4 m-1">
        <div className="col">
          <div className="card">
            <img
              src="https://wallpapersmug.com/download/3840x2400/5b5545/artwork-one-piece-monkey-d-luffy.jpg"
              className="card-img-top"
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="https://wallpapersmug.com/download/3840x2400/5b5545/artwork-one-piece-monkey-d-luffy.jpg"
              className="card-img-top"
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="https://wallpapersmug.com/download/3840x2400/5b5545/artwork-one-piece-monkey-d-luffy.jpg"
              className="card-img-top"
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="https://wallpapersmug.com/download/3840x2400/5b5545/artwork-one-piece-monkey-d-luffy.jpg"
              className="card-img-top"
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
