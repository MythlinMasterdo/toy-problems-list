//add a %20 for all spaces in a string
var URLify = function(str) {
  var splitStr = str.split(" ");
  var url = [];
  for(var i = 0; i < splitStr.length; i++) {
    if(splitStr[i] !== '') {
      if(i === splitStr.length - 2) {
        url.push(splitStr[i]);
      } else {
        url.push(splitStr[i] + "%20");
      }
    }
  }
  return url.join("");
}
console.log(URLify("Hello Miles    "));
