import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import CardList from './components/card-list/Card-list.component';

import SearchBox from './components/SearchBox';
const apiEndPoint = 'https://jsonplaceholder.typicode.com/users';
class App extends Component {
  state = {
    monsters: [],
    searchField: ''
  };
  async componentDidMount() {
    const { data: monsters } = await axios.get(apiEndPoint);
    //console.log('My data',posts);
    this.setState({
      monsters
    });
  }

  handleChange = e => {
    this.setState({
      searchField: e.target.value.toLowerCase()
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField)
    );

    return (
      <div className='App'>
        <input
          className='search'
          type='search'
          placeholder='Search Monsters'
          name='searchInput'
          onChange={this.handleChange}
          value={searchField}
        />
        <p className='blue-text'>
          Sum of available Monsters are: {filteredMonsters.length}
        </p>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
