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
  font-weight: 700;
`;

const LastLine = styled.div`
  font-weight: 400;
`;

const Title = ({ firstLine, lastLine }: TitleProps) => {
  return (
    <Container>
      <FirstLine>{firstLine}</FirstLine>
      <LastLine>{lastLine}</LastLine>
    </Container>
  );
};

export default Title;
