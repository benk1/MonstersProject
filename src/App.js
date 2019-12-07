import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import CardList from './components/card-list/Card-list.component';
const apiEndPoint = 'https://jsonplaceholder.typicode.com/users';
class App extends Component {
  state = {
    monsters: []
  };
  async componentDidMount() {
    const { data: monsters } = await axios.get(apiEndPoint);
    //console.log('My data',posts);
    this.setState({
      monsters
    });
  }

  render() {
    const { monsters } = this.state;

    return (
      <div className='App'>
        <CardList monsters={monsters} />
      </div>
    );
  }
}

export default App;
