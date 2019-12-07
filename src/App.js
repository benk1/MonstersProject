import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import CardList from './components/card-list/Card-list.component';
const apiEndPoint = 'https://jsonplaceholder.typicode.com/users';
class App extends Component {
  state = {
    users: []
  };
  async componentDidMount() {
    const { data: users } = await axios.get(apiEndPoint);
    //console.log('My data',posts);
    this.setState({
      users
    });
  }

  render() {
    const { users } = this.state;

    return (
      <div className='App'>
        <CardList users={users} />
      </div>
    );
  }
}

export default App;
