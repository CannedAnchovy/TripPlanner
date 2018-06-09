import React, { Component} from 'react';
import PropTypes from 'prop-types';
import SelectMenu from '../../../component/js/Editor/SelectMenu'
import TooltipIconButton from '../../../component/js/Editor/TooltipIconButton';
import List from '@material-ui/icons/List';
import { getDateArray } from '../../../utility/date';
import { setCurrentTripIndex, setCurrentDateIndex } from '../../../actions/Editor/currentIndexAction';
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
})

const mapDispatchToProps = (dispatch) => ({
  handleSetCurrentTripIndex: (index) => { dispatch(setCurrentTripIndex(index)); },
  handleSetCurrentDateIndex: (index) => { dispatch(setCurrentDateIndex(index)); }
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
    const { trips, tripIndex, dateIndex, handleSetCurrentTripIndex, handleSetCurrentDateIndex } = this.props;
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
          <TooltipIconButton 
            id="tooltipIconButton-attractionList" 
            title="景點清單"
            placement="right"
            onClick={() => console.log("addTrip")}
            style={styles.button}
            disabled={false}
          >
            <List className="grey-button" style={styles.icon} />
          </TooltipIconButton>
        </div>
      </div>
    );
  }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(ControlTopBar);