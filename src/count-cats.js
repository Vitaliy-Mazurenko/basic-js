const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {

  let m = 0;
  for (let i = 0; i < matrix.length; i++) {
    let d = matrix[i];
    for (let k = 0; k < d.length; k++) {
      if (d[k] == '^^') m++;
    }
  }
  return m;

}
