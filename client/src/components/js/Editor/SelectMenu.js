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
    fontSize: "2em",
  }
}

const ExpandIcon = (props) => {
  if(props.expanded)
    return <ExpandLessIcon className="dark-green" style={styles.expandIcon} />;
  return <ExpandMoreIcon className="dark-green" style={styles.expandIcon} />;
}

class SelectMenu extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      value: ""
    }
    
    this.selectMenu = React.createRef();
    this.container = React.createRef();

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentWillMount() {
    if(this.props.menuItems.length === 0)
      this.props.menuItems.push(this.props.defaultText);
    
    this.setState({
      value: this.props.menuItems[0]
    });

  }

  handleOpen() {
    this.setState({
      open: true
    });
  }

  handleClose(value) {
    this.setState({
      open: false,
      value: value !== null? value : this.state.value
    });
  }

  render() {
    console.log(this.state);
    console.log(this.props);

    return (
      <div className="selectMenu-container" ref={this.container}>
        <div className="selectMenu" ref={this.selectMenu}>
          <div className="text-container">
            <div className="text common-grey">{this.state.value}</div>
          </div>
          <div className="button-container">
            <IconButton 
              className="button"
              onClick={this.handleOpen}
              disableRipple={true}
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
          onClose={() => this.handleClose(null)}
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
            {this.props.menuItems.map(item => <MenuItem 
                selected={item === this.state.value}
                onClick={() => this.handleClose(item)}
                style={styles.menuItem}
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
  menuWidth: PropTypes.string.isRequired,
  defaultText: PropTypes.string.isRequired
};

export default SelectMenu;
