import React from 'react';
import classnames from 'classnames';
import './star.less';

function Star(props) {
  return (
    <div className={classnames('star', props.className)} onClick={props.onClick}>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="30px" 
        height="30px" 
        viewBox="0 0 48 48" 
        version="1.1" 
        className={classnames('star-svg', {active: props.active}, {editable: props.editable})}>
        <g>
          {!props.editable && <clipPath id="star">
            <path
              d="M 24 36.183594 L 33.9375 42.179688 C 35.507812 43.125 37.441406 41.71875 37.023438 39.9375 L 34.386719 28.632812 L 43.167969 21.023438 C 44.550781 19.824219 43.8125 17.550781 41.988281 17.398438 L 30.429688 16.417969 L 25.90625 5.746094 C 25.191406 4.066406 22.808594 4.066406 22.09375 5.746094 L 17.570312 16.417969 L 6.011719 17.398438 C 4.1875 17.550781 3.449219 19.824219 4.832031 21.023438 L 13.613281 28.632812 L 10.976562 39.9375 C 10.558594 41.71875 12.492188 43.125 14.0625 42.179688 Z M 24 36.183594"
            />
          </clipPath>}
          {props.editable && 
            <path
              d="M 24 36.183594 L 33.9375 42.179688 C 35.507812 43.125 37.441406 41.71875 37.023438 39.9375 L 34.386719 28.632812 L 43.167969 21.023438 C 44.550781 19.824219 43.8125 17.550781 41.988281 17.398438 L 30.429688 16.417969 L 25.90625 5.746094 C 25.191406 4.066406 22.808594 4.066406 22.09375 5.746094 L 17.570312 16.417969 L 6.011719 17.398438 C 4.1875 17.550781 3.449219 19.824219 4.832031 21.023438 L 13.613281 28.632812 L 10.976562 39.9375 C 10.558594 41.71875 12.492188 43.125 14.0625 42.179688 Z M 24 36.183594"
            />
          }
        </g>
        {!props.editable &&
          <rect
            x="0"
            y="0"
            fill="#CECECE"
            width="100%"
            height="100%"
            clipPath="url(#star)"
          />
        }
        {!props.editable &&
          <rect
            x="0"
            y="0"
            fill="#94BEFF"
            /* rect goes over edges of stars, add or subtract to keep within bounds of star */
            width={(props.partialFill > 50 ? props.partialFill - 10 : props.partialFill + 10) + '%' || '0%'}
            height="100%"
            clipPath="url(#star)"
          />
        }
      </svg>
    </div>
  );
}

export default Star;
