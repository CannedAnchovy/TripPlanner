import React, { Component } from 'react';
import FavoriteJournal from './FavoriteJournal';
import Author from './Author';
import '../../css/Reader/Journal.css';

class Journal extends Component {
  constructor() {
    super();
    this.state = {
      favorite: 1,
      favoriteNum: 10,
      authorName: '台北小吃貨',
      title: '台南美食之旅',
    };
  }
  render() {
    return (
      <div className="Journal">
        <p className="journalTitle">
          {this.state.title}
        </p>
        <Author
          authorName={this.state.authorName}
        />
        <FavoriteJournal
          favorite={this.state.favorite}
          favoriteNum={this.state.favoriteNum}
        />
      </div>
    );
  }
}

export default Journal;
