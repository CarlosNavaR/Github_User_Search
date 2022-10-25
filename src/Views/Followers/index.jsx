import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import { FollowCard } from '../../Components';
import { useGetFollowersByUsernameQuery } from '../../Redux/Api';

export default function Followers() {
  const { user, followers } = useParams();
  const [followersList, setFollowersList] = useState([]);
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = useGetFollowersByUsernameQuery({
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
    <div
      id='scrollableDiv'
      style={{
        overflow: 'auto',
        height: '40%',
      }}
    >
      <p>Followers of {user}</p>
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
        scrollableTarget='scrollableDiv'
        hasMore={followersList.length < followers}
      >
        {followersList?.map(item => (
          <FollowCard key={item.id} user={item} />
        ))}
      </InfiniteScroll>
    </div>
  );
}
