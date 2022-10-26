import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MdHomeWork } from 'react-icons/md';
import { TbWorld } from 'react-icons/tb';
import { HiUsers } from 'react-icons/hi';
import { BsPinMapFill } from 'react-icons/bs';
import { BiGitRepoForked } from 'react-icons/bi';
import { setFollowers, setFollowing } from '../../Redux/Slices/User/user.slice';
import { useGetUserbyUsernameQuery } from '../../Redux/Api';
import { IfExist } from '../../Helper';
import imageNotFound from '../../Assets/Astronaut-amico.png';
import './index.scss';

export default function UserCard({ user }) {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useGetUserbyUsernameQuery(user);

  useEffect(() => {
    if (data) {
      dispatch(setFollowers(data.followers));
      dispatch(setFollowing(data.following));
    }
  }, [data]);

  if (isLoading) return <p>Loading...</p>;

  if (error)
    return (
      <div className='not_found_container'>
        <p>User {error.data.message}</p>
        <img src={imageNotFound} alt='not found' className='image-notFound' />
      </div>
    );

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
        <div className='user_info_profile'>
          <IfExist exist={data.followers}>
            <div>
              <Link
                to={`/followers/${user}/${data.followers}`}
                className='user-links'
              >
                <HiUsers className='user-icons' />
                <span>{data.followers} Followers</span>
              </Link>
            </div>
          </IfExist>
          <IfExist exist={data.following}>
            <div>
              <Link to={`/following/${user}`} className='user-links'>
                <HiUsers className='user-icons' />
                <span>{data.following} Following</span>
              </Link>
            </div>
          </IfExist>
          <IfExist exist={data.public_repos}>
            <div>
              <BiGitRepoForked className='user-icons' />
              <span>{data.public_repos} Repos</span>
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
