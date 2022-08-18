import { ReactNode } from 'react';
import styled from 'styled-components';
import { device } from '../../utilities/device';

interface MainProps {
  children: ReactNode;
}

const Container = styled.div`
  position: relative;
  text-align: center;
  padding: 110px 20px;
  z-index: 1;

  @media ${device.tablet} {
    padding: 90px 104px 44px 104px;
    display: block;
  }
`;

const Main = ({ children }: MainProps) => {
  return <Container>{children}</Container>;
};

export default Main;
