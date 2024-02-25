// Credit: Hung Le (@Hungle2911), Cynthia Lam (@cynthia-lam), Lubi Islam(@lubi25)
const transpose = function(matrix) {
  // Replace this code with your solution
  // create new matrix, results, with empty arrays = length of matrix[0]
  let result = [];
    
  const numRows = matrix.length;
  const numCols = matrix[0].length;
  
  // fill these with num from matrix:
  for (let col = 0; col < numCols; col++) {
    const newRow = [];
  
    for (let row = 0; row < numRows; row++) {
      newRow.push(matrix[row][col]);
    }
    result.push(newRow);
  }
  
  return result;
};

const wordSearch = (letters, word) => {
  //Horizontal
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  //Vertical
  const lettersTransposed = transpose(letters);
  const verticalJoin = lettersTransposed.map(ls => ls.join(''));
  for (let l of verticalJoin) {
    if (l.includes(word)) return true;
  }

  return false;
};

module.exports = wordSearch;
