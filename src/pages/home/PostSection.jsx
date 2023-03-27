import React, { useState, useEffect } from 'react';
import Card from '../../components/Card';
import styled from 'styled-components';
import getFetch from '../../utils/getFetch';

const PostSection = () => {
  const [posts, setPosts] = useState();
  const [users, setUsers] = useState();
  const [numLoaded, setNumLoaded] = useState(10);

  const getData = async () => {
    if (!posts && !users) {
      const postsData = await getFetch(
        'https://jsonplaceholder.typicode.com/posts'
      );
      const shuffledPosts = postsData.sort(() => Math.random() - 0.5);
      const usersData = await getFetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      setPosts(shuffledPosts);
      setUsers(usersData);
    }
  };

  const loadMore = () => {
    setNumLoaded(numLoaded + 5);
  };

  useEffect(() => {
    const load = () => getData();
    load();
  }, []);

  return (
    <>
      {posts &&
        posts.slice(0, numLoaded).map((post, index) => {
          const ownerPost = users.find((user) => user.id === post.userId);
          return (
            <Card
              key={index}
              title={post.title}
              desc={post.body}
              artist={ownerPost.name}
            />
          );
        })}
      <StyledButton>
        <button onClick={loadMore}>Load More</button>
      </StyledButton>
    </>
  );
};

export default PostSection;

const StyledButton = styled.div`
  text-align: center;
  margin-top: 50px;
  margin-bottom: 75px;
  button {
    cursor: pointer;
    font-size: 1.3rem;
    margin: 0;
    padding: 5px 50px;
    border-radius: 9px;
    border: 2px solid transparent;
    color: ${({ theme }) => theme.btnText1};
    background-color: ${({ theme }) => theme.btnBg1};
    &:hover {
      color: ${({ theme }) => theme.btnText2};
      background-color: ${({ theme }) => theme.btnBg2};
    }
  }
`;
