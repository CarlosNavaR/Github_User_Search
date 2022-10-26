import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserCard } from '../../Components';
import { setUser } from '../../Redux/Slices/User/user.slice';
import './index.scss';

export default function Search() {
  const userRef = useRef(null);
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(setUser(userRef.current.value));
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='form_user_search'>
        <input type='text' placeholder='Search...' ref={userRef} id='user' />
      </form>

      {user && <UserCard user={user} />}
    </>
  );
}
