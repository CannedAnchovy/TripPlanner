import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TooltipIconButton from '../../../component/js/Editor/TooltipIconButton';
import List from '@material-ui/icons/List';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class FavoriteListButton extends Component {
  constructor() {
    super();
    this.state = {
      open: false
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
    const { styles, favoriteList, handleAddEvent, handleDeleteAttraction } = this.props;
    return (
      <div>
        <TooltipIconButton 
          id="FavoriteListButton" 
          title="景點清單"
          placement="right"
          onClick={this.handleOpen}
          style={styles.button}
        >
          <List className="grey-button" style={this.props.styles.icon} />
        </TooltipIconButton>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          maxWidth="sm"
          fullWidth={true}
        >
          <DialogTitle>
            <div className="modal-title">景點清單</div>
          </DialogTitle>
          <DialogContent>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>地點</TableCell>
                  <TableCell>景點名稱</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {favoriteList.map((attraction, index) => {
                  return (
                    <TableRow>
                      <TableCell>{attraction.place}</TableCell>
                      <TableCell>{attraction.name}</TableCell>
                      <TableCell>
                        <Button
                          color='primary'
                          onClick={() => {
                            handleAddEvent({
                              time: '12:00',
                              place: attraction.name,
                              notes: []
                            })
                          }}
                        >
                          新增至行程
                        </Button>
                        <Button
                          color='primary'
                          onClick={() => {
                            handleDeleteAttraction(attraction.name)
                          }}
                        >
                          刪除景點
                        </Button>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </DialogContent>
          <DialogActions >
            <Button onClick={this.handleClose} color="primary">
              <div className="modal-action-button">關閉</div>
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default FavoriteListButton;

FavoriteListButton.propTypes = {
  styles: PropTypes.object.isRequired,
  favoriteList: PropTypes.arrayOf(Object).isRequired,
  handleAddEvent: PropTypes.func.isRequired,
  handleDeleteAttraction: PropTypes.func.isRequired,
}