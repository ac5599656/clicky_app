import React from "react";
import "./style.css";

const Card = props => (
  <div>
    <div className="col-md-3 pt-5 p-3">
      <div className="fix">
        <img
          onClick={() => props.handleClick(props.id)}
          className="card-img-top"
          src={props.image}
          alt={props.name}
          id={props.id}
        />
      </div>
    </div>
  </div>
  // <div className="col-md-3">
  //   <div className="img-container">
  //     <img
  //       onClick={() => console.log("HELLO WORLD")}
  //       className="card-img-top"
  //       src={props.image}
  //       alt={props.name}
  //       onClick={props.handleClick}
  //       id={props.id}
  //     />
  //   </div>
  // </div>
);

export default Card;
