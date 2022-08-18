import { ReactNode } from 'react';
import styled from 'styled-components';
import { device } from '../../utilities/device';

interface TitleProps {
  firstLine: string;
  lastLine: ReactNode;
}

const Container = styled.div`
  font-style: normal;
  font-size: 16px;
  line-height: 111.5%;
  letter-spacing: -0.06em;
  text-align: center;
  color: #ffffff;
  margin-top: 23px;

  @media ${device.tablet} {
    font-size: 29.5px;
  }
`;

const FirstLine = styled.div`
  font-weight: 400;
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
