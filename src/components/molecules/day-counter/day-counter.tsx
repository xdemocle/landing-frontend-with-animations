import CalendarIcon from '../../atoms/calendar-icon';
import {
  CalendarIconWrapper,
  Container,
  CounterStyled,
  SubTextStyled,
  TextStyled
} from './styled';

interface DayCounterProps {
  text: string;
  subtext: string;
}

const DayCounter = ({ text, subtext }: DayCounterProps) => {
  return (
    <Container>
      <CalendarIconWrapper>
        <CalendarIcon />
      </CalendarIconWrapper>
      <CounterStyled>
        <TextStyled>{text}</TextStyled>
        <SubTextStyled>{subtext}</SubTextStyled>
      </CounterStyled>
    </Container>
  );
};

export default DayCounter;
