import React, { Component } from 'react';
import '../css/JournalReader.css';
import SearchBar from './Reader/SearchBar';
import Journal from './Reader/Journal';

class JournalReader extends Component {
  constructor() {
    super();
    this.state = {
      journals: [],
    };
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
    });
    newAttractions0.push({
      favoriteAttraction: true,
      attractionId: 1,
      attractionName: '泰成水果冰',
    });
    newAttractions0.push({
      favoriteAttraction: false,
      attractionId: 2,
      attractionName: '安平豆花',
    });
    newAttractions0.push({
      favoriteAttraction: false,
      attractionId: 3,
      attractionName: '純薏仁',
    });
    newAttractions0.push({
      favoriteAttraction: true,
      attractionId: 4,
      attractionName: '依蕾特布丁',
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
    });
    newAttractions1.push({
      favoriteAttraction: true,
      attractionId: 1,
      attractionName: '四草隧道',
    });
    newAttractions1.push({
      favoriteAttraction: false,
      attractionId: 2,
      attractionName: '泰成水果冰',
    });
    newAttractions1.push({
      favoriteAttraction: false,
      attractionId: 3,
      attractionName: '十鼓文創園區',
    });
    newAttractions1.push({
      favoriteAttraction: true,
      attractionId: 4,
      attractionName: '成功大學',
    });
    const newJournals = this.state.journals;
    newJournals.push({
      journalId: 0,
      journalDisplay: true,
      favorite: true,
      favoriteNum: 100,
      authorName: '台北小吃貨',
      title: '台南美食之旅',
      touristAttractions: newAttractions0,
      hashtags: newTags0,
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
    });
    this.setState({
      journals: newJournals,
    });
  }
  render() {
    return (
      <div className="JournalReader">
        <SearchBar />
        <div>
          <ul className="journalList">
            {this.state.journals.map(journal => (
              <div className="displayJournal" key={journal.journalId}>
                <Journal
                  journal={journal}
                />
              </div>))}
          </ul>
        </div>
      </div>
    );
  }
}

export default JournalReader;
