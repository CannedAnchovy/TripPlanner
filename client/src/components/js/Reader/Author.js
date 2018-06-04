import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ActionAccountCircle from '@material-ui/icons/AccountCircle';
import '../../css/Reader/Author.css';

const styles = {
  authorIcon: {
    width: 40,
    height: 40,
  },
};

class Author extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="Author">
        <ActionAccountCircle
          className="authorPicture"
          style={styles.authorIcon}
        />
        <p className="authorName">
          {this.props.authorName}
        </p>
      </div>
    );
  }
}

Author.propTypes = {
  authorName: PropTypes.string.isRequired,
};

export default Author;
