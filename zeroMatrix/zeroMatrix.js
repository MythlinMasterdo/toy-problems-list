// make a function such that if an element in an M*N matrix is 0 that row and column are set to 0
var zeroMatrix = function(matrix) {
  for(var i = 0; i < matrix.length; i++) {
    for(var j = 0; j < matrix[i].length; j++) {
      if(matrix[i][j] === 0) {
        for(var k = 0; k < matrix[i][j].length; k++) {
          matrix[i][j] = 0;
        }
        
      }
    }
  }
}
