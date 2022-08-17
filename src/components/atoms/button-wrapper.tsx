import styled from 'styled-components';

const ButtonWrapper = styled.div<{ transform: string }>`
  margin: 44px 0 0 0;
  transition: all 1.75s cubic-bezier(0.075, 0.82, 0.165, 1);
  transform: ${(props) => props.transform};
  opacity: ${(props) => {
    return props.transform === 'none' ? 1 : 0;
  }};
`;

export default ButtonWrapper;
