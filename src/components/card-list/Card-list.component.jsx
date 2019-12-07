import React from 'react';

import Card from '../card/Card.component';
const CardList = ({ monsters }) => {
  const resultsOfMonsters = monsters.map(monster => (
    <Card key={monster.id} monster={monster} />
  ));

  return <div className='card-list'>{resultsOfMonsters }</div>;
};

export default CardList;
