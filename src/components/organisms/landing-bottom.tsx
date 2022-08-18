// import useDictionary from '../../hooks/use-dictionary';
import { useEffect, useState } from 'react';
import CoinPot from '../molecules/coin-pot';
import FloatingCoin from '../molecules/floating-coin';
import LandingBottomContainer from '../molecules/landing-bottom-container';

// import Sparks from '../molecules/sparks';

const LandingBottom = () => {
  // const dictionary = useDictionary();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <LandingBottomContainer
      transform={mounted ? 'none' : 'translate3d(0, 70%, 0)'}
    >
      <CoinPot />
      {/* <Sparks /> */}
      <FloatingCoin />
      <FloatingCoin type="right" />
    </LandingBottomContainer>
  );
};

export default LandingBottom;
