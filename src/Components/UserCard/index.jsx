import React from 'react';
import PropTypes from 'prop-types';
import { useGetUserbyUsernameQuery } from '../../Redux/Api';
import './index.scss';

export default function UserCard({ user }) {
  const { data, isLoading, error } = useGetUserbyUsernameQuery(user);

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Something went wrong {error.data.message}</p>;

  return (
    <div className='user_card'>
      <div className='user_card__avatar'>
        <img src={data.avatar_url} alt={data.name} />
        <h1>{data.name}</h1>
      </div>
    </div>
  );
}

UserCard.propTypes = {
  user: PropTypes.string.isRequired,
};
