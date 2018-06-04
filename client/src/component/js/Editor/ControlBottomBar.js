import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TooltipIconButton from './TooltipIconButton';
import Add from '@material-ui/icons/Add';
import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';
import FlightLand from '@material-ui/icons/FlightLand';
import CheckCircle from '@material-ui/icons/CheckCircle';
import ChildCare from '@material-ui/icons/ChildCare';
import CloudDownload from '@material-ui/icons/CloudDownload';
import Share from '@material-ui/icons/Share';
import '../../css/Editor/ControlButtomBar.css';

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
    return (
      <div className="controlButtomBar">
        <div className="button-container add">
          <TooltipIconButton 
            id="tooltipIconButton-addTrip" 
            title="新增旅行"
            placement="top"
            onClick={() => this.handleClick("addTrip")}
            style={styles.button}
          >
            <Add className="grey-button" style={styles.icon} />
          </TooltipIconButton>
        </div>
        <div className="button-container edit">
          <TooltipIconButton 
            id="tooltipIconButton-editTrip" 
            title="編輯旅行"
            placement="top"
            onClick={() => this.handleClick("editTrip")}
            style={styles.button}
          >
            <Edit className="grey-button" style={styles.icon} />
          </TooltipIconButton>
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

export default ControlBottomBar;
