import React from 'react';

function Club({ clubData, addFavClub }) {
  return (
    <div>
      {clubData.map((club) => {
        return (
          <>
            <div class = "max-w-8xl">
            <button class = "ml-16" onClick={() => addFavClub(club)}>⭐</button>
            <label class = "ml-2 font-bold text-xl">{club.name}</label>
            {club.announcments ? <h1 class = "ml-24 underline">Latest Anouncement:</h1> : <h1></h1>}
            <h2 class = "ml-24 text-red-500 italic">{club.announcments}</h2>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Club;
