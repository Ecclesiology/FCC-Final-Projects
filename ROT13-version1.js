function bot13(str) {
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ !?."
     var rot13 = "NOPQRSTUVWXYZABCDEFGHIJKLM !?."
  var rot13Arr = rot13.split("")
  var alphabetArr = alphabet.split("")
  var caeserArr = str.split("")
  var decode = "";
  var intermediary = "";
  for(let i = 0; i < caeserArr.length; i++){
    intermediary = ((alphabetArr.indexOf(caeserArr[i])))
    decode += rot13Arr[intermediary]
  }
  return decode
}
