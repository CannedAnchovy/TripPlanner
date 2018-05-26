import React, { Component } from 'react';
import '../css/JournalReader.css';
import JournalReader from './JournalReader';

class JournalTable extends Component {
  constructor() {
    super();
    this.state = {
      journals: [],
    };

    this.handleAttractionDisplayChange = this.handleAttractionDisplayChange.bind(this);
    this.handleFavoriteJournalClick = this.handleFavoriteJournalClick.bind(this);
    this.handleFavoriteTouristAttractionClick = this.handleFavoriteTouristAttractionClick.bind(this);
  }
  componentWillMount() {
    const newTags0 = [];
    newTags0.push({
      tagName: '美食',
      tagId: 0,
    });
    newTags0.push({
      tagName: '情侶',
      tagId: 1,
    });
    newTags0.push({
      tagName: '台南',
      tagId: 2,
    });
    newTags0.push({
      tagName: '三日遊',
      tagId: 3,
    });
    const newAttractions0 = [];
    newAttractions0.push({
      favoriteAttraction: true,
      attractionId: 0,
      attractionName: '文章牛肉湯',
      stayTime: 120,
      stars: 4,
      money: 50,
      comment: '好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃',
    });
    newAttractions0.push({
      favoriteAttraction: true,
      attractionId: 1,
      attractionName: '泰成水果冰',
      stayTime: 120,
      stars: 4,
      money: 50,
      comment: 'Gooooood!!',
    });
    newAttractions0.push({
      favoriteAttraction: false,
      attractionId: 2,
      attractionName: '安平豆花',
      stayTime: 120,
      stars: 4,
      money: 50,
      comment: 'Gooooood!!',
    });
    newAttractions0.push({
      favoriteAttraction: false,
      attractionId: 3,
      attractionName: '純薏仁',
      stayTime: 120,
      stars: 4,
      money: 50,
      comment: 'Gooooood!!',
    });
    newAttractions0.push({
      favoriteAttraction: true,
      attractionId: 4,
      attractionName: '依蕾特布丁',
      stayTime: 120,
      stars: 4,
      money: 50,
      comment: 'Gooooood!!',
    });
    newAttractions0.push({
      favoriteAttraction: false,
      attractionId: 5,
      attractionName: '鱔魚意麵',
      stayTime: 120,
      stars: 4,
      money: 50,
      comment: 'Gooooood!!',
    });
    newAttractions0.push({
      favoriteAttraction: true,
      attractionId: 6,
      attractionName: '抹茶戚風蛋糕',
      stayTime: 120,
      stars: 4,
      money: 50,
      comment: 'Gooooood!!',
    });
    const newTags1 = [];
    newTags1.push({
      tagName: '家族',
      tagId: 0,
    });
    newTags1.push({
      tagName: '人文',
      tagId: 1,
    });
    newTags1.push({
      tagName: '二日遊',
      tagId: 2,
    });
    const newAttractions1 = [];
    newAttractions1.push({
      favoriteAttraction: true,
      attractionId: 0,
      attractionName: '赤崁樓',
      stayTime: 120,
      stars: 4,
      money: 50,
      comment: 'Gooooood!!',
    });
    newAttractions1.push({
      favoriteAttraction: true,
      attractionId: 1,
      attractionName: '四草隧道',
      stayTime: 120,
      stars: 4,
      money: 50,
      comment: 'Gooooood!!',
    });
    newAttractions1.push({
      favoriteAttraction: false,
      attractionId: 2,
      attractionName: '泰成水果冰',
      stayTime: 120,
      stars: 4,
      money: 50,
      comment: 'Gooooood!!',
    });
    newAttractions1.push({
      favoriteAttraction: false,
      attractionId: 3,
      attractionName: '十鼓文創園區',
      stayTime: 120,
      stars: 4,
      money: 50,
      comment: 'Gooooood!!',
    });
    newAttractions1.push({
      favoriteAttraction: true,
      attractionId: 4,
      attractionName: '成功大學',
      stayTime: 120,
      stars: 4,
      money: 50,
      comment: 'Gooooood!!',
    });
    newAttractions1.push({
      favoriteAttraction: true,
      attractionId: 5,
      attractionName: '文章牛肉湯',
      stayTime: 120,
      stars: 4,
      money: 50,
      comment: 'Gooooood!!',
    });
    const newTags2 = [];
    newTags2.push({
      tagName: '網美',
      tagId: 0,
    });
    newTags2.push({
      tagName: '閨密行',
      tagId: 1,
    });
    newTags2.push({
      tagName: '二日遊',
      tagId: 2,
    });
    newTags2.push({
      tagName: '高雄',
      tagId: 3,
    });
    const newAttractions2 = [];
    newAttractions2.push({
      favoriteAttraction: true,
      attractionId: 0,
      attractionName: '集盒貨櫃聚落',
      stayTime: 120,
      stars: 4,
      money: 50,
      comment: 'Gooooood!!',
    });
    newAttractions2.push({
      favoriteAttraction: true,
      attractionId: 1,
      attractionName: '旗津彩虹教堂',
      stayTime: 120,
      stars: 4,
      money: 50,
      comment: 'Gooooood!!',
    });
    newAttractions2.push({
      favoriteAttraction: false,
      attractionId: 2,
      attractionName: '駁二藝術特區',
      stayTime: 120,
      stars: 4,
      money: 50,
      comment: 'Gooooood!!',
    });
    newAttractions2.push({
      favoriteAttraction: false,
      attractionId: 3,
      attractionName: '美麗島車站',
      stayTime: 120,
      stars: 4,
      money: 50,
      comment: 'Gooooood!!',
    });
    newAttractions2.push({
      favoriteAttraction: true,
      attractionId: 4,
      attractionName: '東門茶樓',
      stayTime: 120,
      stars: 4,
      money: 50,
      comment: 'Gooooood!!',
    });
    newAttractions2.push({
      favoriteAttraction: true,
      attractionId: 5,
      attractionName: '西子灣',
      stayTime: 120,
      stars: 4,
      money: 50,
      comment: 'Gooooood!!',
    });
    newAttractions2.push({
      favoriteAttraction: true,
      attractionId: 6,
      attractionName: '高雄草衙道',
      stayTime: 120,
      stars: 4,
      money: 50,
      comment: 'Gooooood!!',
    });
    newAttractions2.push({
      favoriteAttraction: true,
      attractionId: 7,
      attractionName: '義大世界',
      stayTime: 120,
      stars: 4,
      money: 50,
      comment: 'Gooooood!!',
    });
    newAttractions2.push({
      favoriteAttraction: true,
      attractionId: 8,
      attractionName: '瑞峰夜市',
      stayTime: 120,
      stars: 4,
      money: 50,
      comment: 'Gooooood!!',
    });

    let newJournals = this.state.journals;
    newJournals.push({
      journalId: 0,
      journalDisplay: true,
      favorite: true,
      favoriteNum: 100,
      authorName: '台北小吃貨',
      title: '台南美食之旅',
      touristAttractions: newAttractions0,
      hashtags: newTags0,
      display: {
        left: false,
        right: true,
        firstDisplay: 0,
      },
    });
    newJournals.push({
      journalId: 1,
      journalDisplay: true,
      favorite: true,
      favoriteNum: 95,
      authorName: '台中健走哥',
      title: '台南直直撞',
      touristAttractions: newAttractions1,
      hashtags: newTags1,
      display: {
        left: false,
        right: true,
        firstDisplay: 0,
      },
    });
    newJournals.push({
      journalId: 2,
      journalDisplay: true,
      favorite: true,
      favoriteNum: 289,
      authorName: '還是當肥宅好了',
      title: '高雄網美之旅',
      touristAttractions: newAttractions2,
      hashtags: newTags2,
      display: {
        left: false,
        right: true,
        firstDisplay: 0,
      },
    });
    this.setState({
      journals: newJournals,
    });
    newJournals = this.state.journals;
    for(let i=0; i < this.state.journals.length; i += 1) {
      if(newJournals[i].touristAttractions.length<=5){
        newJournals[i].display.right = false;
      } else {
        newJournals[i].display.right = true;
      }
      newJournals[i].display.left = false;
    }
    this.setState({
      journals: newJournals,
    });
  }
  
  handleAttractionDisplayChange(e, id, dir){
    const newJournals = this.state.journals;
    const newDisplay = this.state.journals[id].display;
    if(dir === 'left' && newDisplay.left === true) {
      newDisplay.firstDisplay = newDisplay.firstDisplay - 1;
    } else if(dir === 'right' && newDisplay.right === true) {
      newDisplay.firstDisplay = newDisplay.firstDisplay + 1;
    }
    if(newDisplay.firstDisplay >= this.state.journals[id].touristAttractions.length-5) {
      newDisplay.right = false;
    } else {
      newDisplay.right = true;
    }
    if(newDisplay.firstDisplay <= 0) {
      newDisplay.left = false;
    } else {
      newDisplay.left = true
    }
    newJournals[id].display = newDisplay
    this.setState({
      journals: newJournals,
    });
  }

  handleFavoriteJournalClick(e, id) {
    const newJournals = this.state.journals;
    if(newJournals[id].favorite === true) {
      newJournals[id].favorite = false;
      newJournals[id].favoriteNum = newJournals[id].favoriteNum - 1;
    } else {
      newJournals[id].favorite = true;
      newJournals[id].favoriteNum = newJournals[id].favoriteNum + 1;
    }
    this.setState({
      journals: newJournals,
    });
  }

  handleFavoriteTouristAttractionClick(e, journalId, AttractionId) {
    const newJournals = this.state.journals;
    const newAttractionInfo = this.state.journals[journalId].touristAttractions[AttractionId];
    if(newAttractionInfo.favoriteAttraction === true){
      newAttractionInfo.favoriteAttraction = false;
    } else {
      newAttractionInfo.favoriteAttraction = true;
    }
    newJournals[journalId].touristAttractions[AttractionId] = newAttractionInfo;
    this.setState({
      journals: newJournals,
    });
  }

  render() {
    const journals = this.state.journals;
    console.log(journals);
    return (
      <JournalReader
        journals = {journals}
        handleFavoriteJournalClick = {this.handleFavoriteJournalClick}
        handleFavoriteTouristAttractionClick = {this.handleFavoriteTouristAttractionClick}
        handleAttractionDisplayChange = {this.handleAttractionDisplayChange}
      />
    );
  }
}

export default JournalTable;
