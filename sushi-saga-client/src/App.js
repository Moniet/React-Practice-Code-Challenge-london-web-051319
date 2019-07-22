import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: null,
    selectedSushisNumber: 0,
    eatenSushis: [],
    money: 100,
  };

  componentDidMount() {
    this.getSushis();
  }

  getSushis() {
    fetch(API)
      .then(res => res.json())
      .then(sushis => this.setState({ sushis }));
  }

  selectFour = () => {
    const { selectedSushisNumber, sushis } = this.state;
    const noMoreSushis = ((selectedSushisNumber + 4) === sushis.length);

    this.setState(prevState => ({
      selectedSushisNumber: noMoreSushis ? 0 : (prevState.selectedSushisNumber + 4)
    }));
  };

  selectedSushis = () => {
    const { sushis, selectedSushisNumber } = this.state;
    if (sushis) {
      const selectSushis = sushis.slice(selectedSushisNumber);
      return selectSushis.slice(0, 4);
    }
  };

  eatSushi = (id, price) => {
    if (!this.state.eatenSushis.includes(id)) {
      if ((this.state.money - price) > 0) {
        this.setState(prevState => ({
          eatenSushis: [...prevState.eatenSushis, id],
          money: prevState.money - price
        }));
      }
    }
  };

  render() {
    const selectedSushis = this.selectedSushis();
    return (
      <div className="app">
        <SushiContainer
          sushis={ selectedSushis }
          selectFour={ this.selectFour }
          eatSushi={ this.eatSushi }
          eatenSushis={ this.state.eatenSushis }
        />
        <Table remainingMoney={ this.state.money } eatenSushis={ this.state.eatenSushis }/>
      </div>
    );
  }
}

export default App;
