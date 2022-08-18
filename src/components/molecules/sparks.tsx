import styled from 'styled-components';
import { ReactComponent as SparksSvg } from '../../assets/sparks.svg';

const SvgContainer = styled.div`
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;

  svg {
    margin: 0 auto;
  }
`;

const Sparks = () => {
  return (
    <SvgContainer>
      <SparksSvg />
    </SvgContainer>
  );
};

export default Sparks;
