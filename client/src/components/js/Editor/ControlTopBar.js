import React from 'react';
import PropTypes from 'prop-types';
import SelectMenu from './SelectMenu';
import TooltipIconButton from './TooltipIconButton';
import List from '@material-ui/icons/List';
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

const ControlTopBar = (props) => {
  const { tripIndex, dateIndex, tripsList, currentTripDateMax } = props;
  return (
    <div className="controlTopBar">
      <SelectMenu
        className="tripSelect"
        menuItems={["陽明山", "日月潭", "貓空"]}
        menuWidth={260}
        defaultText="新旅行"
      />
      <SelectMenu
        className="daySelect"
        menuItems={["Day1", "Day2", "Day3"]}
        menuWidth={160}
        defaultText=""
      />
      <div className="attractionList-button-container">
        <TooltipIconButton 
          id="tooltipIconButton-attractionList" 
          title="景點清單"
          placement="buttom"
          onClick={() => console.log("addTrip")}
          style={styles.button}
        >
          <List className="grey-button" style={styles.icon} />
        </TooltipIconButton>
      </div>
    </div>
  );
}

/*
/*<SelectMenu
        className="daySelect"
        menuItems={["Day1", "Day2", "Day3"]}
        menuWidth={200}
        defaultText=""
      />
ControlTopbar.propTypes = {
  tripIndex: PropTypes.number.isRequired,
  dateIndex: PropTypes.number.isRequired,
  tripsList: ropTypes.arrayOf(String).isRequired,
  currentTripDateMax: PropTypes.number.isRequired
};*/
  
export default ControlTopBar;