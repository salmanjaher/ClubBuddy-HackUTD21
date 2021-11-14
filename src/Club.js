import React from 'react';

function Club({ clubData, addFavClub }) {
  return (
    <div>
      {clubData.map((club) => {
        return (
          <>
            <h1>Club Name:</h1>
            <h2>{club.name}</h2>
            {club.announcments ? <h1>Latest Anouncement:</h1> : <h1></h1>}
            <h2>{club.announcments}</h2>
            <button onClick={() => addFavClub(club)}>Add to favorites</button>
          </>
        );
      })}
    </div>
  );
}

export default Club;
