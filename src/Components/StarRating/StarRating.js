import React from 'react';
import classnames from 'classnames';
import Star from './Star/Star';
import './starrating.less';

function StarRating(props) {

  return (
    <div className={classnames(props.className, 'star-rating')}>
      <Star active/>
      <Star active/>
      <Star active/>
      <Star active/>
      <Star/>
    </div>
  );
}

export default StarRating;
