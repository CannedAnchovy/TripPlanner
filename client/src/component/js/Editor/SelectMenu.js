import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Popover from '@material-ui/core/Popover';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import '../../css/Editor/SelectMenu.css'

const styles = {
  expandIcon: {
  	width: 45,
    height: 45
  },
  menuItem: {
    fontSize: "1.5em",
  }
}

const ExpandIcon = (props) => {
  if(props.expanded)
    return <ExpandLessIcon className="dark-green-button" style={styles.expandIcon} />;
  return <ExpandMoreIcon className="dark-green-button" style={styles.expandIcon} />;
}

class SelectMenu extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
    }

    this.selectMenu = React.createRef();
    this.container = React.createRef();

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    this.setState({
      open: true
    });
  }

  handleClose(value) {
    this.setState({
      open: false
    });
  }

  render() {
    const { menuItems, menuWidth, defaultText, className, index, onChange } = this.props;

    return (
      <div className={`selectMenu-container ${className}-selectMenu-container`} ref={this.container}>
        <div className={`selectMenu ${className}-selectMenu`} ref={this.selectMenu}>
          <div className={`text-container ${className}-text-container`}>
            <div className={`text ${className}-text common-grey`}>{(menuItems.length === 0)? defaultText : menuItems[index]}</div>
          </div>
          <div className={`button-container ${className}-button-container`}>
            <IconButton 
              className={`button ${className}-button`}
              onClick={this.handleOpen}
              disableRipple={true}
              disabled={menuItems.length === 0}
            >
              <ExpandIcon expanded={this.state.open}/>
            </IconButton>
          </div>
        </div>
        <Popover
          container={this.container.current}
          style={styles.popover}
          open={this.state.open}
          anchorEl={this.selectMenu.current}
          onClose={() => this.handleClose()}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <MenuList style={{width: this.props.menuWidth}}>
            {this.props.menuItems.map((item, itemIndex) => <MenuItem 
                selected={itemIndex === index}
                onClick={() => {
                  this.handleClose();
                  onChange(itemIndex);
                }}
                style={styles.menuItem}
                key={item}
              >
                {item}
              </MenuItem>
            )}
          </MenuList>
        </Popover>
      </div>
    );
  }
}

SelectMenu.propTypes = {
  menuItems: PropTypes.arrayOf(String).isRequired,
  menuWidth: PropTypes.number.isRequired,
  defaultText: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SelectMenu;
