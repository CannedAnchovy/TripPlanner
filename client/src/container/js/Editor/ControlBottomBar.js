import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TooltipIconButton from '../../../component/js/Editor/TooltipIconButton';
import AddTripButton from '../../../component/js/Editor/AddTripButton';
import EditTripButton from '../../../component/js/Editor/EditTripButton';
import Delete from '@material-ui/icons/Delete';
import FlightLand from '@material-ui/icons/FlightLand';
import CheckCircle from '@material-ui/icons/CheckCircle';
import ChildCare from '@material-ui/icons/ChildCare';
import CloudDownload from '@material-ui/icons/CloudDownload';
import Share from '@material-ui/icons/Share';
import '../../css/Editor/ControlButtomBar.css';
import { connect } from 'react-redux';
import { addTrip } from '../../../actions/Editor/tripAction';

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
  trip: state.trips[4]
})

const mapDispatchToProps = (dispatch) => ({
  handleAddTrip: (...data) => dispatch(addTrip(...data)),
})

class ControlBottomBar extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  handleClick(id) {
    console.log("Im " + id);
  }

  render() {
    const { trip, handleAddTrip } = this.props;
    return (
      <div className="controlButtomBar">
        <div className="button-container add">
          <AddTripButton 
            styles={styles} 
            handleAddTrip={handleAddTrip}
          />
        </div>
        <div className="button-container edit">
          <EditTripButton
            styles={styles}
            trip={trip}
            //handleEditTrip={handleEditTrip}
          />
        </div>
        <div className="button-container delete">
          <TooltipIconButton 
            id="tooltipIconButton-deleteTrip" 
            title="刪除旅行"
            placement="top"
            onClick={() => this.handleClick("deleteTrip")}
            style={styles.button}
          >
            <Delete className="grey-button" style={styles.icon} />
          </TooltipIconButton>
        </div>
        <div className="button-container save">
          <TooltipIconButton 
            id="tooltipIconButton-saveTrip" 
            title="儲存變更！"
            placement="top"
            onClick={() => this.handleClick("saveTrip")}
            style={styles.button}
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
          >
            <Share className="grey-button" style={styles.icon} />
          </TooltipIconButton>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlBottomBar);
