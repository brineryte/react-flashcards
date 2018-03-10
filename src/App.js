import React, { Component } from 'react';
import './App.css';
import Card from './Card/Card';
import DrawButton from './DrawButton/DrawButton';

import { DB_CONFIG } from './Config/Firebase/db_config'

class App extends Component {
  constructor(props){
    super(props);

    this.updateCard = this.updateCard.bind(this);

    this.state = {
      cards: [
        {id:1, eng:"English", han:"Hanzi", pin: "Pinyin"},
        {id:2, eng:"English_2", han:"Hanzi_2", pin: "Pinyin_2"},
        {id:3, eng:"English_3", han:"Hanzi_3", pin: "Pinyin_3"},
        {id:4, eng:"English_4", han:"Hanzi_4", pin: "Pinyin_4"},
        {id:5, eng:"English_5", han:"Hanzi_5", pin: "Pinyin_5"},
        {id:6, eng:"English_6", han:"Hanzi_6", pin: "Pinyin_6"},
        {id:7, eng:"English_7", han:"Hanzi_7", pin: "Pinyin_7"}
      ],
      currentCard: {}
    }
  }
  
  componentWillMount(){
    const currentCards = this.state.cards;
    this.setState({
      cards: currentCards,
      currentCard: this.getRandomCard(currentCards)
    });
  }

  getRandomCard(currentCards){
    var card = currentCards[Math.floor(Math.random() * currentCards.length)];
    return card;
  }

  updateCard(){
    const currentCards = this.state.cards;
    this.setState({
      currentCard: this.getRandomCard(currentCards)
    });
    
    //console.log('New Card');
  }

  render() {
    return (
      <div className="App">
        <div className="cardRow">
          <Card eng={this.state.currentCard.eng} 
                  han={this.state.currentCard.han} 
                  pin={this.state.currentCard.pin}
                  />
        </div>
        <div className="buttonRow">      
          <DrawButton drawCard={this.updateCard} />
        </div>
      </div>
    );
  }
}

export default App;
