import React, { useState } from 'react';
import Club from './Club';

function SearchBar({ clubData, addFavClub }) {
  const [text, setText] = useState('');
  const [suggestions, setSuggestion] = useState([]);

  const onChangeHandler = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = clubData.filter((club) => {
        const regex = new RegExp(`${text}`, 'gi');
        if (club.name.match(regex)) {
          return club;
        }
      });
    }
    setSuggestion(matches);
    setText(text);
  };

  return (
    <div className='container'>
      <input
        type='text'
        className=' col-md-12 input'
        style={{ marginTop: 10 }}
        onChange={(e) => onChangeHandler(e.target.value)}
        value={text}
      />
      {suggestions.length > 0 ? (
        <Club addFavClub={addFavClub} clubData={suggestions} />
      ) : (
        <Club addFavClub={addFavClub} clubData={clubData} />
      )}
    </div>
  );
}

export default SearchBar;
