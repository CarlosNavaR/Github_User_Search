import React from 'react';
import PropTypes from 'prop-types';
import { MdHomeWork } from 'react-icons/md';
import { TbWorld } from 'react-icons/tb';
import { BsPinMapFill } from 'react-icons/bs';
import { useGetUserbyUsernameQuery } from '../../Redux/Api';
import { IfExist } from '../../Helper';
import './index.scss';

export default function UserCard({ user }) {
  const { data, isLoading, error } = useGetUserbyUsernameQuery(user);

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Something went wrong {error.data.message}</p>;

  return (
    <div className='user_card'>
      <div className='user_card__avatar'>
        <img src={data.avatar_url} alt={data.name} />
      </div>
      <div className='user_card__info'>
        <span className='user_info_name'>
          {data.name} <span>( {data.login} )</span>
        </span>
        <div className='user_info_general'>
          <IfExist exist={data.company}>
            <div>
              <MdHomeWork className='user-icons' />
              <span>{data.company}</span>
            </div>
          </IfExist>

          <IfExist exist={data.blog}>
            <div>
              <TbWorld className='user-icons' />
              <a
                href={data.blog}
                className='user-links'
                target='_blank'
                rel='noreferrer'
              >
                {data.blog}
              </a>
            </div>
          </IfExist>

          <IfExist exist={data.location}>
            <div>
              <BsPinMapFill className='user-icons' />
              <span>{data.location}</span>
            </div>
          </IfExist>
        </div>
      </div>
    </div>
  );
}

UserCard.propTypes = {
  user: PropTypes.string.isRequired,
};
