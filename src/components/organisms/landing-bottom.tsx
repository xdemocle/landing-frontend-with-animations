// import useDictionary from '../../hooks/use-dictionary';
import CoinPot from '../molecules/coin-pot';
import FloatingCoin from '../molecules/floating-coin';
import LandingBottomContainer from '../molecules/landing-bottom-container';

const LandingBottom = () => {
  // const dictionary = useDictionary();

  return (
    <LandingBottomContainer>
      <CoinPot />
      <FloatingCoin />
      <FloatingCoin type="right" />
    </LandingBottomContainer>
  );
};

export default LandingBottom;
