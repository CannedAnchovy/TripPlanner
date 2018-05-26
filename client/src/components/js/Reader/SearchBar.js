import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import ActionSearch from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import lightGreen from '@material-ui/core/colors/lightGreen';
import  { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import '../../css/Reader/SearchBar.css';


const styles = theme => ({
  cssUnderline: {
    '&:after': {
      backgroundColor: lightGreen[500],
    }
  },
  searchIcon: {
    width: 50,
    height: 50,
  },
});


const theme = createMuiTheme({
  palette: {
    primary: lightGreen,
  },
});


const SearchBar = (props) => {
  const { classes } = props;
  return (
    <div className="SearchBar">
      <MuiThemeProvider theme={theme}>
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
      </MuiThemeProvider>
    </div>
  );
}


export default SearchBar;
