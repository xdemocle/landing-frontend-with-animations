import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px 27px;
  gap: 16px;

  margin: 24px auto;
  width: 425px;
  height: 257px;

  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.39) -213.5%,
    rgba(255, 255, 255, 0) 100%
  );
  box-shadow: inset 0px -1px 11px rgba(255, 255, 255, 0.17),
    inset 0px 2px 0px rgba(255, 255, 255, 0.24);
  border-radius: 8px;
`;

const HeaderTitle = styled.header`
  display: block;
  width: 100%;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 160%;
  text-align: center;
  color: #ffffff;
`;

const Main = styled.main`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  letter-spacing: -0.02em;
  text-align: left;
  color: #ffffff;
`;

const LandingCard = () => {
  return (
    <Container>
      <HeaderTitle>🚀 How To Play</HeaderTitle>
      <Main>
        <ol>
          <li>Guess the right combination of numbers</li>
          <li>Win N3,000,000 instantly</li>
        </ol>
        <div>Sounds unbelievable? Well, guess right & see for yourself!</div>
      </Main>
    </Container>
  );
};

export default LandingCard;
