import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

const TooltipIconButton = (props) => {
  const { id, title, placement, style, onClick, disabled, children } = props;
  return (
    <Tooltip id={id} title={title} placement={placement}>
      <div style={{display: 'invisible'}}>
        <IconButton style={style} onClick={onClick} disabled={disabled}>
          {children}
        </IconButton>
      </div>
    </Tooltip>
  );
}

TooltipIconButton.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  placement: PropTypes.string.isRequired,
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
  onClick : PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired
}

export default TooltipIconButton;