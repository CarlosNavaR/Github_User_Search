import React from 'react';
import { useSelector } from 'react-redux';
import { Search } from './Views';
import './Styles/General/index.scss';
import { UserCard } from './Components';

function App() {
  const { user } = useSelector(state => state.user);

  return (
    <div className='App'>
      <Search />
      {user && <UserCard user={user} />}
    </div>
  );
}

export default App;
