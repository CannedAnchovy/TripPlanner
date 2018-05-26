import React from 'react';
import '../css/Home.css';
import  { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import lightGreen from '@material-ui/core/colors/lightGreen';
import Button from '@material-ui/core/Button';

const theme = createMuiTheme({
  palette: {
    primary: lightGreen,
  },
});


const Home = (props) => {
  const {
    handleMainDisplayChange,
  } = props;

  return (
    <div className="Home">
      <p className="homeTitle">TRIP PLANNER</p>
      <p className="homeSubtitle">就算只想當一塊會呼吸的肉，也要出門走走</p>
      <MuiThemeProvider theme={theme}>
      <Button 
        variant="raised"
        color="primary"
        size="large"
        style={{ fontSize: 25, color: '#505050' }}
        onClick={(e) => { handleMainDisplayChange(e, 'editor_reader'); }}
        className="startPlanButton">
        開始我的旅程
      </Button>
      </MuiThemeProvider>
      <div className="homeBottomBar">
        <p>© 2018 by 還是當肥宅好了 with create React app</p>
      </div>
    </div>);
};


export default Home;
