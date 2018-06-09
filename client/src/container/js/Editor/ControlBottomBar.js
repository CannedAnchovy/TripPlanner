import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TooltipIconButton from '../../../component/js/Editor/TooltipIconButton';
import AddTripButton from '../../../component/js/Editor/AddTripButton';
import EditTripButton from '../../../component/js/Editor/EditTripButton';
import DeleteTripButton from '../../../component/js/Editor/DeleteTripButton';
import FlightLand from '@material-ui/icons/FlightLand';
import CheckCircle from '@material-ui/icons/CheckCircle';
import ChildCare from '@material-ui/icons/ChildCare';
import CloudDownload from '@material-ui/icons/CloudDownload';
import Share from '@material-ui/icons/Share';
import '../../css/Editor/ControlButtomBar.css';
import { connect } from 'react-redux';
import { addTrip, editTrip, deleteTrip } from '../../../actions/Editor/tripAction';

const styles = {
  button: {
    width: 60,
    height: 60,
  },
  icon: {
    width: 50,
    height: 50,
  },
  saveButton: {
    width: 80,
    height: 80,
  },
  saveIcon: {
    width: 70,
    height: 70,
  }
}

const mapStateToProps = (state) => ({
  trip: state.editor.trips[state.editor.currentIndex.tripIndex],
  index: state.editor.currentIndex.tripIndex
})


const mapDispatchToProps = (dispatch) => ({
  handleAddTrip: (...data) => { dispatch(addTrip(...data)) },
  handleEditTrip: (index) => {
    return (trip) => { 
      dispatch(editTrip(index, trip)); 
    };
  },
  handleDeleteTrip: (index) => {
    return () => {
      dispatch(deleteTrip(index));
    };
  }
})

class ControlBottomBar extends Component {
  constructor() {
    super();
  }

  handleClick(id) {
    console.log("Im " + id);
  }

  render() {
    const { trip, index, handleAddTrip, handleEditTrip, handleDeleteTrip } = this.props;
    const disableButton = (trip === undefined);
    console.log('im controlBottomBar')
    console.log(disableButton);

    return (
      <div className="controlButtomBar">
        <div className="button-container add">
          <AddTripButton 
            styles={styles} 
            handleAddTrip={handleAddTrip}
            disabled={false}
          />
        </div>
        <div className="button-container edit">
          <EditTripButton
            styles={styles}
            trip={trip}
            handleEditTrip={handleEditTrip(index)}
            disabled={disableButton}
          />
        </div>
        <div className="button-container delete">
          <DeleteTripButton 
            styles={styles} 
            handleDeleteTrip={handleDeleteTrip(index)}
            disabled={disableButton}
          />
        </div>
        <div className="button-container save">
          <TooltipIconButton 
            id="tooltipIconButton-saveTrip" 
            title="儲存變更！"
            placement="top"
            onClick={() => this.handleClick("saveTrip")}
            style={styles.button}
            disabled={disableButton}
          >
            <CheckCircle className="dark-green-button" style={styles.icon} />
          </TooltipIconButton>
        </div>
        <div className="button-container finish">
          <TooltipIconButton 
            id="tooltipIconButton-finishTrip" 
            title="結束旅行，撰寫遊記！"
            placement="top"
            onClick={() => this.handleClick("finishTrip")}
            style={styles.button}
            disabled={disableButton}
          >
            <FlightLand className="grey-button" style={styles.icon} />
          </TooltipIconButton>
        </div>
        <div className="button-container download">
          <TooltipIconButton 
            id="tooltipIconButton-downloadTrip" 
            title="下載旅行"
            placement="top"
            onClick={() => this.handleClick("downloadTrip")}
            style={styles.button}
            disabled={disableButton}
          >
            <CloudDownload className="grey-button" style={styles.icon} />
          </TooltipIconButton>
        </div>
        <div className="button-container share">
          <TooltipIconButton 
            id="tooltipIconButton-shareTrip" 
            title="分享旅行"
            placement="top"
            onClick={() => this.handleClick("shareTrip")}
            style={styles.button}
            disabled={disableButton}
          >
            <Share className="grey-button" style={styles.icon} />
          </TooltipIconButton>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlBottomBar);
