import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import TooltipIconButton from './TooltipIconButton';
import ShortText from '@material-ui/icons/ShortText';
import '../../css/Editor/EventItem.css';

const styles = {
  time: {
    fontSize: "1.3em",
    position: "absolute",
    left: "12%",
    top: "5%",
    color: "#6e6e6e",
    fontWeight: 400,
  },
  place: {
    fontSize: "2em",
    position: "absolute",
    width: "88%",
    left: "7%",
    top: "18%",
    color: "#6e6e6e",
    fontWeight: 400,
  },
  button: {
    width: 60,
    height: 60,
  },
  icon: {
    width: 50,
    height: 50,
  }
}

const EventItem = (props) => {
  const { id, time, place, notes } = props;
  const bar = (id!==1)? <div className="verticalBarDiv"></div> : <div className="nothing"></div> ;
  return (
    <div className="eventItem">
      <div className="time-container">
        <Input
          type="time"
          style={styles.time}
          disableUnderline={true}
          fullWidth={true}
          inputProps={{
            step: 60, // 1 min
          }}
          value={time}
        />
      </div>
      <div className="index-circle">
        <span class="index">{id}</span>
      </div>
      <div className="place-container">
        <Input
          type="text"
          style={styles.place}
          disableUnderline={true}
          fullWidth={true}
          value={place}
        />
      </div>
      <div className="noteButton-container">
        <TooltipIconButton 
            id="tooltipIconButton-addNote" 
            title="新增筆記"
            placement="left"
            onClick={() => console.log("addNote")}
            style={styles.button}
        >
          <ShortText className="grey-button" style={styles.icon} />
        </TooltipIconButton>
      </div>
      {bar}
    </div>
  );
}

EventItem.propTypes = {
  id: PropTypes.number.isRequired,
  time: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  notes: PropTypes.arrayOf(String).isRequired,
}

export default EventItem;
