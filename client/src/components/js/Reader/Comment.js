import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Author from './Author';
import '../../css/Reader/Comment.css';

class PictureList extends Component {
  constructor() {
    super();
  }

  render() {
    
    return (
      <div className="Comment">
        <div
          className="commentAuthor"
          onClick={e => this.props.handleAuthorClick(e, this.props.authorName)}
        >
          <Author
            authorName={this.props.authorName}
          />
        </div>
        <div className="commentSays">說：</div>
        
        <div className="commentContent">
          {this.props.content}
        </div>

      </div>
    );
  }
}

export default PictureList;
