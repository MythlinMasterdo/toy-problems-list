//create a function that determines if a string contains all unique characters

var unique = function(str) {
  var splitStr = str.split("");
  var letters = {};
  for(var i = 0; i < splitStr.length; i++) {
    if(letters[splitStr[i]] === undefined) {
      letters[splitStr[i]] = 1
    } else {
      return false;
    }
  }
  return true;
}
console.log(unique("abcdefghijklmnopqrstuvwxyz"));
console.log(unique("abcdefa"));
