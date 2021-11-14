import React, { useState } from 'react';

function SearchBar({clubData}) {

    const[text, setText] = useState('');
    const[suggestions, setSuggestion] = useState([]);

    const onChangeHandler = (text) => {
        let matches = []
        if (text.length > 0) {
            matches = clubData.filter(club=> {
                const regex = new RegExp(`${text}`, "gi");
                return club.name.match(regex);
            })
        }
        console.log('matches', matches)
        setSuggestion(matches)
        setText(text)
    }
    
    return (
        <div className="container">
            <input type="text" className=' col-md-12 input' style={{marginTop: 10}}
             onChange={e=>onChangeHandler(e.target.value)}
             value = {text}
            />
            {suggestions && suggestions.map((suggestion, i) =>
                <div key={i}>{suggestion.name}</div>
            )}
        </div>
    )
}

export default SearchBar
