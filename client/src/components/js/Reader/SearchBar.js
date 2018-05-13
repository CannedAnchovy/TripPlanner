import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import ActionSearch from 'material-ui/svg-icons/action/search';
import { lightGreen500 } from 'material-ui/styles/colors';
import '../../css/Reader/SearchBar.css';


const styles = {
  searchToolUnderline: {
    borderColor: lightGreen500,
  },
  searchIcon: {
    width: 50,
    height: 50,
  },
};

class SearchBar extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="SearchBar">
        <ActionSearch
          className="searchIcon"
          style={styles.searchIcon}
        />
        <TextField
          className="searchPlace"
          hintText="想去哪裡"
          underlineFocusStyle={styles.searchToolUnderline}
        />
        <TextField
          className="searchPurpose"
          hintText="旅遊目的"
          underlineFocusStyle={styles.searchToolUnderline}
        />
        <TextField
          className="searchDay"
          hintText="旅遊天數"
          underlineFocusStyle={styles.searchToolUnderline}
        />
      </div>
    );
  }
}

export default SearchBar;
