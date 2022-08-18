// Inspired by:
// https://codepen.io/xdemocle/pen/ExEGgEX
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  left: 0%;
  right: 0;
  bottom: 0;
  transform: translateX(-50%);
  margin: auto;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: transparent;
  opacity: 1;
`;

const RayBox = styled.div`
  position: absolute;
  margin: auto;
  top: 0px;
  left: 0;
  right: 0;
  bottom: -200px;
  width: 70px;
  animation: rotation 45s linear infinite;
  animation-direction: reverse;
`;

const Ray = styled.div`
  background: -webkit-linear-gradient(
    top,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 239, 60, 0.8) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  background: linear-gradient(
    top,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 239, 60, 0.8) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  margin-left: 10px;
  border-radius: 80% 80% 0 0;
  position: absolute;
  opacity: 0.1;
  zoom: 2.5;

  /* height: 170px; */
  width: 40px !important;
`;

const Ray1 = styled(Ray)`
  height: 170px;
  width: 30px;
  top: -175px;
  left: 15px;
  transform: rotate(180deg);
`;

const Ray2 = styled(Ray)`
  height: 100px;
  width: 8px;
  top: -90px;
  left: 75px;
  transform: rotate(220deg);
`;

const Ray3 = styled(Ray)`
  height: 170px;
  width: 50px;
  transform: rotate(250deg);
  top: -80px;
  left: 100px;
`;

const Ray4 = styled(Ray)`
  height: 120px;
  width: 14px;
  transform: rotate(305deg);
  top: 30px;
  left: 100px;
`;

const Ray5 = styled(Ray)`
  height: 140px;
  width: 30px;
  transform: rotate(-15deg);
  top: 60px;
  left: 40px;
`;

const Ray6 = styled(Ray)`
  height: 90px;
  width: 50px;
  transform: rotate(30deg);
  top: 60px;
  left: -40px;
`;

const Ray7 = styled(Ray)`
  height: 180px;
  width: 10px;
  transform: rotate(70deg);
  top: -35px;
  left: -40px;
`;

const Ray8 = styled(Ray)`
  height: 120px;
  width: 30px;
  transform: rotate(100deg);
  top: -45px;
  left: -90px;
`;

const Ray9 = styled(Ray)`
  height: 80px;
  width: 10px;
  top: -65px;
  left: -60px;
  transform: rotate(120deg);
`;

const Ray10 = styled(Ray)`
  height: 190px;
  width: 23px;
  transform: rotate(150deg);
  top: -185px;
  left: -60px;
`;

const Sparks = () => {
  return (
    <Container>
      <RayBox>
        <Ray1 />
        <Ray2 />
        <Ray3 />
        <Ray4 />
        <Ray5 />
        <Ray6 />
        <Ray7 />
        <Ray8 />
        <Ray9 />
        <Ray10 />
      </RayBox>
    </Container>
  );
};

export default Sparks;
