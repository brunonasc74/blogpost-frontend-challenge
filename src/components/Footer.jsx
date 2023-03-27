import React from 'react';
import styled from 'styled-components';
import Container from './Container';
import SocialIcons from './SocialIcons';

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <h2>Posts!</h2>
        <div className='flex'>
          <ul>
            <li className='none'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li>+55 (11) 11111-1111</li>
            <li>posts@project.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>

          <SocialIcons />
        </div>
        <p>&copy; 2023 Posts!. All rights reserved</p>
      </Container>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.footer};
  color: #fff;
  padding: 100px 0 60px;
  h2 {
    font-size: 2rem;
    margin: 0;
    text-align: center;
  }
  .flex {
    display: flex;
    align-items: center;
    & > div,
    & > ul {
      flex: 1;
    }
    ul {
      list-style-type: none;
      li {
        margin-bottom: 20px;
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
      .none:hover {
        text-decoration: none;
        cursor: auto;
      }
    }
    @media (max-width: 768px) {
      flex-direction: column;
      text-align: center;
    }
  }
  p {
    text-align: right;
  }
  @media (max-width: 768px) {
    text-align: center;
    ul {
      padding: 0;
    }
    p {
      text-align: center;
    }
  }
`;
