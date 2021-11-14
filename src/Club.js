import React from 'react';

function Club({ clubData }) {
  return (
    <div>
      {clubData.map((club) => {
        return (
          <>
            <h1>Club Name:</h1>
            <h2>{club.name}</h2>
            {club.announcments ? <h1>Latest Anouncement:</h1> : <h1></h1>}
            <h2>{club.announcments}</h2>
          </>
        );
      })}
    </div>
  );
}

export default Club;
