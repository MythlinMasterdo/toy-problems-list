//RYGB if user inputs RRGB as solution and guess is RGBY they get one hit and one psuedohit
//the real hit is on R because they are in the same position, psuedo is G because G is in the actual answer

var masterMind = function(guess, solution) {
  var userGuess = guess.split('');
  var userSolution = solution.split('');
  var result = [['Hit', 0], ['PsuedoHit', 0]]
  for(var i = 0; i < userSolution.length; i++) {
    if(userGuess[i] === userSolution[i]) {
      result[0][1] += 1;
    } else if(userGuess[i].indexOf(userSolution[i]) !== -1) {
      result[1][1] += 1;
    }
  }
  return result;
}
console.log(masterMind('RYBB', 'RRGB'));
