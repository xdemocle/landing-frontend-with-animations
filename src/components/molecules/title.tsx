import { ReactNode } from 'react';
import styled from 'styled-components';

interface TitleProps {
  firstLine: string;
  lastLine: ReactNode;
}

const Container = styled.div`
  font-style: normal;
  font-size: 29.4318px;
  line-height: 111.5%;
  letter-spacing: -0.06em;
  text-align: center;
  color: #ffffff;
  margin-top: 23px;
`;

const FirstLine = styled.div`
  /* animation-delay: 0.25s !important; */
  font-weight: 700;
`;

const LastLine = styled.div`
  animation-delay: 0.15s !important;
  font-weight: 400;
`;

const Line = styled.div`
  line-height: 117%;
  margin: 0;
  overflow: hidden;
`;

const Title = ({ firstLine, lastLine }: TitleProps) => {
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

export default Title;
