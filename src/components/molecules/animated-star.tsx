import { useEffect, useState } from 'react';
import styled from 'styled-components';
import StaticStar from './static-star';

type ObjectType = {
  [key: string]: {
    delay?: number;
    bottom?: string;
    left?: string;
  };
};

const starPositions: ObjectType = {
  '1': {
    bottom: '5%',
    left: '10%'
  },
  '2': {
    bottom: '5%',
    left: '35%'
  },
  '3': {
    bottom: '5%',
    left: '40%'
  },
  '4': {
    bottom: '5%',
    left: '65%'
  },
  '5': {
    bottom: '5%',
    left: '54%'
  },
  '6': {
    bottom: '5%',
    left: '64%'
  }
};

interface StarProps {
  bottom?: string;
  left?: string;
  delay?: string;
}

const ContainerStyled = styled.div<StarProps>`
  width: 25px;
  height: 25px;
  position: absolute;
  z-index: -1;
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  animation: anim1 5s linear infinite;
  transform: translate3d(0, 0, 0);
  animation-delay: ${(props) => props.delay}s;

  @keyframes anim1 {
    0% {
      opacity: 0.2;
      transform: translate(40%, 0%) scale(0.6);
    }
    10% {
      transform: translate(-40%, -100%);
    }
    30% {
      transform: translate(40%, -300%);
    }
    50% {
      opacity: 1;
      transform: translate(-40%, -500%) scale(0.3);
    }
    70% {
      transform: translate(40%, -700%);
    }
    90% {
      transform: translate(-40%, -900%);
    }
    100% {
      opacity: 0.2;
      transform: translate(0%, -1000%) scale(0.6);
    }
  }
`;

const AnimatedStar = () => {
  const [symbol, setSymbol] = useState('0');

  useEffect(() => {
    const randomSymbol = String(Math.floor(Math.random() * 5) + 1);
    setSymbol(randomSymbol);
  }, []);

  return symbol !== '0' ? (
    <ContainerStyled
      delay={symbol}
      bottom={starPositions[symbol].bottom || ''}
      left={starPositions[symbol].left || ''}
    >
      <StaticStar symbol={symbol} />
    </ContainerStyled>
  ) : null;
};

export default AnimatedStar;
