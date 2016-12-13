//write a function that compresses a string
//"aaabbbbcc" -> "a3b4c2"

var stringCompression = function(str) {
  var splitStr = str.splice("");
  var compressedString = {};
  var finalStr = "";
  for(var i = 0; i < splitStr.length; i++) {
    if(compressedString[splitStr[i]] === undefined) {
      compressedString[splitStr[i]] = 1;
    } else {
      compressedString[splitStr[i]] += 1;
    }
  }
  for(var key in compressedString) {
    
  }
}
