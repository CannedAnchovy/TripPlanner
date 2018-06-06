import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TooltipIconButton from '../../../component/js/Editor/TooltipIconButton';
import Add from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class AddTripButton extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
    }
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

  render() {
    <div>
      <TooltipIconButton 
        id="addTripButton" 
        title="新增旅行"
        placement="top"
        onClick={this.handleOpen}
        style={styles.button}
      >
        <Add className="grey-button" style={styles.icon} />
      </TooltipIconButton>
      <Dialog
        open={this.state.open}
        onClose={this.handleClose}
      >
        <DialogTitle>新增旅行</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  }
}

AddTripButton.propTypes = {
  styles: PropTypes.object.isRequired
}