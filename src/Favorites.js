import React, { useState, useEffect } from 'react';
import FavoriteItem from './FavoriteItem';

function Favorites({ favClubs, clubData, handleBackAn, removeFavClub }) {
  const [array, setArray] = useState([]);
  let temp = [];

  useEffect(() => {
    favClubs
      .slice(0)
      .map((item) =>
        temp.push(clubData.filter((club) => club.name === item.name))
      );
    setArray(temp);
    temp = [];
  }, [array]);

  return (
    <>
      <div>
        <h1 class = "ml-16 font-bold text-3xl">Your Favorite Clubs</h1>
        <button class = "mt-3 mb-3 bg-yellow-500 hover:bg-yellow-600 text-black text-xl font-bold py-1 px-3 rounded border-2 border-black ml-16" onClick={handleBackAn}>Back</button>
        {array.map((item) => {
          return <FavoriteItem clubData={item} removeClub={removeFavClub} />;
        })}
      </div>
    </>
  );
}

export default Favorites;
