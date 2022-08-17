import styled from 'styled-components';
import { ReactComponent as CoinPotSvg } from '../../assets/coin-pot.svg';

const SvgContainer = styled.div`
  margin-bottom: -88px;

  svg {
    width: 500px;
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
