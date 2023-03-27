import React, { useState } from 'react';
import styled from 'styled-components';
import CommentModal from './CommentModal';
import AuthorModal from './AuthorModal';

const Card = ({ title, desc, artist, postId, userId }) => {
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
  const [isAuthorModalOpen, setIsAuthorModalOpen] = useState(false);

  const handleOpenCommentModal = () => {
    setIsCommentModalOpen(true);
  };

  const handleOpenAuthorModal = () => {
    setIsAuthorModalOpen(true);
  };

  return (
    <>
      <StyledCard>
        <h2>{title}</h2>
        <p className='desc'>{desc}</p>
        <div>
          <p>
            Written by <span onClick={handleOpenAuthorModal}>{artist}</span>
          </p>
          <p className='com' onClick={handleOpenCommentModal}>
            See comments
          </p>
        </div>
      </StyledCard>
      {isCommentModalOpen && (
        <CommentModal
          isOpen={isCommentModalOpen}
          onClose={() => setIsCommentModalOpen(false)}
          postId={postId}
        />
      )}
      {isAuthorModalOpen && (
        <AuthorModal
          isOpen={isAuthorModalOpen}
          onClose={() => setIsAuthorModalOpen(false)}
          userId={userId}
        />
      )}
    </>
  );
};

Card.defaultProps = {
  title: 'Title post',
  desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, ex? Architecto minus exercitationem reiciendis! Ad suscipit similique sequi dolore corrupti.',
  artist: 'Artist name'
};

export default Card;

const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.card};
  margin-bottom: 20px;
  padding: 15px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 200px;
  position: relative;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  h2 {
    margin: 0;
    font-size: 1.6rem;
    font-weight: normal;
    color: ${({ theme }) => theme.cardTxt};
  }
  p {
    margin: 0;
    font-size: 1rem;
    line-height: 1.2rem;
    span {
      color: ${({ theme }) => theme.cardTxt};
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .desc {
    margin-top: -50px;
  }
  div {
    display: flex;
    justify-content: space-between;
    .com {
      margin-right: 30px;
      text-decoration: underline;
      cursor: pointer;
    }
  }

  @media (max-width: ${({ theme }) => theme.screen.lg}) {
    h2 {
      font-size: 1.4rem;
    }
    .desc {
      margin-top: -30px;
    }
  }
  @media (max-width: ${({ theme }) => theme.screen.sm}) {
    h2 {
      font-size: 1.3rem;
    }
    p {
      font-size: 0.95rem;
    }
    .desc {
      margin-top: -20px;
    }
  }
  @media (max-width: ${({ theme }) => theme.screen.xs}) {
    padding: 10px 5px;
    min-height: 250px;
    .desc {
      margin-top: 0;
    }
    div {
      flex-direction: column;
    }
  }
`;
