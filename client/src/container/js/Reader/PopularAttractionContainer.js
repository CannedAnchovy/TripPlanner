import React, { Component } from 'react';
// import { initJournals, journalFavoriteAdd, journalFavoriteMinus } from '../../../actions/Reader/JournalAction';
import { addFavorite, deleteFavorite } from '../../../actions/favoriteListAction';
import { changeReadingJournal } from '../../../actions/Reader/JournalAction';
import { changeFirstListDisplay } from '../../../actions/Reader/attractionAction';
import { changeDisplayMode, changeReaderDisplayMode } from '../../../actions/displayModeAction';
import { connect } from 'react-redux';
import PictureList from '../../../component/js/Reader/PictureList';
import PopularAttraction from '../../../component/js/Reader/PopularAttraction';
import ArrowBack from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';

const mapStateToProps = state => ({
  displayMode: state.displayMode,
  readerDisplayMode: state.readerDisplayMode,
  journals: state.journals,
  attractions: state.attractions,
  firstListDisplay: state.firstListDisplay,
  readingJournal: state.readingJournal,
  favoriteList: state.favoriteList,
});

const mapDispatchToProps = dispatch => ({
  changeFirstListDisplay: (id) => { dispatch(changeFirstListDisplay(id)) },
  changeReaderDisplay: (mode, id, focus) => { dispatch(changeReaderDisplayMode(mode, id, focus))},
  changeReadingJournal: (id) => { dispatch(changeReadingJournal(id)) },
  addFavorite: (place, name) => { dispatch(addFavorite(place, name)) },
  deleteFavorite: (name) => { dispatch(deleteFavorite(name)) },
});
class PopularAttractionContainer extends Component {
  constructor(){
    super();

    this.handlePopularAttractionDisplayChange = this.handlePopularAttractionDisplayChange.bind(this);
  }

  componentWillMount() {
    document.addEventListener("keydown", this.handlePopularAttractionDisplayChange);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handlePopularAttractionDisplayChange);
  }

  handlePopularAttractionDisplayChange(e, focusNum){
    const place = this.props.readerDisplayMode.id;
    const focus = this.props.readerDisplayMode.focus;
    // console.log('attraction display change');
    let newFocus;
    // console.log(focusNum);
    if ( e.key === 'ArrowUp' && focus !== 0 ) {
      // console.log('arrowup');
      newFocus = focus - 1;
    } else if ( e.key === 'ArrowDown' && focus !== this.props.attractions[place].popularAttractions.length - 1){
      // console.log('arrowdown');
      newFocus = focus + 1;
    } else if ( focusNum !== undefined ) {
      // console.log('onclick');
      newFocus = focusNum;
    } else {
      // console.log('else');
      newFocus = focus;
    }
    if (newFocus<this.props.firstListDisplay) {
      this.props.changeFirstListDisplay(newFocus);
    } else if (newFocus>this.props.firstListDisplay+7) {
      this.props.changeFirstListDisplay(newFocus-7);
    }
    this.props.changeReaderDisplay('attraction', place, newFocus);
  }


  render(){
    const {
      displayMode,
      readerDisplayMode,
      attractions,
      journals,
      firstListDisplay,
      favoriteList,
      addFavorite,
      deleteFavorite,
    } = this.props;
    //console.log(readerDisplayMode);
    const place = readerDisplayMode.id;
    const attraction = readerDisplayMode.focus;

    const comments = [];
    for (let i = 0; i < journals.length; i += 1) {
      for (let j = 0; j < journals[i].touristAttractions.length; j += 1) {
        if (journals[i].touristAttractions[j].attractionName === attractions[place].popularAttractions[attraction].attractionName) {
          comments.push({
            authorName: journals[i].authorName,
            content: journals[i].touristAttractions[j].comment,
          });
        }
      }
    }

    //console.log(addFavorite);

    return(
        <div className="PopularAttractionContainer">
          <div className="backJournal">
            <IconButton
              onClick={e => { this.props.changeReaderDisplay('journal', this.props.readingJournal, -1); }}
            >
              <ArrowBack
                style={{ fontSize: 50 }}
              />
            </IconButton>
          </div>
          <PictureList
            place={attractions[readerDisplayMode.id]}
            displayMode={displayMode}
            readerDisplayMode={readerDisplayMode}
            handlePopularAttractionDisplayChange={this.handlePopularAttractionDisplayChange}
            firstDisplay={firstListDisplay}
          />
          <PopularAttraction
            displayMode={displayMode}
            place={attractions[readerDisplayMode.id]}
            readerDisplayMode={readerDisplayMode}
            comments={comments}
            favoriteList={favoriteList}
            handleAuthorClick={this.props.handleAuthorClick}
            handleFavoriteAttractionAdd={addFavorite}
            handleFavoriteAttractionMinus={deleteFavorite}
          />
        </div>
      );
    }
  
};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PopularAttractionContainer);