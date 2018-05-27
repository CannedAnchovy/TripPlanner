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
    };
  }
  
  componentWillMount(){
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
      address: '臺南市某地方4'
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

  render() {
    return(
      <div className="PopularAttracitonTable">
        <PictureList
          place={this.state.attractionTable[0]}
          displayMode={this.props.displayMode}
          focus={this.state.focus}
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
