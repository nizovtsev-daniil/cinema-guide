import { GenresArray, GenresObjArray } from '@type/GenresArray';

import action from '../assets/images/genres/action.jpeg';
import adventure from '../assets/images/genres/adventure.jpeg';
import animation from '../assets/images/genres/animation.jpeg';
import comedy from '../assets/images/genres/comedy.jpeg';
import crime from '../assets/images/genres/crime.jpeg';
import documentary from '../assets/images/genres/documentary.jpeg';
import drama from '../assets/images/genres/drama.jpeg';
import family from '../assets/images/genres/family.jpeg';
import fantasy from '../assets/images/genres/fantasy.jpeg';
import history from '../assets/images/genres/history.jpeg';
import horror from '../assets/images/genres/horror.jpeg';
import mystery from '../assets/images/genres/mystery.jpeg';
import music from '../assets/images/genres/music.jpeg';
import romance from '../assets/images/genres/romance.jpeg';
import scifi from '../assets/images/genres/scifi.jpeg';
import stand from '../assets/images/genres/stand-up.jpeg';
import thriller from '../assets/images/genres/thriller.jpeg';
import tv from '../assets/images/genres/tv-movie.jpeg';
import war from '../assets/images/genres/war.jpeg';
import western from '../assets/images/genres/western.jpeg';

export const transformGenresList = (list: GenresArray): GenresObjArray => {
  const arrayPosters = [
    action,
    adventure,
    animation,
    comedy,
    crime,
    documentary,
    drama,
    family,
    fantasy,
    history,
    horror,
    mystery,
    music,
    romance,
    scifi,
    stand,
    thriller,
    tv,
    war,
    western,
  ];

  if (list) {
    return list.map((genre) => ({
      id: crypto.randomUUID(),
      title: genre,
      poster: arrayPosters
        .filter((poster: string) => poster.includes(genre))
        .toString(),
    }));
  } else {
    return undefined;
  }
};
