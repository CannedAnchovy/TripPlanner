import React, { Component} from 'react';
import PropTypes from 'prop-types';
import SelectMenu from '../../../component/js/Editor/SelectMenu'
import FavoriteListButton from '../../../component/js/Editor/FavoriteListButton';
import List from '@material-ui/icons/List';
import { getDateArray } from '../../../utility/date';
import { setCurrentTripIndex, setCurrentDateIndex } from '../../../actions/Editor/currentIndexAction';
import { addEvent } from '../../../actions/Editor/eventAction';
import { deleteFavorite } from '../../../actions/favoriteListAction';
import { connect } from 'react-redux';
import '../../css/Editor/ControlTopBar.css';

const styles = {
  button: {
    width: 60,
    height: 60,
  },
  icon: {
    width: 50,
    height: 50,
  }
}

const mapStateToProps = (state) => ({
  trips: state.editor.trips,
  tripIndex: state.editor.currentIndex.tripIndex,
  dateIndex: state.editor.currentIndex.dateIndex,
  favoriteList: state.favoriteList
})

const mapDispatchToProps = (dispatch) => ({
  handleSetCurrentTripIndex: (index) => { dispatch(setCurrentTripIndex(index)); },
  handleSetCurrentDateIndex: (index) => { dispatch(setCurrentDateIndex(index)); },
  handleAddEvent: (tripIndex, dateIndex) => {
    return (data) => {
      return dispatch(addEvent(tripIndex, dateIndex, data));
    };
  },
  handleDeleteAttraction: (name) => { dispatch(deleteFavorite(name)); }
})

const getTripNameArray = (trips) => {
  let array = [];
  for(let i=0; i<trips.length; i++) {
    array.push(trips[i].name);
  }
  return array;
}

class ControlTopBar extends Component {
  constructor() {
    super();
  }

  render() {
    const { trips, tripIndex, dateIndex, favoriteList, handleSetCurrentTripIndex, handleSetCurrentDateIndex, handleAddEvent, handleDeleteAttraction } = this.props;
    const trip = trips[tripIndex];

    let tripNameArray, dateArray;
    if(trip !== undefined) {
      tripNameArray = getTripNameArray(trips);
      dateArray = getDateArray(trip.startDate, trip.dates.length);
    } else {
      tripNameArray = dateArray = [];
    }

    return (
      <div className="controlTopBar">
        <SelectMenu
          className="tripSelect"
          menuItems={tripNameArray}
          menuWidth={260}
          defaultText="尚無旅行"
          index={tripIndex}
          onChange={handleSetCurrentTripIndex}
        />
        <SelectMenu
          className="daySelect"
          menuItems={dateArray}
          menuWidth={180}
          defaultText="-------"
          index={dateIndex}
          onChange={handleSetCurrentDateIndex}
        />
        <div className="attractionList-button-container">
          <FavoriteListButton
            styles={styles}
            favoriteList={favoriteList}
            handleAddEvent={handleAddEvent(tripIndex, dateIndex)}
            handleDeleteAttraction={handleDeleteAttraction}
          />
        </div>
      </div>
    );
  }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(ControlTopBar);