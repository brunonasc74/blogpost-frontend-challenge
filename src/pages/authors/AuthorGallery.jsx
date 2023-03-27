import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AuthorCard from './AuthorCard';
import getFetch from '../../utils/getFetch';

const AuthorGallery = () => {
  const [users, setUsers] = useState();

  const getData = async () => {
    if (!users) {
      const usersData = await getFetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const shuffledusersData = usersData.sort(() => Math.random() - 0.5);
      setUsers(shuffledusersData);
    }
  };

  useEffect(() => {
    const load = () => getData();
    load();
  }, []);

  return (
    <>
      <Grid>
        {users &&
          users.map((user) => {
            return (
              <AuthorCard
                key={user.id}
                name={user.name}
                username={user.username}
                userId={user.id}
              />
            );
          })}
      </Grid>
    </>
  );
};

export default AuthorGallery;

const Grid = styled.div`
  width: 90%;
  margin: 56px auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;

  @media (max-width: ${({ theme }) => theme.screen.sm}) {
    width: 100%;
  }
`;
