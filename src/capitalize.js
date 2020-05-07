const capitalize = string => {
  const lowerCasedString = string.toLowerCase();

  return lowerCasedString.split('').map((char, index) => {
    if (index === 0) {
      return char.toUpperCase();
    }

    return char;
  }).join('');
};

export default capitalize;