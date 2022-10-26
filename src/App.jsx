import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import { Search, Followers, Following } from './Views';
import './Styles/General/index.scss';

function App() {
  return (
    <div className='App'>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Search />} />
          <Route path='/followers/:user/:followers' element={<Followers />} />
          <Route path='/following/:user/:following' element={<Following />} />
          <Route path='*' element={<h1>404</h1>} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
