import React, {Component} from 'react';
import classnames from 'classnames';
import Star from './Star/Star';
import './starrating.less';

class StarRating extends Component{
  constructor(props) {
    super(props);

    let activeStars = props.stars || 0;
    let totalStars = props.maxStars || 5;

    activeStars = activeStars / 100;
    activeStars = totalStars * activeStars;

    // Get the % fill for the final star to be filled
    let percentFill = (activeStars - Math.floor(activeStars)) * 100;
    activeStars = Math.floor(activeStars);
    

    this.state = {
      activeStars,
      totalStars,
      percentFill
    }

    this.handleStarClick = this.handleStarClick.bind(this);
  }

  handleStarClick(e,i) {
    if(this.props.editable) {
      // Return % fill for stars
      this.props.starClick((i/this.state.totalStars) * 100);
      this.setState({activeStars: i});
    }
  }

  buildStars(activeStars, maxStars) {
    let stars = [];
    for(let i = 1; i <= maxStars; i++) {
      if (i === activeStars + 1) {
        stars.push(
          <Star
            partialFill={this.state.percentFill}
            editable={this.props.editable}
            key={i}
            active={i < activeStars}
            onClick={(e) => this.handleStarClick(e,i)}/>
        )
      }
      else {
        stars.push(
          <Star
            editable={this.props.editable}
            key={i}
            partialFill={i <= activeStars ? 100 : '0%'}
            active={i <= activeStars}
            onClick={(e) => this.handleStarClick(e,i)}
          />
        )
      }
    }
    return stars;
  }

  render(){
    return (
      <div className={classnames(this.props.className, 'star-rating', {editable: this.props.editable})}>
        {this.buildStars(this.state.activeStars, this.state.totalStars)}
      </div>
    );
  }
}

export default StarRating;
