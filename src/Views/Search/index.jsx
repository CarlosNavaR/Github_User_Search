import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../../Redux/Slices/User/user.slice';
import './index.scss';

export default function Search() {
  const userRef = useRef(null);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(setUser(userRef.current.value));
  };

  return (
    <form onSubmit={handleSubmit} className='form_user_search'>
      <input type='text' placeholder='Search...' ref={userRef} id='user' />
      <button type='submit' className='form_button'>
        Search
      </button>
    </form>
  );
}
