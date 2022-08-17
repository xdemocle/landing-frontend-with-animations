import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  justify-content: space-between;
`;

export const CalendarIconWrapper = styled.div`
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CounterStyled = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  font-style: normal;
  text-align: center;
  margin-left: 10px;
`;

export const TextStyled = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 109%;
  color: #ffffff;
  margin-bottom: 4px;
`;

export const SubTextStyled = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 109%;
  letter-spacing: -0.02em;
  color: rgba(255, 255, 255, 0.6);
`;
