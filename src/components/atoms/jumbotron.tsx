import { ReactNode } from 'react';
import styled from 'styled-components';

interface JumbotronProps {
  firstLine: string;
  lastLine: ReactNode;
}

const Container = styled.div`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-size: 70px;
  letter-spacing: -0.015em;
  line-height: 91%;
  text-align: center;
  color: #ffffff;
`;

const FirstLine = styled.div`
  font-weight: 300;
`;

const LastLine = styled.div`
  font-weight: 700;
`;

const Jumbotron = ({ firstLine, lastLine }: JumbotronProps) => {
  return (
    <Container>
      <FirstLine>{firstLine}</FirstLine>
      <LastLine>{lastLine}</LastLine>
    </Container>
  );
};

export default Jumbotron;
