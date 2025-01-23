export const fixRating = (number: number | undefined | null, size: number) => {
  if (number) {
    return Math.round(number * Math.pow(10, size)) / Math.pow(10, size);
  } else {
    return 0;
  }
};
