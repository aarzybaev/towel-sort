
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix == undefined || matrix.length == 0) {
    return [];
  }
  return matrix.reduce((a, b, i) => i%2 ? a.concat(b.reverse()) : a.concat(b));
}
