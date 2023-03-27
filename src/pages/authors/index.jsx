import React from 'react';
import Container from '../../components/Container';
import Title from '../../components/Title';
import AuthorGallery from './AuthorGallery';

const Authors = () => {
  return (
    <>
      <Container>
        <Title title={'All Authors'} />
        <AuthorGallery />
      </Container>
    </>
  );
};

export default Authors;
