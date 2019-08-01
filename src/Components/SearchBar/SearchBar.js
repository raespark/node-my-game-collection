import React from 'react';
import {search} from '../../Utils/Images';
import './searchbar.less';

function SearchBar(props) {
  return (
    <div className="search-bar">
      <img className="search-icon" src={search.image} alt={search.text}/>
      <input className="search-input" onChange={props.onChange} label='Search...'/>
    </div>
  );
}

export default SearchBar;
