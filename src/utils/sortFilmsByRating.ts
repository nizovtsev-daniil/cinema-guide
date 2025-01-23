import { MovieList } from '@type/MovieList';
import { fixRating } from '@utils/fixRating';

export const sortFilmsByRating = (arr: MovieList) => {
  const result = [...arr];
  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result.length - 1; j++) {
      if (
        fixRating(result[j].tmdbRating, 4) <
        fixRating(result[j + 1].tmdbRating, 4)
      ) {
        const temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }
  return result;
};
