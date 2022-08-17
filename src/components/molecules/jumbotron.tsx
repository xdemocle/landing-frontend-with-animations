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

const Line = styled.div`
  line-height: 117%;
  margin: 0;
  overflow: hidden;
`;

const Jumbotron = ({ firstLine, lastLine }: JumbotronProps) => {
  return (
    <Container>
      <Line>
        <FirstLine className="slide-up">{firstLine}</FirstLine>
      </Line>
      <Line>
        <LastLine className="slide-up">{lastLine}</LastLine>
      </Line>
    </Container>
  );
};

export default Jumbotron;
