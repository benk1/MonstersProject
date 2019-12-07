import React from 'react';
const Card = ({ user }) => {
  //console.log(user);
  return (
    <div className='card-container'>
      <img
        src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
        alt=''
      />
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
};

export default Card;
