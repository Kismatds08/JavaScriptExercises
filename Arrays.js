var array1 = [[1,2],[3,4]]
var array2 = [[5,6], [7,8]]
var sumArrag =[[],[]]

for (var a=0; a<array1.length; a++){
    for (var b=0; b<array2.length; b++){
        
        sumArrag[a][b]=array1[a][b] + array2[a][b]
    }
}
console.log(sumArrag)

console.log("----------------------------------------------------")
/* 
for(var i=0; i<3; i++){
    for(var j=0; j<3; j++){
    
        console.log("row :" + i, "column " + j)
    }
}
*/

console.log("----------------------------------------------------")

var array1 = [[1,2],[3,4]]
var array2 = [[5,6], [7,8]]
var multipleArray= [[],[]]


for (var i=0; a<array1.length; i++){
    for (var j=0; j<array2.length; j++){
       for(var k=0; k<array2.length; k++){
        multipleArray[i][j]=array1[i][k] * array2[k][j]
       }   
    }
}
console.log(mutipleArray)

console.log("----------------------------------------------------")

function multiply(a, b) {
    var aNumRows = a.length, aNumCols = a[0].length,
        bNumRows = b.length, bNumCols = b[0].length,
        m = new Array(aNumRows);  // initialize array of rows
    for (var r = 0; r < aNumRows; ++r) {
      m[r] = new Array(bNumCols); // initialize the current row
      for (var c = 0; c < bNumCols; ++c) {
        m[r][c] = 0;             // initialize the current cell
        for (var i = 0; i < aNumCols; ++i) {
          m[r][c] += a[r][i] * b[i][c];
        }
      }
    }
    return m;
  }
  
  function display(m) {
    for (var r = 0; r < m.length; ++r) {
      document.write('&nbsp;&nbsp;'+m[r].join(' ')+'<br />');
    }
  }
  
  var a = [[8, 3], [2, 4], [3, 6]],
      b = [[1, 2, 3], [4, 6, 8]];
  document.write('matrix a:<br />');
  display(a);
  document.write('matrix b:<br />');
  display(b);
  document.write('a * b =<br />');
  display(multiply(a, b));