import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import { FollowCard } from '../../Components';
import { useGetFollowingByUsernameQuery } from '../../Redux/Api';

export default function Following() {
  const { user, following } = useParams();
  const [followersList, setFollowersList] = useState([]);
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = useGetFollowingByUsernameQuery({
    username: user,
    page,
  });

  useEffect(() => {
    if (!isLoading) {
      if (followersList.length === 0) {
        setFollowersList(data);
      } else {
        setFollowersList([...followersList, ...data]);
      }
    }
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      <div className='header-container'>
        <div className='link-back'>
          <Link to={-1}>Back</Link>
        </div>
        <div>
          <h1>
            {user} follows {following} users
          </h1>
        </div>
      </div>
      <div id='scrollableDiv'>
        <InfiniteScroll
          dataLength={followersList.length}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1rem',
            flexDirection: 'row',
          }}
          next={() => setPage(prev => prev + 1)}
          loader={<h4>Loading...</h4>}
          hasMore={followersList.length < following}
          scrollableTarget='scrollableDiv'
        >
          {followersList?.map(item => (
            <a
              href={item.html_url}
              target='_blank'
              rel='noreferrer'
              className='link_card'
            >
              <FollowCard key={item.id} user={item} />
            </a>
          ))}
        </InfiniteScroll>
      </div>
    </>
  );
}
