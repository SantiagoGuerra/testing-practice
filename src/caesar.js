
const charCipher = (index, shift) => {
  const cipher = [...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!"#$%&/()=?¡¿*^-+.,;:1234567890'];
  let result = '';

  if (index === 25) {
    result = cipher[shift - 1];
  } else if (index === 51) {
    result = cipher[26 + (shift - 1)];
  } else if (index === 72) {
    result = cipher[52 + (shift - 1)];
  } else if (index === 82) {
    result = cipher[73 + (shift - 1)];
  } else {
    result = cipher[(index + shift)];
  }

  return result;
};

const searchIndexChar = character => {
  const plain = [...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!"#$%&/()=?¡¿*^-+.,;:1234567890'];
  return plain.indexOf(character);
};

const shiftChar = (char, shift) => charCipher(searchIndexChar(char), shift);

const caesar = (string, shift) => {
  const array = string.split(' ');
  return array.map(arr => [...arr].map(char => shiftChar(char, shift)).join('')).join(' ');
};

export default caesar;