import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import TooltipIconButton from './TooltipIconButton';
import Remove from '@material-ui/icons/Remove';
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
    fontSize: "1.8em",
    position: "absolute",
    width: "88%",
    left: "7%",
    top: "24%",
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
  },
  removeButton: {
    width: 55,
    height: 55
  },
  removeIcon: {
    width: 40,
    height: 40
  }
};

const IndexButton = (props) => {
  if(props.hover === true) {
    return <TooltipIconButton
      id='DeleteEventButton'
      title='刪除行程'
      placement='bottom'
      style={styles.removeButton}
      onClick={props.handleClick}
      disabled={false}
    >
      <Remove className="index addIcon" style={styles.removeIcon} />
    </TooltipIconButton>;
  } else if (props.id < 10){
    return <span className="index">{props.id}</span>;
  } else {
    return <span className="index doubleDigits">{props.id}</span>;
  }
}

class EventItem extends Component {
  constructor() {
    super();
    this.state = {
      hover: false
    }
  }

  render() {
    const { id, time, place, notes, disableBar, handleDeleteEvent } = this.props;
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
          <div 
            className="index-circle" 
            onMouseEnter={() => {
              this.setState({ hover: true });
            }}
            onMouseLeave={() => {
              this.setState({ hover: false });
            }}
          >
            <IndexButton
              hover={this.state.hover}
              id={id}
              handleClick={handleDeleteEvent}
            />
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
                disabled={false}
            >
              <ShortText className="grey-button" style={styles.icon} />
            </TooltipIconButton>
          </div>
        </div>
        <div className="note" style={{height: noteHeight+"%"}}>
          <div className="note-ul-container">
            <ul className="note-ul">
              {notes.map(note => {
                return <li className="note-li" key={note}>{note}</li>;
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
