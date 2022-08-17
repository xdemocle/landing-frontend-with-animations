// import useDictionary from '../../hooks/use-dictionary';
import CoinPot from '../molecules/coin-pot';
import LandingBottomContainer from '../molecules/landing-bottom-container';

const LandingBottom = () => {
  // const dictionary = useDictionary();

  return (
    <LandingBottomContainer>
      <CoinPot />
    </LandingBottomContainer>
  );
};

export default LandingBottom;
