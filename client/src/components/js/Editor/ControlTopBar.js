import React from 'react';
import PropTypes from 'prop-types';
import SelectMenu from './SelectMenu'

const ControlTopBar = (props) => {
  const { tripIndex, dateIndex, tripsList, currentTripDateMax } = props;
  return (
    <div className="ControlTopBar">
      <SelectMenu
        className="JourneySelect"
        menuItems={tripsList}
      />
    </div>
  )
}

/*
ControlTopbar.propTypes = {
  tripIndex: PropTypes.number.isRequired,
  dateIndex: PropTypes.number.isRequired,
  tripsList: ropTypes.arrayOf(String).isRequired,
  currentTripDateMax: PropTypes.number.isRequired
};*/
  
export default ControlTopbar;