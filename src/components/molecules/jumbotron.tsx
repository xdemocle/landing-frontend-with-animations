import { ReactNode } from 'react';
import styled from 'styled-components';
import { device } from '../../utilities/device';

interface JumbotronProps {
  firstLine: string;
  lastLine: ReactNode;
}

const Container = styled.div`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-size: 40px;
  letter-spacing: -0.015em;
  line-height: 91%;
  text-align: center;
  color: #ffffff;

  @media ${device.tablet} {
    font-size: 70px;
  }
`;

const FirstLine = styled.span`
  font-weight: 300;

  @media ${device.tablet} {
    display: block;
  }
`;

const LastLine = styled.span`
  font-weight: 700;

  @media ${device.tablet} {
    display: block;
  }
`;

const Line = styled.div`
  line-height: 117%;
  margin: 0;
  overflow: hidden;
  display: inline;

  @media ${device.tablet} {
    display: block;
  }
`;

const Jumbotron = ({ firstLine, lastLine }: JumbotronProps) => {
  return (
    <Container>
      <Line>
        <FirstLine className="slide-up">{firstLine} </FirstLine>
      </Line>
      <Line>
        <LastLine className="slide-up">{lastLine}</LastLine>
      </Line>
    </Container>
  );
};

export default Jumbotron;
