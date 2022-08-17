import { ReactNode } from 'react';
import styled from 'styled-components';

interface MainProps {
  children: ReactNode;
}

const Container = styled.div`
  padding: 124px 104px 44px 104px;
  text-align: center;
`;

const Tooltip = ({ children }: MainProps) => {
  return <Container>{children}</Container>;
};

export default Tooltip;
