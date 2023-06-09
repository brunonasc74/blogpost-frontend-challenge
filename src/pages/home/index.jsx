import React from 'react';
import Container from '../../components/Container';
import Title from '../../components/Title';
import PostSection from './PostSection';

const Home = () => {
  return (
    <>
      <Container>
        <Title title={'All Posts'} />
        <PostSection />
      </Container>
    </>
  );
};

export default Home;
