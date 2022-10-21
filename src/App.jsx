import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import { Search, Followers } from './Views';
import './Styles/General/index.scss';

function App() {
  return (
    <div className='App'>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Search />} />
          <Route path='/followers/:user' element={<Followers />} />
          <Route path='/following/:user' element={<>b</>} />
          <Route path='*' element={<h1>404</h1>} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
