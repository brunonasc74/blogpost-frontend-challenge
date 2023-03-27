import styled from 'styled-components';

const Title = ({ title }) => {
  return (
    <StyledTitle>
      <h1>{title}</h1>
      <div className='line'></div>
    </StyledTitle>
  );
};

Title.defaultProps = {
  title: 'Title'
};

export default Title;

const StyledTitle = styled.div`
  margin: 25px 0;
  h1 {
    margin-left: 15px;
    font-size: 1.5rem;
    font-weight: normal;
  }
  .line {
    height: 2px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.text};
  }

  @media (max-width: ${({ theme }) => theme.screen.xs}) {
    margin: 18px 0;
    h1 {
      margin-bottom: 7px;
      font-size: 1.3rem;
    }
  }
`;
