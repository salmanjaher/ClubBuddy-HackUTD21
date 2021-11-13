import React from 'react';

function Club({ clubData }) {
  return (
    <div>
      {clubData.map((club) => {
        return <h4>{club.name}</h4>;
      })}
    </div>
  );
}

export default Club;
