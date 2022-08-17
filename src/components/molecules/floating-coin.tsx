import styled from 'styled-components';
import { ReactComponent as CoinLeftSvg } from '../../assets/coin-left.svg';
import { ReactComponent as CoinRightSvg } from '../../assets/coin-right.svg';

interface FloatingCoinProps {
  type?: 'left' | 'right';
}

interface SvgContainerProps {
  bottom: string;
  left: string;
  animation: string;
}

const SvgContainer = styled.div<SvgContainerProps>`
  position: absolute;

  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};

  animation: ${(props) => props.animation} 2.5s ease-in-out infinite;

  svg {
  }
`;

const FloatingCoin = ({ type = 'left' }: FloatingCoinProps) => {
  return (
    <SvgContainer
      bottom={type === 'left' ? '68.78%' : '22.51%'}
      left={type === 'left' ? '25%' : '65%'}
      animation={type === 'left' ? 'float' : 'float2'}
    >
      {type === 'left' ? <CoinLeftSvg /> : <CoinRightSvg />}
    </SvgContainer>
  );
};

export default FloatingCoin;
