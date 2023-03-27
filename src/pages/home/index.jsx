import React from 'react';
import Container from '../../components/Container';
import Title from '../../components/Title';
import PostSection from './PostSection';

const Home = () => {
  return (
    <>
      <Container>
        <Title title={'Recent Posts'} />
        <PostSection />
      </Container>
    </>
  );
};

export default Home;
