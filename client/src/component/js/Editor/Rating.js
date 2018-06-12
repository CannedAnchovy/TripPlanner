import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Star from '@material-ui/icons/Star';
import StarHalf from '@material-ui/icons/StarHalf';
import StarBorder from '@material-ui/icons/StarBorder';

const styles = {
  icon: {
    width: '35',
    height: '35',
    color: 'rgb(251, 192, 45)'
  }
}

class Rating extends Component {
  constructor() {
    super();
    this.state = {
      rating: 0,
      edit: false,
    }

    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleEditRating = this.handleEditRating.bind(this);
  }

  componentWillMount() {
    this.setState({ rating: this.props.value });
  }

  toggleEdit() {
    if(!this.props.editable) return;
    
    if(this.state.edit) {
      this.setState({ edit: false });
    } else {
      this.props.onChange(this.state.rating);
    }
  }


  handleEditRating(e, index) {
    if(!this.state.edit) return;
    
    let offset = e.pageX - e.target.getBoundingClientRect().left;
    let oneThird = 35/3;
    let rating = index;

    if(offset >= oneThird && oneThird*2 > offset) {
      rating += 0.5;
    } else if(offset >= oneThird*2) {
      rating += 1;
    }
    this.setState({ rating: rating });
  }

  expandStar() {
    let array = new Array(5);
    for(let i=1; i<=5; i++) {
      let diff = this.state.rating - i;
      if(diff <= -1) {
        array[i-1] = <StarBorder 
          key={i} 
          style={styles.icon}
          onMouseEnter={(e) => this.handleEditRating(e, i-1)}
          onMouseMove={(e) => this.handleEditRating(e, i-1)}
          onMouseLeave={(e) => this.handleEditRating(e, i-1)}
        />; 
      } else if(diff <= -0.5) {
        array[i-1] = <StarHalf 
          key={i} 
          style={styles.icon}
          onMouseEnter={(e) => this.handleEditRating(e, i-1)}
          onMouseMove={(e) => this.handleEditRating(e, i-1)}
          onMouseLeave={(e) => this.handleEditRating(e, i-1)}
        />;
      } else {
        array[i-1] = <Star 
          key={i} 
          style={styles.icon}
          onMouseEnter={(e) => this.handleEditRating(e, i-1)}
          onMouseMove={(e) => this.handleEditRating(e, i-1)}
          onMouseLeave={(e) => this.handleEditRating(e, i-1)}
        />;
      } 
    }
    return array;
  }

  render() {
    return (
      <div 
        className="rating-container"
        onClick={this.toggleEdit}
      >
        {this.expandStar()}
      </div>
    )
  }
}

Rating.propTypes = {
  editable: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Rating;