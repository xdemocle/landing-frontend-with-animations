import styled from 'styled-components';

const LandingBottomContainer = styled.div<{ transform: string }>`
  position: relative;
  width: 100%;
  height: 50%;
  position: absolute;
  bottom: 0%;
  overflow: hidden;
  transition: all 1.75s cubic-bezier(0.075, 0.82, 0.165, 1);
  transform: ${(props) => props.transform};
  opacity: ${(props) => {
    return props.transform === 'none' ? 1 : 0;
  }};
  z-index: 0;
`;

export default LandingBottomContainer;
