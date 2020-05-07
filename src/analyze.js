const length = array => array.length;

const average = array => array.reduce((acc, curr) => acc + curr) / length(array);

const min = array => Math.min(...array);

const max = array => Math.max(...array);


const analyze = array => {
  array.forEach(element => {
    if (typeof element !== 'number') {
      throw new Error(`DATATYPE ERROR: ${element} is not a number`);
    }
  });

  return {
    average: average(array),
    min: min(array),
    max: max(array),
    length: length(array),
  };
};


analyze([1, 2, 3, 4]);


export default analyze;