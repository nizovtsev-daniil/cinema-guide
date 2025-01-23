import ISO6391 from 'iso-639-1';

export const getColorRating = (rating: number | null | undefined) => {
  if (rating && rating >= 0 && rating < 6) {
    return 'red-rating';
  }
  if (rating && rating >= 6 && rating < 7) {
    return 'gray-rating';
  }
  if (rating && rating >= 7 && rating < 8) {
    return 'green-rating';
  }
  if (rating && rating >= 7 && rating <= 10) {
    return 'gold-rating';
  }
  if (rating === null) {
    return '';
  }
};

export const sliceReleaseDate = (releaseDate: string | null | undefined) => {
  return releaseDate?.slice(0, 4);
};

export const getListGenres = (genres: string[]) => {
  return genres.map((genre) =>
    genre !== genres[genres.length - 1] ? `${genre}, ` : `${genre}`
  );
};

export const getTimeFromMins = (runtime: number) => {
  const hours = Math.trunc(runtime / 60);
  const minutes = runtime % 60;
  return `${hours} ч ${minutes} мин`;
};

export const getLanguage = (language: string | null | undefined) => {
  return language !== null && language !== undefined
    ? ISO6391.getName(language)
    : 'неизвестно';
};

export const getCurrency = (currency: string | null | undefined) => {
  return `${new Intl.NumberFormat('ru-RU').format(Number(currency))} руб.`;
};

export const checkDataExistence = (data: string | null | undefined) => {
  return data !== null && data !== undefined ? data : 'неизвестно';
};
