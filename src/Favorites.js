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
        <h1>Your Favorite Clubs</h1>
        <button onClick={handleBackAn}>Back</button>
        {array.map((item) => {
          return <FavoriteItem clubData={item} removeClub={removeFavClub} />;
        })}
      </div>
    </>
  );
}

export default Favorites;
