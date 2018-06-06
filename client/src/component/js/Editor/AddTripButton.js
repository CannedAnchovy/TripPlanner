import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TooltipIconButton from '../../../component/js/Editor/TooltipIconButton';
import Add from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { getFormateDate} from '../../../utility/date';

class AddTripButton extends Component {
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
    return (
      <div>
        <TooltipIconButton 
          id="addTripButton" 
          title="新增旅行"
          placement="top"
          onClick={this.handleOpen}
          style={this.props.styles.button}
        >
          <Add className="grey-button" style={this.props.styles.icon} />
        </TooltipIconButton>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
        >
          <DialogTitle>
            <div className="modal-title">新增旅行</div>
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
              />
              <TextField
                id="tripDateLength"
                label="旅行天數"
                type="number"
                fullWidth={true}
                margin='normal'
                inputRef={el => this.tripDateLength = el}
                error={this.state.tripDateLengthError}
              />
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
              <div className="modal-action-button">新增旅行</div>
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default AddTripButton;

AddTripButton.propTypes = {
  styles: PropTypes.object.isRequired,
  handleAddTrip: PropTypes.func.isRequired
}