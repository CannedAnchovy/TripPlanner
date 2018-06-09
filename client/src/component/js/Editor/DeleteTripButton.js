import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TooltipIconButton from '../../../component/js/Editor/TooltipIconButton';
import Delete from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';

class DeleteTripButton extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
    }

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
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
    const { styles, handleDeleteTrip } = this.props;
    return (
      <div>
        <TooltipIconButton 
          id="tooltipIconButton-deleteTrip" 
          title="刪除旅行"
          placement="top"
          onClick={this.handleOpen}
          style={styles.button}
          disabled={this.props.disabled}
        >
          <Delete className="grey-button" style={styles.icon} />
        </TooltipIconButton>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          maxWidth="sm"
          fullWidth={true}
        >
          <DialogTitle>
            <div className="modal-title">刪除旅行</div>
          </DialogTitle>
          <DialogContent style={{width: '85%'}}>
            <DialogContentText style={{textAlign: 'left', fontSize: '1.2em'}}>
              確定要刪除旅行嘛?
            </DialogContentText>
            <DialogContentText style={{fontSize: '1.2em'}}>
              旅行被刪除就再也回不來了喔 :(
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              <div className="modal-action-button">取消</div>
            </Button>
            <Button 
              onClick={() => { 
                this.props.handleDeleteTrip();
                this.handleClose();
            }}
              color="primary"
            >
              <div className="modal-action-button">刪除</div>
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default DeleteTripButton;

DeleteTripButton.propTypes = {
  styles: PropTypes.object.isRequired,
  handleDeleteTrip: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired
}