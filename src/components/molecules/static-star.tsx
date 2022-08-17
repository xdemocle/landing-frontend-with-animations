import styled from 'styled-components';
import TopStarsPng from '../../assets/top-stars.png';

type ObjectType = {
  [key: string]: {
    x?: string;
    y?: string;
    top?: string;
    left?: string;
    zoom?: number;
  };
};

const starPositions: ObjectType = {
  '1': {
    top: '15%',
    left: '10%',
    zoom: 0.6
  },
  '2': {
    top: '18%',
    left: '80%',
    zoom: 0.8
  },
  '3': {
    top: '65%',
    left: '20%',
    zoom: 0.5
  },
  '4': {
    top: '26.5%',
    left: '63.1%',
    zoom: 0.5
  }
};

const backgroundPositions: ObjectType = {
  '1': {
    x: '0',
    y: '0'
  },
  '2': {
    x: '-45px',
    y: '0'
  },
  '3': {
    x: '-94px',
    y: '0'
  },
  '4': {
    x: '-144px',
    y: '0'
  }
};

interface StaticStarProps {
  symbol: string;
}

interface StarProps {
  background: string;
  x: string;
  y: string;
  top: string;
  left: string;
  zoom: number;
}

const Container = styled.div`
  text-align: center;
  z-index: 0;
`;

const Star = styled.div<StarProps>`
  width: 45px;
  height: 45px;
  background: url(${(props) => props.background}) no-repeat;
  background-position: ${(props) => props.x} ${(props) => props.y};
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  zoom: ${(props) => props.zoom};
  z-index: -1;
`;

const StaticStar = ({ symbol }: StaticStarProps) => {
  return (
    <Container>
      <Star
        background={TopStarsPng}
        top={starPositions[symbol].top || ''}
        left={starPositions[symbol].left || ''}
        zoom={starPositions[symbol].zoom || 1}
        x={backgroundPositions[symbol].x || ''}
        y={backgroundPositions[symbol].y || ''}
      />
    </Container>
  );
};

export default StaticStar;
