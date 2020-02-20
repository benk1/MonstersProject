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
        <h1>Monsters Rolodex</h1>
        <SearchBox
          handleChange={this.handleChange}
          placeholder='Search Monsters'
        />
        <p className='white-text text-darken-5 sum'>
          Currently We Are Having {filteredMonsters.length} Monsters
        </p>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
