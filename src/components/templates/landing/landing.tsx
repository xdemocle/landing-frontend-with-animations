import Button from '../../atoms/button';
import ButtonWrapper from '../../atoms/button-wrapper';
import Jumbotron from '../../atoms/jumbotron';
import Title from '../../atoms/title';
import Main from '../../molecules/main';
import LandingBottom from '../../organisms/landing-bottom';
import LandingCard from '../../organisms/landing-card';
import Topbar from '../../organisms/topbar';

interface LandingTemplateProps {
  dictionary: Record<string, string>;
}

const LandingTemplate = ({ dictionary }: LandingTemplateProps) => {
  return (
    <>
      <Topbar />
      <Main>
        <Jumbotron
          firstLine={dictionary.mainJumbotronFirstLine}
          lastLine={dictionary.mainJumbotronLastLine}
        />
        <Title
          firstLine={dictionary.mainTitleFirstLine}
          lastLine={
            <>
              <strong>{dictionary.mainTitleLastLineStrong}</strong>{' '}
              {dictionary.mainTitleLastLineText}
            </>
          }
        />
        <LandingCard />
        <ButtonWrapper>
          <Button>{dictionary.mainButtonText}</Button>
        </ButtonWrapper>
        <LandingBottom />
      </Main>
    </>
  );
};

export default LandingTemplate;
