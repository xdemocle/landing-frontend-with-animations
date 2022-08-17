import styled from 'styled-components';
import { ReactComponent as CoinPotSvg } from '../../assets/coin-pot.svg';

const SvgContainer = styled.div`
  margin-bottom: -2px;
  text-align: center;

  svg {
    margin: 0 auto;
    zoom: 0.65;
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
