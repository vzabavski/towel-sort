
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
  let arr = [];
  if (matrix.length > 0) {
   for(let i = 0; i < matrix.length; i++) {
     if (i === 0 || i % 2 === 0) {
       arr = arr.concat(matrix[i]); 
     } else {
       newMatrix = matrix[i].reverse()
       arr = arr.concat(newMatrix)
     }
   }
  } else {
    return [];
  }
  return arr
}
