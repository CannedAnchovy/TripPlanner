import React from 'react';
import PropTypes from 'prop-types';
// material ui
import '../../css/Reader/Hashtag.css';



const Hashtag = (props) => {
  const {
    hashtag,
  } = props;

  return (
    <div className="Hashtag">
      {`# ${hashtag.tagName}`}
    </div>
  );
};

Hashtag.propTypes = {
  tagName: PropTypes.string.isRequired,
};

export default Hashtag;
