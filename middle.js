const middle = function(array) {
  if (array.length <= 2) return [];
  return (array.length % 2 === 0) ? array.slice(array.length / 2 - 1, array.length / 2 + 1) : [array[Math.floor(array.length / 2)]];
};

module.exports = middle;
