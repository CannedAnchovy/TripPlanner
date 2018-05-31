import React, { Component } from 'react';
import PictureList from './PictureList';
import PopularAttraction from './PopularAttraction';
import '../../css/Reader/PopularAttractionTable.css';



class PopularAttracitonTable extends Component {
  constructor() {
    super();
    this.state = {
      attractionTable: [],
      focus: 4,
      listFirstDisplay: 0,
    };
    this.handleChangeAttractionDisplay = this.handleChangeAttractionDisplay.bind(this);    
  }
  
  componentWillMount(){
    document.addEventListener("keydown", this.handleChangeAttractionDisplay.bind(this));
    const popularAttractions0 = [];
    popularAttractions0.push({
      attractionId: 0,
      attractionName: '赤崁樓',
      stars: 4,
      money: 50,
      stayTime: 120,
      transportation: '公車',
      openTime: '08:30–17:30',
      address: '臺南市安平區國勝路82號'
    });
    popularAttractions0.push({
      attractionId: 1,
      attractionName: '文章牛肉湯',
      stars: 4,
      money: 50,
      stayTime: 120,
      transportation: '公車',
      openTime: '08:30–17:30',
      address: '臺南市某地方1'
    });
    popularAttractions0.push({
      attractionId: 2,
      attractionName: '四草隧道',
      stars: 4,
      money: 50,
      stayTime: 120,
      transportation: '公車',
      openTime: '08:30–17:30',
      address: '臺南市某地方2'
    });
    popularAttractions0.push({
      attractionId: 3,
      attractionName: '十鼓文創園區',
      stars: 4,
      money: 50,
      stayTime: 120,
      transportation: '公車',
      openTime: '08:30–17:30',
      address: '臺南市某地方3'
    });
    popularAttractions0.push({
      attractionId: 4,
      attractionName: '泰成水果冰',
      stars: 4,
      money: 50,
      stayTime: 120,
      transportation: '公車',
      openTime: '08:30–17:30',
      address: '臺南市某地方4'
    });
    popularAttractions0.push({
      attractionId: 5,
      attractionName: '成功大學',
      stars: 4,
      money: 50,
      stayTime: 120,
      transportation: '公車',
      openTime: '08:30–17:30',
      address: '臺南市某地方5'
    });
    popularAttractions0.push({
      attractionId: 6,
      attractionName: '依蕾特布丁',
      stars: 4,
      money: 50,
      stayTime: 120,
      transportation: '公車',
      openTime: '08:30–17:30',
      address: '臺南市某地方6'
    });
    popularAttractions0.push({
      attractionId: 7,
      attractionName: '安平豆花',
      stars: 4,
      money: 50,
      stayTime: 120,
      transportation: '公車',
      openTime: '08:30–17:30',
      address: '臺南市某地方7'
    });
    popularAttractions0.push({
      attractionId: 8,
      attractionName: '抹茶戚風蛋糕',
      stars: 4,
      money: 50,
      stayTime: 120,
      transportation: '公車',
      openTime: '08:30–17:30',
      address: '臺南市某地方8'
    });
    popularAttractions0.push({
      attractionId: 9,
      attractionName: '鱔魚意麵',
      stars: 4,
      money: 50,
      stayTime: 120,
      transportation: '公車',
      openTime: '08:30–17:30',
      address: '臺南市某地方9'
    });
    popularAttractions0.push({
      attractionId: 10,
      attractionName: '純薏仁',
      stars: 4,
      money: 50,
      stayTime: 120,
      transportation: '公車',
      openTime: '08:30–17:30',
      address: '臺南市某地方9'
    });
    const newTable = this.state.attractionTable;
    newTable.push({
      placeId: 0,
      placeName: '台南',
      popularAttractions: popularAttractions0,
    });
    this.setState({
      attractionTable: newTable,
    });
  }

  handleChangeAttractionDisplay(e, focusNum){
    console.log('display change');
    let newFocus;
    console.log(focusNum);
    if ( e.key === 'ArrowUp' && this.state.focus !== 0 ) {
      console.log('arrowup');
      newFocus = this.state.focus - 1;
      if (newFocus<this.state.listFirstDisplay) {
        this.setState({
          listFirstDisplay: newFocus,
        });
      }
    } else if ( e.key === 'ArrowDown' && this.state.focus !== this.state.attractionTable[0].popularAttractions.length - 1){
      console.log('arrowdown');
      newFocus = this.state.focus + 1;
      if (newFocus>this.state.listFirstDisplay+7) {
        this.setState({
          listFirstDisplay: newFocus-7,
        });
      }
    } else if ( focusNum !== undefined ) {
      console.log('onclick');
      newFocus = focusNum;
    } else {
      console.log('else');
      newFocus = this.state.focus;
    }
    
    this.setState({
      focus: newFocus,
    });
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleChangeAttractionDisplay.bind(this));
  }

  render() {
    return(
      <div className="PopularAttracitonTable">
        <PictureList
          place={this.state.attractionTable[0]}
          displayMode={this.props.displayMode}
          focus={this.state.focus}
          handleChangeAttractionDisplay={this.handleChangeAttractionDisplay}
          firstDisplay={this.state.listFirstDisplay}
        />
        <PopularAttraction
          displayMode={this.props.displayMode}
          place={this.state.attractionTable[0]}
          focus={this.state.focus}
        />
      </div>
    );
  }
  
}



export default PopularAttracitonTable;
