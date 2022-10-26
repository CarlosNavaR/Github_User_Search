import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

export default function FollowCard({ user }) {
  return (
    <div className='follower_card'>
      <img src={user.avatar_url} alt={user.login} />
      <h3>{user.login}</h3>
    </div>
  );
}

FollowCard.defaultProps = {
  user: {},
};

FollowCard.propTypes = {
  user: PropTypes.shape({
    avatar_url: PropTypes.string,
    html_url: PropTypes.string,
    login: PropTypes.string,
  }),
};
