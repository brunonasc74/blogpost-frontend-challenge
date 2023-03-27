import React, { useState, useEffect } from 'react';
import getFetch from '../utils/getFetch';
import styled from 'styled-components';
import { BsArrowReturnLeft } from 'react-icons/bs';
import { RxDividerVertical } from 'react-icons/rx';

const CommentModal = ({ isOpen, onClose, postId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getComments = async () => {
      const commentData = await getFetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
      );
      setComments(commentData);
    };
    if (isOpen) {
      getComments();
    }
  }, [isOpen, postId]);

  const handleCloseModal = () => {
    onClose();
  };

  return (
    <>
      <ModalOverlay isOpen={isOpen} onClick={handleCloseModal} />
      <StyledModal style={{ display: isOpen ? 'block' : 'none' }}>
        <div className='head'>
          <BsArrowReturnLeft className='icon' onClick={handleCloseModal} />
          <h2>Comments</h2>
        </div>
        {comments.map((comment, index) => (
          <div className='flex' key={index}>
            <div className='flex-head'>
              <h3>{comment.name}</h3>
              <RxDividerVertical className='divider' />
              <p>{comment.email}</p>
            </div>
            <p>{comment.body}</p>
          </div>
        ))}
      </StyledModal>
    </>
  );
};

export default CommentModal;

const StyledModal = styled.div`
  position: fixed;
  z-index: 99;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 110vh;
  max-width: 100%;
  height: 70%;
  overflow: auto;
  background-color: ${({ theme }) => theme.card};
  border: solid thin ${({ theme }) => theme.cardTxt};
  padding: 20px;
  border-radius: 13px;

  .head,
  .flex {
    p {
      font-size: 0.95rem;
    }
    border-bottom: solid thin ${({ theme }) => theme.text};
    .flex-head {
      display: flex;
      h3 {
        font-size: 1.1rem;
        color: ${({ theme }) => theme.cardTxt};
      }
      .divider {
        align-self: center;
        font-size: 2rem;
      }
    }
  }
  .icon {
    font-size: 2rem;
    position: relative;
    cursor: pointer;
    &:hover {
      color: ${({ theme }) => theme.cardTxt};
    }
  }
  h2 {
    font-weight: normal;
    position: absolute;
    top: -4px;
    left: 60px;
    cursor: default;
  }

  @media (max-width: ${({ theme }) => theme.screen.sm}) {
    height: 75%;
    .flex-head {
      flex-direction: column;
      p {
        margin-top: -15px;
      }
      .divider {
        display: none;
      }
    }
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  z-index: 98;
  overflow: hidden;
`;
