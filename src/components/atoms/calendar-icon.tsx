import styled from 'styled-components';
import { ReactComponent as CalendarIconSvg } from '../../assets/icons/calendar.svg';

const ContainerStyled = styled.div`
  width: 32px;
  height: 32px;
  background: #9b51e0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CalendarIcon = () => {
  return (
    <ContainerStyled>
      <CalendarIconSvg />
    </ContainerStyled>
  );
};

export default CalendarIcon;
