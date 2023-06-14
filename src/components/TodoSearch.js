import React from 'react';

import '../css/TodoSearch.css';

function TodoSearch({searchValue, setSearchValue}) {    
    return(
        <input 
        className='filter-todos' 
        placeholder="Play basketball"
        value={searchValue}
        onChange={(e) => {
            setSearchValue(e.target.value);
        }}
        />
    );
}

export { TodoSearch };