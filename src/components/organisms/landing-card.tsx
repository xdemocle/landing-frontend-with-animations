import styled from 'styled-components';
import useDictionary from '../../hooks/use-dictionary';
import { getTextTranspiled } from '../../utilities';
import Tooltip from '../molecules/tooltip';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px 27px;
  gap: 16px;

  margin: 24px auto;
  width: 425px;

  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.39) -213.5%,
    rgba(255, 255, 255, 0) 100%
  );
  box-shadow: inset 0px -1px 11px rgba(255, 255, 255, 0.17),
    inset 0px 2px 0px rgba(255, 255, 255, 0.24);
  border-radius: 8px;
`;

const HeaderTitle = styled.header`
  display: block;
  width: 100%;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 160%;
  text-align: center;
  color: #ffffff;
`;

const Main = styled.main`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  letter-spacing: -0.02em;
  text-align: left;
  color: #ffffff;
`;

const LandingCard = () => {
  const dictionary = useDictionary();

  return (
    <Container>
      <HeaderTitle>{dictionary.cardTitle}</HeaderTitle>
      <Main>
        <ol>
          <li>{dictionary.cardOlLi1}</li>
          <li>
            {getTextTranspiled(
              dictionary.cardOlLi2,
              '{{number}}',
              <strong>₦3,000,000</strong>
            )}
          </li>
        </ol>
        <div>{dictionary.cardSlogan}</div>
        <Tooltip>
          {getTextTranspiled(
            dictionary.tooltipText,
            '{{number}}',
            <strong>2</strong>
          )}
        </Tooltip>
      </Main>
    </Container>
  );
};

export default LandingCard;
