import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import FilterSideBar from './Components/FilterSidebar/FilterSidebar';
import GameList from './Components/GameList/GameList';
import './App.less';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <FilterSideBar/>
      <div className = 'body'>
        <GameList/>
      </div>
    </div>
  );
}

export default App;
