const reverseString = string => {
  const reversed = [];
  const { length } = string;

  // eslint-disable-next-line no-plusplus
  for (let index = length; index >= 0; index--) {
    reversed.push(string[index]);
  }

  return reversed.join('');
};

export default reverseString;