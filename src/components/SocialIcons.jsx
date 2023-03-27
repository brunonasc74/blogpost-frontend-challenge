import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import styled from 'styled-components';

const SocialIcons = () => {
  return (
    <StyledSocialIcons>
      <li>
        <a href='#'>
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href='#'>
          <FaFacebook />
        </a>
      </li>
      <li>
        <a href='#'>
          <FaLinkedin />
        </a>
      </li>
    </StyledSocialIcons>
  );
};

const StyledSocialIcons = styled.div`
  display: flex;
  flex-direction: row !important;
  align-items: center;
  justify-content: center;
  li {
    list-style: none;
  }
  a {
    border: 1px solid #fff;
    border-radius: 50%;
    color: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    height: 40px;
    width: 40px;
    text-decoration: none;
  }
`;

export default SocialIcons;
