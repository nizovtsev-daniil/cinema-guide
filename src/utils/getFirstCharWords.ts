export const getFirstCharWords = (
  oneWord: string | undefined = '',
  twoWord: string | undefined = ''
) => {
  const firstChar = oneWord.charAt(0).toUpperCase();
  const secondChar = twoWord.charAt(0).toUpperCase();
  const result = firstChar + secondChar;
  return result;
};
