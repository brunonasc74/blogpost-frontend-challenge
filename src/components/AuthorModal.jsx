import React, { useState, useEffect } from 'react';
import getFetch from '../utils/getFetch';
import styled from 'styled-components';
import { BsArrowReturnLeft } from 'react-icons/bs';
import ModalOverlay from './ModalOverlay';

const AuthorModal = ({ isOpen, onClose, userId }) => {
  const [author, setAuthor] = useState({});

  useEffect(() => {
    const getAuthor = async () => {
      const authorData = await getFetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      setAuthor(authorData);
    };
    if (isOpen) {
      getAuthor();
    }
  }, [isOpen, userId]);

  const handleCloseModal = () => {
    onClose();
  };

  return (
    <>
      <ModalOverlay isOpen={isOpen} onClick={handleCloseModal} />
      <StyledModal style={{ display: isOpen ? 'block' : 'none' }}>
        <div className='head'>
          <BsArrowReturnLeft className='icon' onClick={handleCloseModal} />
          <h2>{author.name}'s Profile</h2>
        </div>
        <div>
          <h3>Details:</h3>
          <p>
            <span>Username:</span> {author.username}
          </p>
          <p>
            <span>Email:</span> {author.email}
          </p>
          <p>
            <span>Phone:</span> {author.phone}
          </p>
          <p>
            <span>City:</span> {author.address ? author.address.city : ''}
          </p>
          <p>
            <span>Zipcode:</span>
            {author.address ? author.address.zipcode : ''}
          </p>
          <h3>
            <span>Company info:</span>
          </h3>
          <p>
            <span>Name:</span> {author.company ? author.company.name : ''}
          </p>
          <p>
            <span>Business:</span> {author.company ? author.company.bs : ''}
          </p>
          <p>
            <span>Catch Phrase:</span>
            {author.company ? author.company.catchPhrase : ''}
          </p>
        </div>
      </StyledModal>
    </>
  );
};

export default AuthorModal;

const StyledModal = styled.div`
  position: fixed;
  z-index: 99;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 55vh;
  max-width: 100%;
  min-height: 50%;
  overflow: auto;
  background-color: ${({ theme }) => theme.card};
  border: solid thin ${({ theme }) => theme.cardTxt};
  padding: 20px;
  border-radius: 13px;
  line-height: 1.1rem;
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
  h3 {
    text-decoration: underline;
  }
  span {
    font-weight: bold;
  }

  @media (max-width: ${({ theme }) => theme.screen.sm}) {
    h2 {
      font-size: 1.5rem;
      line-height: 1.6rem;
    }
  }
`;
