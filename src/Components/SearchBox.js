import React from 'react';

const SearchBox = ({searchChange}) => {

    return (
        <div>
            <input placeholder='name' type='search' onChange={searchChange} style={{padding:'10px', marginBottom:'20px'}}/>
        </div>
    )
}

export default SearchBox