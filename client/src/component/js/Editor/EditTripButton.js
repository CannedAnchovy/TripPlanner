import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TooltipIconButton from '../../../component/js/Editor/TooltipIconButton';
import Edit from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
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
import { getFormateDate, getDateArray } from '../../../utility/date';

const getPlaces = (events) => {
  let placeString = '';
  if (events.length === 0)
    placeString = '目前還沒有行程';
  else {
    let max = (events.length >= 3)? 3 : events.length;
    for(let i=0; i<max; i++) {
      placeString += events[i].place;
      placeString += ' ';
    }
  }
  return placeString;
}

class EditTripButton extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      trip: null,
      tripNameError: false,
      tripDateError: false
    }

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.checkTripData = this.checkTripData.bind(this);
  }

  componentWillMount() {
    //console.log('in mount');
    //console.log(this.props.trip)
    this.setState({
      trip: this.props.trip
    })
  }
  componentWillUpdate() {
    //console.log('in update');
    //console.log(this.props.trip)
    if(this.state.trip !== this.props.trip)
      this.setState({
        trip: this.props.trip
      });
  }

  handleOpen() {
    this.setState({
      open: true
    })
  }

  handleClose() {
    this.setState({
      open: false
    })
  }

  checkTripData() {
    let pass = this.tripName.value !== '' && this.tripDate.value !== '' && this.state.trip.dates.length !== 0;
    this.setState({
      tripNameError: this.tripName.value === '',
      tripDateError: this.tripDate.value === ''
    });
    return pass;
  }

  render() {
    const { trip } = this.state;

    if(trip === undefined) {
      return (
        <TooltipIconButton 
          id="editTripButton" 
          title="編輯旅行"
          placement="top"
          onClick={this.handleOpen}
          style={this.props.styles.button}
          disabled={this.props.disabled}
        >
          <Edit className="grey-button" style={this.props.styles.icon} />
        </TooltipIconButton>
      );
    } else {
      const dateArray = getDateArray(trip.startDate, trip.dates.length);
      return (
        <div>
          <TooltipIconButton 
            id="editTripButton" 
            title="編輯旅行"
            placement="top"
            onClick={this.handleOpen}
            style={this.props.styles.button}
            disabled={this.props.disabled}
          >
            <Edit className="grey-button" style={this.props.styles.icon} />
          </TooltipIconButton>
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            maxWidth="sm"
            fullWidth={true}
          >
            <DialogTitle>
              <div className="modal-title">編輯旅行</div>
            </DialogTitle>
            <DialogContent>
              <div className="modal-content">
                <TextField
                  id="tripName"
                  label="旅程名稱"
                  type="text"
                  fullWidth={true}
                  margin='normal'
                  inputRef={el => this.tripName = el}
                  value={trip.name}
                  onChange={() => {
                    const newTrip = trip;
                    trip.name = this.tripName.value;
                    this.setState({
                      trip: newTrip
                    })
                  }}
                  error={this.state.tripNameError}
                />
                <TextField
                  id="tripDate"
                  label="旅行開始日期"
                  type="date"
                  fullWidth={true}
                  margin='normal'
                  inputRef={el => {
                    this.tripDate = el;
                  }}
                  value={trip.startDate}
                  onChange={() => {
                    const newTrip = trip;
                    trip.startDate = this.tripDate.value;
                    this.setState({
                      trip: newTrip
                    })
                  }}
                  error={this.state.tripDateError}
                />
                <DialogContentText style={{marginTop: '20px', fontSize: '0.9em'}}>
                  拖曳行程以交換行程的順序
                </DialogContentText>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>第幾天</TableCell>
                      <TableCell>目前行程</TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {trip.dates.map((date, index) => {
                      return (
                        <TableRow
                          key={index}
                          draggable="true"
                          onDragStart={(e) => {
                            e.dataTransfer.setData("text", index);
                          }}
                          onDragOver={(e) => {
                            e.preventDefault();
                          }}
                          onDrop={(e) => {
                            e.preventDefault();
                            let swappingIndex = e.dataTransfer.getData("text");
                            //console.log(index);
                            //console.log(swappingIndex);
                            const newTrip = trip;
                            let date = newTrip.dates[index];
                            newTrip.dates[index] = newTrip.dates[swappingIndex];
                            newTrip.dates[swappingIndex] = date;
                            this.setState({
                              trip: newTrip,
                            });
                          }}
                        >
                          <TableCell>
                            Day{index+1}  ({dateArray[index]})
                          </TableCell>
                          <TableCell>
                            {getPlaces(date.events)}
                          </TableCell>
                          <TableCell numeric>
                            <Button
                              color='primary'
                              onClick={() => {
                                const newTrip = trip;
                                newTrip.dates.splice(index, 1);
                                this.setState({
                                  trip: newTrip,
                                })
                              }}
                            >
                              刪除
                            </Button>
                          </TableCell>
                        </TableRow>
                      )
                    })}
                    <TableRow>
                      <TableCell></TableCell>
                      <TableCell colSpan={2}>
                        <Button
                          color='primary'
                          onClick={() => {
                            const newTrip = trip;
                            newTrip.dates.push({ events: []});
                            this.setState({
                              trip: newTrip
                            })
                          }}
                        >
                          新增日期
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </DialogContent>
            <DialogActions >
              <Button onClick={this.handleClose} color="primary">
                <div className="modal-action-button">取消</div>
              </Button>
              <Button 
                onClick={() => {
                  if(this.checkTripData()) {
                    this.props.handleEditTrip(trip);
                    this.handleClose();
                  }
                }}
                color="primary"
              >
                <div className="modal-action-button">儲存變更</div>
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    }
  }
}

export default EditTripButton;

EditTripButton.propTypes = {
  styles: PropTypes.object.isRequired,
  trip: PropTypes.object,
  handleEditTrip: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired
}