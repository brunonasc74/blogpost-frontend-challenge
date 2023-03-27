import styled from 'styled-components';

const AuthorCard = ({ name, username }) => {
  return (
    <StyledCard>
      <h1>
        <span>Name:</span> {name}
      </h1>
      <h2>
        <span>Username:</span> {username}
      </h2>
    </StyledCard>
  );
};

AuthorCard.defaultProps = {
  name: 'name',
  username: 'username'
};

export default AuthorCard;

const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.card};
  padding: 15px;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  cursor: pointer;
  &:hover {
    span {
      color: ${({ theme }) => theme.cardTxt};
    }
  }
  h1,
  h2 {
    font-size: 1.3rem;
    font-weight: normal;
  }
  span {
    font-weight: bold;
  }

  @media (max-width: ${({ theme }) => theme.screen.lg}) {
    h1,
    h2 {
      font-size: 1.2rem;
    }
  }
  @media (max-width: ${({ theme }) => theme.screen.sm}) {
    h1,
    h2 {
      font-size: 1rem;
    }
  }
  @media (max-width: ${({ theme }) => theme.screen.xs}) {
    padding: 10px;
  }
`;
