function palindrome(str) {
  var reversedStr = "";
  
  //Reverse the string
  for(let i = str.length - 1; i >= 0; i--){
    reversedStr += str[i];
  }
  
  //Compare original to reversed
  if(
     str
    .replace(/[^A-Za-z0-9]/g, "")
    .trim()
    .toLowerCase()
     === 
     reversedStr
    .replace(/[^A-Za-z0-9]/g, "")
    .trim()
    .toLowerCase()
    ) {
      return true
      } else {
        return false
        }
}

console.log(palindrome("My age is 0, 0 si ega ym."));