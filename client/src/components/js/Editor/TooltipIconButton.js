import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

const TooltipIconButton = (props) => {
  const { id, title, children, handleClick } = props;

  return (
    <Tooltip id={id} title={title}>
      <IconButton onClick={handleClick}>
        {children}
      </IconButton>
    </Tooltip>
  );
}

TooltipIconButton.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func.isRequired,
}