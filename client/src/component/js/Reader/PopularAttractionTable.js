import React, { Component } from 'react';
import PictureList from './PictureList';
import PopularAttraction from './PopularAttraction';
import '../../css/Reader/PopularAttractionTable.css';
import ArrowBack from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';

class PopularAttracitonTable extends Component {
  constructor() {
    super();
  }



  render() {
    const place = this.props.focus.place;
    const attraction = this.props.focus.attraction;
    const journals = this.props.journals;
    // console.log(place);
    // console.log(attraction);
    const comments = [];
    for (let i = 0; i < journals.length; i += 1) {
      for (let j = 0; j < journals[i].touristAttractions.length; j += 1) {
        if (journals[i].touristAttractions[j].attractionName === this.props.attractionTable[place].popularAttractions[attraction].attractionName) {
          comments.push({
            authorName: journals[i].authorName,
            content: journals[i].touristAttractions[j].comment,
          });
        }
      }
    }
    return(
      <div className="PopularAttracitonTable">
        <div className="backJournal">
          <IconButton
            onClick={e => { this.props.handleBackJournal(e); }}
          >
            <ArrowBack
              style={{ fontSize: 50 }}
            />
          </IconButton>
        </div>
        <PictureList
          place={this.props.attractionTable[this.props.focus.place]}
          displayMode={this.props.displayMode}
          focus={this.props.focus}
          handlePopularAttractionDisplayChange={this.props.handlePopularAttractionDisplayChange}
          firstDisplay={this.props.firstDisplay}
        />
        <PopularAttraction
          displayMode={this.props.displayMode}
          place={this.props.attractionTable[this.props.focus.place]}
          focus={this.props.focus}
          comments={comments}
          handleAuthorClick={this.props.handleAuthorClick}
        />
      </div>
    );
  }
  
}



export default PopularAttracitonTable;
