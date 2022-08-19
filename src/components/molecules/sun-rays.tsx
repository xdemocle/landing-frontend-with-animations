// Inspired by:
// https://codepen.io/xdemocle/pen/ExEGgEX
import styled from 'styled-components';
import SunRaysSrc from '../../assets/rays-main.png';
import { device } from '../../utilities/device';

const Container = styled.div`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  margin: auto;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: transparent;
  opacity: 0.7;
  z-index: -1;
`;

const RayBox = styled.div`
  background: url(${SunRaysSrc}) 0 0 no-repeat;
  position: absolute;
  left: -490px;
  bottom: -490px;
  width: 980px;
  height: 980px;

  animation: rotation 40000ms linear infinite;
  animation-direction: reverse;
  zoom: 0.6;

  @media ${device.tablet} {
    zoom: 1;
  }
`;

const Sparks = () => {
  return (
    <Container>
      <RayBox />
    </Container>
  );
};

export default Sparks;
