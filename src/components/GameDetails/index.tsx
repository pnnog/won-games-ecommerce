import Heading from 'components/Heading';
import * as S from './styles';
import MediaMatch from 'components/MediaMatch';
import { Apple, Windows, Linux } from '@styled-icons/fa-brands';
import {
  RatingFormatter,
  dateFormatter,
  genreFormatter,
} from 'utils/formaters';

export type RatingProps = 'BR0' | 'BR10' | 'BR12' | 'BR14' | 'BR16' | 'BR18';
type PlatformProps = 'windows' | 'mac' | 'linux';

export type GameDetailsProps = {
  developer: string;
  releaseDate: string;
  editor: string;
  rating: RatingProps;
  genres: string[];
  platforms: PlatformProps[];
};

const GameDetails = ({
  developer,
  releaseDate,
  platforms,
  editor,
  rating,
  genres,
}: GameDetailsProps) => {
  const platformIcons = {
    linux: <Linux title="linux" size={18} />,
    mac: <Apple title="mac" size={18} />,
    windows: <Windows title="windows" size={18} />,
  };

  const formattedReleaseDate = dateFormatter(releaseDate);
  const formattedRating = RatingFormatter(rating);
  const formattedGenres = genreFormatter(genres);

  return (
    <S.Wrapper>
      <MediaMatch greaterThan="medium">
        <Heading leftLine lineColor="secondary">
          Game details
        </Heading>
      </MediaMatch>

      <S.ColumnBlock>
        <S.Column>
          <S.Title>Developer</S.Title>
          <S.Content>{developer} </S.Content>
        </S.Column>

        <S.Column>
          <S.Title>Release Date</S.Title>
          <S.Content>{formattedReleaseDate}</S.Content>
        </S.Column>

        <S.Column>
          <S.Title>Platforms</S.Title>
          <S.IconsWrapper>
            {platforms.map((iconName: PlatformProps) => (
              <S.Icon key={iconName}>{platformIcons[iconName]}</S.Icon>
            ))}
          </S.IconsWrapper>
        </S.Column>

        <S.Column>
          <S.Title>Editor</S.Title>
          <S.Content>{editor}</S.Content>
        </S.Column>

        <S.Column>
          <S.Title>Rating</S.Title>
          <S.Content>{formattedRating}</S.Content>
        </S.Column>

        <S.Column>
          <S.Title>Genre</S.Title>
          <S.Content> {formattedGenres} </S.Content>
        </S.Column>
      </S.ColumnBlock>
    </S.Wrapper>
  );
};

export default GameDetails;
