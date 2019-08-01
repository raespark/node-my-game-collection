import React from 'react';
import {star} from '../../../Utils/Images';
import './star.less';

function Star(props) {
  return (
    <div className="star">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="32px" 
        height="32px" 
        viewBox="0 0 48 48" 
        version="1.1" 
        className={props.active ? 'active star-svg' : 'star-svg'}>
        <g id="surface130294">
          <path d="M 24 36.183594 L 33.9375 42.179688 C 35.507812 43.125 37.441406 41.71875 37.023438 39.9375 L 34.386719 28.632812 L 43.167969 21.023438 C 44.550781 19.824219 43.8125 17.550781 41.988281 17.398438 L 30.429688 16.417969 L 25.90625 5.746094 C 25.191406 4.066406 22.808594 4.066406 22.09375 5.746094 L 17.570312 16.417969 L 6.011719 17.398438 C 4.1875 17.550781 3.449219 19.824219 4.832031 21.023438 L 13.613281 28.632812 L 10.976562 39.9375 C 10.558594 41.71875 12.492188 43.125 14.0625 42.179688 Z M 24 36.183594 "/>
        </g>
      </svg>
    </div>
  );
}

export default Star;
