export const changeUpperFirstChar = (word: string | undefined = '') => {
  const wordLower = word.toLowerCase();
  const firstChar = wordLower.charAt(0).toUpperCase();
  const restOfWord = wordLower.slice(1);
  const result = firstChar + restOfWord;
  return result;
};
