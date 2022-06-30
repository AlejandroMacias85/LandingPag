import React from "react";

//include images into your bundle

//create your first component
const Card = (props) => {
  return (
    <div className="col">
      <div className="card text-center" style={{ height: "20px;" }}>
        <img src={props.imageUrl} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div class="card-footer">
            <large class="text-muted">
              {" "}
              <a href="" className="btn btn-primary">
                Go somewhere
              </a>
            </large>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
