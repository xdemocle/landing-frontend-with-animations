import styled from 'styled-components';
import useDictionary from '../../hooks/use-dictionary';
import Logo from '../atoms/logo';
import DayCounter from '../molecules/day-counter';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 44px 104px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Topbar = () => {
  const dictionary = useDictionary();

  return (
    <Container>
      <Logo />
      <DayCounter
        text={dictionary.dayCounterText}
        subtext={dictionary.dayCounterSubtext}
      />
    </Container>
  );
};

export default Topbar;
