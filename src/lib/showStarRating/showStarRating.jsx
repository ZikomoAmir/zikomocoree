import React from "react";

function ShowStarRating(props) {
  //get int value of rating
  const starRating = parseInt(props.rating);
  const renderStarRating = [];

  //render
  for (let i = 1; i<= starRating; i++) {
    renderStarRating.push(
      <svg className="icon icon--star" key={`star-${i}`}>
        <use xlinkHref="/icons.svg#star"></use>
      </svg>
    );
  }
  return <div className="star-rating">{renderStarRating}</div>;
}

export default ShowStarRating;