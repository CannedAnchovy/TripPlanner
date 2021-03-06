import React, { Component } from 'react';
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
    top: "8%",
    color: "#6e6e6e",
    fontWeight: 400,
  },
  place: {
    fontSize: "2em",
    position: "absolute",
    width: "88%",
    left: "7%",
    top: "20%",
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
};

class EventItem extends Component {
  constructor() {
    super();
  }

  render() {
    const { id, time, place, notes, disableBar } = this.props;
    const bar = (disableBar)? <div className="nothing"></div> : <div className="verticalBarDiv"></div> ;
    const totalHeight = 15+notes.length*3;
    const itemHeight = 15/(totalHeight)*100;
    const noteHeight = 100 - itemHeight;
    return (
      <div className="eventItem-container" style={{height: totalHeight+"%"}}>
        <div className="eventItem" style={{height: itemHeight+"%"}}>
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
            <span className="index">{id}</span>
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
                title="編輯筆記"
                placement="top"
                onClick={() => console.log("addNote")}
                style={styles.button}
            >
              <ShortText className="grey-button" style={styles.icon} />
            </TooltipIconButton>
          </div>
        </div>
        <div className="note" style={{height: noteHeight+"%"}}>
          <div className="note-ul-container">
            <ul className="note-ul">
              {notes.map(note => {
                return <li className="note-li">{note}</li>;
              })}
            </ul>
          </div>
        </div>
        {bar}
      </div>
    );
  }
}

EventItem.propTypes = {
  id: PropTypes.number.isRequired,
  time: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  notes: PropTypes.arrayOf(String).isRequired,
  disableBar: PropTypes.bool,
}

export default EventItem;
