//write a method that counts the number of 2's that appear in all numbers between 0 and n inclusive
//input: 25 output: 9 (2,12,20,21,22,23,24,25) 22 counts for 2 2's

var countOfTwos = function(num) {
  if(num < 2) {
    return 0;
  }
  var numOfTwos = 0;
  var currentNum;
  for(var i = 2; i < num; i++) {
    currentNum = i.toString().split('');
    if(currentNum.indexOf(2) !== -1) {
      for(var j = 0; j < currentNum.length; j++) {
        
      }
    }
  }
}
countOfTwos(5);
