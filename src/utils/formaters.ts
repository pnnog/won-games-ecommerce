import { RatingProps } from 'components/GameDetails';

export function dateFormatter(date: string): string {
  try {
    if (date) {
      return new Intl.DateTimeFormat('eng-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }).format(new Date(date));
    }
    return 'No forecast';
  } catch (e) {
    console.error(e);
    return 'Format is not supported';
  }
}

export function RatingFormatter(rating: RatingProps): string {
  if (!!rating && rating != 'BR0') {
    try {
      const ratingFormated = `${rating.replace('BR', '')}+`;
      return ratingFormated;
    } catch (e) {
      console.error('error');
    }
  }

  return 'FREE';
}

export function genreFormatter(genres: string[]) {
  return genres.join(' / ');
}
