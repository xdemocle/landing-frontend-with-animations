import styled from 'styled-components';
import { ReactComponent as CoinPotSvg } from '../../assets/coin-pot.svg';
import { device } from '../../utilities/device';

const SvgContainer = styled.div`
  position: fixed;

  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  svg {
    zoom: 0.4;
    margin-bottom: -50px;

    @media ${device.tablet} {
      zoom: 0.65;
    }
  }
`;

const CoinPot = () => {
  return (
    <SvgContainer>
      <CoinPotSvg />
    </SvgContainer>
  );
};

export default CoinPot;
