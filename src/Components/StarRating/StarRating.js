import React from 'react';
import Star from './Star/Star';
import './starrating.less';

function StarRating(props) {

  return (
    <div className="star-rating">
      <Star active/>
      <Star active/>
      <Star active/>
      <Star active/>
      <Star/>
    </div>
  );
}

export default StarRating;
