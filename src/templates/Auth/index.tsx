import Logo from 'components/Logo';
import * as S from './styles';
import Heading from 'components/Heading';

export type AuthProps = {
  ContentTitle: string;
  children: React.ReactNode;
};

const Auth = ({ ContentTitle, children }: AuthProps) => {
  return (
    <S.Wrapper>
      <S.BannerBlock>
        <S.BannerContent>
          <Logo id="banner" />
          <div>
            <Heading size="huge"> All your favorite games in one place</Heading>
            <S.BannerSubtitle>
              <strong>WON</strong> is the best and most complete gaming
              platform.
            </S.BannerSubtitle>
          </div>

          <S.BannerFooter>
            Won Games 2020 © Todos os Direitos Reservados
          </S.BannerFooter>
        </S.BannerContent>
      </S.BannerBlock>

      <S.ContentWrapper>
        <S.Content>
          <Logo id="content" color="black" size="large" />
          <Heading color="black" lineColor="secondary" leftLine>
            {ContentTitle}
          </Heading>
          {children}
        </S.Content>
      </S.ContentWrapper>
    </S.Wrapper>
  );
};

export default Auth;
