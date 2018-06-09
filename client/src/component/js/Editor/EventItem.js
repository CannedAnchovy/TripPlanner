import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import TooltipIconButton from './TooltipIconButton';
import Remove from '@material-ui/icons/Remove';
import ShortText from '@material-ui/icons/ShortText';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
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
      hover: false,
      focus: true,
      open: false,
      noteError: false
    }

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  handleCheckNote() {
    if(this.addNote.value === '')
      this.setState({ noteError: true });
    return this.addNote.value !== '';
  }

  render() {
    const { id, time, place, notes, disableBar, handleEditEvent, handleDeleteEvent, handleForceUpdate } = this.props;
    const bar = (disableBar)? <div className="nothing"></div> : <div className="verticalBarDiv"></div> ;
    const totalHeight = 15+notes.length*2.5;
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
              onChange={(e) => {
                handleEditEvent('time', 'edit', e.target.value);
                handleForceUpdate();
              }}
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
              autoFocus={this.state.focus}
              disableUnderline={true}
              fullWidth={true}
              value={place}
              onChange={(e) => {
                handleEditEvent('place', 'edit', e.target.value);
                handleForceUpdate();
                this.setState({ focus: true})
              }}
            />
          </div>
          <div className="noteButton-container">
            <TooltipIconButton 
                id="tooltipIconButton-addNote" 
                title="編輯筆記"
                placement="top"
                onClick={this.handleOpen}
                style={styles.button}
                disabled={false}
            >
              <ShortText className="grey-button" style={styles.icon} />
            </TooltipIconButton>
            <Dialog
              open={this.state.open}
              onClose={this.handleClose}
              maxWidth="sm"
              fullWidth={true}
            >
              <DialogTitle>
                <div className="modal-title">編輯備註</div>
              </DialogTitle>
              <DialogContent style={{width: '85%'}}>
                <TextField
                  id="addNote"
                  label="新增備註"
                  type="text"
                  inputProps={{ width: '70%' }}
                  margin='normal'
                  fullWidth={true}
                  inputRef={el => this.addNote = el}
                  error={this.state.noteError}
                  onKeyPress={(e) => {
                    if(e.key === 'Enter' && this.handleCheckNote()) {
                      handleEditEvent('note', 'add', this.addNote.value);
                      handleForceUpdate();
                      this.addNote.value = '';
                      this.setState({ noteError: false })
                    } 
                  }}
                />
                <DialogContentText style={{marginTop: '50px', fontSize: '1.2em'}}>
                  目前的備註
                </DialogContentText>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>備註編號</TableCell>
                      <TableCell>備註內容</TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {notes.map((note, notesIndex) => {
                      return (
                        <TableRow>
                          <TableCell>{notesIndex+1}</TableCell>
                          <TableCell>{note}</TableCell>
                          <TableCell>
                            <Button
                              color='primary'
                              onClick={() => {
                                handleEditEvent('note', 'delete', notesIndex);
                                handleForceUpdate();
                              }}
                            >
                              刪除
                            </Button>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div className="note" style={{height: noteHeight+"%"}}>
          <div className="note-ul-container">
            <ul className="note-ul">
              {notes.map((note, index) => {
                return <li className="note-li" key={note + index}>{note}</li>;
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
