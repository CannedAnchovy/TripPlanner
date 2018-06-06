import React from 'react';
import Input from '@material-ui/core/Input';
import ActionSearch from '@material-ui/icons/Search';
import lightGreen from '@material-ui/core/colors/lightGreen';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import '../../css/Reader/SearchBar.css';

/*const theme = createMuiTheme({
  palette: {
    primary: lightGreen,
  },
});*/


const SearchBar = (props) => {
  return (
    <div className="SearchBar">
      <ActionSearch
        className="searchIcon"
        style={{ fontSize: 50 }}
      />
      <Input
        className="searchPlace"
        placeholder="想去哪裡"
      />
      <Input
        className="searchPurpose"
        placeholder="旅遊目的"
      />
      <Input
        className="searchDay"
        placeholder="旅遊天數"
      />
    </div>
  );
};


export default SearchBar;
