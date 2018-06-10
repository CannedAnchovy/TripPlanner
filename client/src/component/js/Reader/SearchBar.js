import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import ActionSearch from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import lightGreen from '@material-ui/core/colors/lightGreen';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import '../../css/Reader/SearchBar.css';



class SearchBar extends Component {
  constructor(){
    super();
    this.state = {
      searchContent: '',
    }
  }

  handleSearchChange(e) {
    this.setState({
      searchContent: e.target.value,
    });
  }

  handleSearchKeyword(e, searchMode) {
    if (e.key === 'Enter' || searchMode === 'click') {
      if(this.state.searchContent !== ''){
        this.props.handleHashtagClick(this.state.searchContent);
      } else {
        this.props.handleFindJournalClick(e);
      }
    }
  }

  render(){
    return (
      <div className="SearchBar">
        <IconButton
          className="searchIcon"
        >
          <ActionSearch
            onClick={e => {this.handleSearchKeyword(e, 'click')}}
            style={{ fontSize: 50 }}
          />
        </IconButton>
        <Input
          className="searchPlace"
          placeholder="熱門搜尋：台南、高雄、情侶"
          onChange={(e) => { this.handleSearchChange(e); }}
          onKeyPress={(e) => { this.handleSearchKeyword(e, 'keypress');}}
        />
      </div>
    );
  }
  
};


export default SearchBar;
