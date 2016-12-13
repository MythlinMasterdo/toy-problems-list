//check to see if two strings have a difference of one
//"bake" "pake" true
//"pale" "plae" false

var oneAway = function(str1, str2) {
  var splitStr1 = str1.split("");
  var splitStr2 = str2.split("");
  if(splitStr1.length - splitStr2.length > 1 || splitStr2.length - splitStr1.length > 1) {
    return false;
  }
  for(var i = 0; i < splitStr1.length; i++) {
    
  }
}
