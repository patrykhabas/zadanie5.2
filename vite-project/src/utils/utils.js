export const formatText = (text) => {
  const splitted = text.split('');
  const upperCased = splitted[0].toUpperCase();

  splitted[0] = upperCased;
  return splitted.join('');
};
