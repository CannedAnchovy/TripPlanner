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
import { getFormateDate } from '../../../utility/date';
import { Tab } from '@material-ui/core';

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
    return placeString;
  }
}

class EditTripButton extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      tripNameError: false,
      tripDateLengthError: false
    }

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.checkTripData = this.checkTripData.bind(this);
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
    let pass = (this.tripName.value !== '' && this.tripDateLength.value > 0);
    this.setState({
      tripNameError: this.tripName.value === '',
      tripDateLengthError: this.tripDateLength.value <= 0,
    });
    return pass;
  }

  render() {
    const { trip } = this.props;
    return (
      <div>
        <TooltipIconButton 
          id="editTripButton" 
          title="編輯旅行"
          placement="top"
          onClick={this.handleOpen}
          style={this.props.styles.button}
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
                defaultValue={trip.name}
                error={this.state.tripNameError}
              />
              <TextField
                id="tripDate"
                label="旅行開始日期"
                type="date"
                defaultValue={getFormateDate()}
                fullWidth={true}
                margin='normal'
                inputRef={el => {
                  this.tripDate = el;
                }}
                defaultValue={trip.startDate}
              />
              <DialogContentText style={{marginTop: '20px', fontSize: '0.9em'}}>
                拖曳行程以改變行程的順序
              </DialogContentText>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>第幾天</TableCell>
                    <TableCell>目前行程</TableCell>
                    <TableCell>操作按鈕</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {trip.dates.map((date, index) => {
                    return (
                      <TableRow>
                        <TableCell>
                          Day{index+1}
                        </TableCell>
                        <TableCell>
                          {getPlaces(date.events)}
                        </TableCell>
                        <TableCell numeric>
                          <Button
                            color='primary'
                          >
                            -
                          </Button>
                        </TableCell>
                      </TableRow>
                    )
                  })}
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
                  this.props.handleAddTrip(
                    this.tripName.value,
                    this.tripDate.value,
                    this.tripDateLength.value
                  );
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

export default EditTripButton;

EditTripButton.propTypes = {
  styles: PropTypes.object.isRequired,
  trip: PropTypes.object.isRequired,
  handleEditTrip: PropTypes.func.isRequired
}