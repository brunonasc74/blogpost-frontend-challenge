import React, { useState } from 'react';
import styled from 'styled-components';
import CommentModal from './CommentModal';

const Card = ({ title, desc, artist, postId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <StyledCard>
        <h2>{title}</h2>
        <p className='desc'>{desc}</p>
        <div>
          <p>
            Written by <span>{artist}</span>
          </p>
          <p className='com' onClick={handleOpenModal}>
            See comments
          </p>
        </div>
      </StyledCard>
      {isModalOpen && (
        <CommentModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          postId={postId}
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
