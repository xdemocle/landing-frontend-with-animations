import styled from 'styled-components';
import { ReactComponent as CoinLeftSvg } from '../../assets/coin-left.svg';
import { ReactComponent as CoinRightSvg } from '../../assets/coin-right.svg';
import useWindowSize from '../../hooks/use-window-size';
import { device } from '../../utilities/device';

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
  z-index: 0;

  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};

  animation: ${(props) => props.animation} 2.5s ease-in-out infinite;

  svg {
    zoom: 0.85;

    @media ${device.tablet} {
      zoom: 1;
    }
  }
`;

const FloatingCoin = ({ type = 'left' }: FloatingCoinProps) => {
  const { width } = useWindowSize();

  const bottomPosition =
    width < 768
      ? type === 'left'
        ? '25%'
        : '15%'
      : type === 'left'
      ? '15%'
      : '5%';

  const leftPosition =
    width < 768
      ? type === 'left'
        ? '-20%'
        : '92%'
      : type === 'left'
      ? '20%'
      : '72%';

  return (
    <SvgContainer
      bottom={bottomPosition}
      left={leftPosition}
      animation={type === 'left' ? 'float' : 'float2'}
    >
      {type === 'left' ? <CoinLeftSvg /> : <CoinRightSvg />}
    </SvgContainer>
  );
};

export default FloatingCoin;
