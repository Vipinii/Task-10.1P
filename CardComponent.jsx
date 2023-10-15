import React from "react";

function CardComponent({ image, cardTitle, cardText, textEnd }) {
  return (
    <div className="card card-with-margin" style={{ width: '20rem', height: '16rem' }}>
      <img src={image} className="card-img-top" alt="card1" />
      <div className="card-body">
        <h5 className="card-title">{cardTitle}</h5>
       <h7  className="card-name"> {cardText} </h7>
        <p className="text-end" style={{ color: 'black' }}>{textEnd}</p>
      </div>
    </div>
  );
}

export default CardComponent;


