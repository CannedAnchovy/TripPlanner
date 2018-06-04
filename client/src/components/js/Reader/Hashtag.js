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
  hashtag: PropTypes.shape({
    tagId: PropTypes.number.isRequired,
    tagName: PropTypes.string.isRequired,
  }).isRequired,
};

export default Hashtag;
