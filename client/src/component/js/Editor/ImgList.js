import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../css/Editor/ImgList.css'

const ImgList = (props) => {
  const { journalIndex, length } = props;

  let imgUrlArray = new Array(length);
  for(let i=0; i<length; i++) {
    imgUrlArray[i] = require(`../../img_journal/img${journalIndex}_${i}.jpg`);
  }

  return (
    <div className="imgList">
      {imgUrlArray.map(url => {
        return <img
          className="imgList-img"
          src={url}
          width="220"
          height="144"
        />}
      )}
    </div>
  );
}

ImgList.propTypes = {
  journalIndex: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired
}

export default ImgList;