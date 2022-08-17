import { ReactNode } from 'react';
import styled from 'styled-components';

interface MainProps {
  children: ReactNode;
}

const Container = styled.div`
  position: relative;
  padding: 90px 104px 44px 104px;
  text-align: center;
  z-index: 1;
`;

const Main = ({ children }: MainProps) => {
  return <Container>{children}</Container>;
};

export default Main;
