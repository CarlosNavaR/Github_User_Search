import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetFollowersByUsernameQuery } from '../../Redux/Api';

export default function Followers() {
  const { user } = useParams();
  const { data, error, isLoading } = useGetFollowersByUsernameQuery(user);
  return <div>Followers</div>;
}
