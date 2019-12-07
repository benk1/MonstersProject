import React from 'react';

import Card from '../card/Card.component';
const CardList = ({ users }) => {
  //console.log('check', users);
  const results = users.map(user => <Card key={user.id} user={user} />);

  return <div className='card-list'>{results}</div>;
};

export default CardList;
