//check to see if two strings have a difference of one
//"bake" "pake" true
//"pale" "plae" false

var oneAway = function(str1, str2) {
  var splitStr1 = str1.split("");
  var splitStr2 = str2.split("");
  var shortest;
  if(splitStr1.length < splitStr2.length) {
    shortest = splitStr1;
  } else {
    shortest = splitStr2;
  }
  var dif = 0;
  if(splitStr1.length - splitStr2.length > 1 || splitStr2.length - splitStr1.length > 1) {
    return false;
  }
  for(var i = 0; i < shortest.length; i++) {
    if(splitStr1[i] !== splitStr2[i]) {
      dif++;
    }
  }
  if(dif > 1) {
    return false;
  }
  return true;
}
console.log(oneAway("hello", "helo"));
console.log(oneAway("hello", "heool"));
console.log(oneAway("Miles", "miles"));
