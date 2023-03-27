import { FiSun, FiMoon } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Container from './Container';

const Navbar = ({ toggleTheme, theme }) => {
  return (
    <StyledNavbar>
      <Container className='nav'>
        <div>
          <Link className='title' to='/'>
            Posts!
          </Link>
        </div>
        <ul>
          <li>
            {theme === 'dark' ? (
              <FiSun className='icon' onClick={toggleTheme} />
            ) : (
              <FiMoon className='icon' onClick={toggleTheme} />
            )}
          </li>
          <li>
            <Link className='text' to='/'>
              Posts
            </Link>
          </li>
          <li>
            <Link className='text' to='/'>
              Authors
            </Link>
          </li>
        </ul>
      </Container>
    </StyledNavbar>
  );
};

export default Navbar;

const StyledNavbar = styled.nav`
  background-color: ${({ theme }) => theme.navColor};

  .nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100px;
    .title {
      font-size: 2.4em;
      text-decoration: none;
      color: inherit;
    }
    ul {
      position: relative;
      display: flex;
      justify-content: space-between;
      list-style: none;
      li {
        .text {
          font-size: 1.2em;
          text-decoration: none;
          color: inherit;
          &:hover {
            text-decoration: underline;
          }
        }
        .icon {
          position: absolute;
          bottom: 0;
          left: 20px;
          font-size: 1.7em;
        }
        &:nth-child(2) {
          padding-left: 40px;
          padding-right: 20px;
        }
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.screen.xs}) {
    .text {
      font-size: 1em;
    }
    .title {
      font-size: 1.5em !important;
    }
    .icon {
      bottom: -2px !important;
      left: 30px !important;
      font-size: 1.5em !important;
    }
  }
`;
