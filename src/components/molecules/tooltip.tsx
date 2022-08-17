import { ReactNode } from 'react';
import styled from 'styled-components';

interface MainProps {
  children: ReactNode;
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 10px;
  margin-top: 16px;
  gap: 12px;

  background: rgba(0, 0, 0, 0.3);
  border-radius: 10px;

  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 160%;
  letter-spacing: 0.04em;
  color: #ffffff;
`;

const Tooltip = ({ children }: MainProps) => {
  return (
    <Container>
      <div>💡</div>
      <div>{children}</div>
    </Container>
  );
};

export default Tooltip;
