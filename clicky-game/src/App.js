import React from 'react';
import data from './data';
import './App.css';

class App extends React.Component {
  state = {
    players: data,
    hasBeenClicked: [],
    score: 0,
    hasWon: false
  }
  renderPlayers = () => {
    return this.state.players.map(player => <img className="player" src={player.url} onClick={this.handleClick} value={player.name}/>)
  }
  shuffleArr = () => {
    this.state.players.sort(function() {
      return .5 - Math.random();
    });
  }
  handleClick = e => {
    let player = e.currentTarget.getAttribute("value");
    let newArr = this.state.hasBeenClicked.concat(player);
    if (this.state.hasBeenClicked.includes(player)) {
      this.setState({
        score: 0,
        hasBeenClicked: []
      })
    } else {
      this.setState({
        hasBeenClicked: [...this.state.hasBeenClicked,player], 
        score: this.state.score + 1
      })
    }
    this.shuffleArr();
  }
  render() {
    return (
      <div className="App">
        <h1>Warriors Clicky Game</h1>
        {
          this.state.hasBeenClicked.length === this.state.players.length ? <h2>Congrats, you won!</h2> : <h2>Your Current Streak: {this.state.score}</h2>
        }
        {this.renderPlayers()}
      </div>
    );
  }
}

export default App;
