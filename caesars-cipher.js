function rot13(str) {
  const conversion = {
    A: "N",
    B: "O",
    C: "P",
    D: "Q",
    E: "R",
    F: "S",
    G: "T",
    H: "U",
    I: "V",
    J: "W",
    K: "X",
    L: "Y",
    M: "Z",
    N: "A",
    O: "B",
    P: "C",
    Q: "D",
    R: "E",
    S: "F",
    T: "G",
    U: "H",
    V: "I",
    W: "J",
    X: "K",
    Y: "L",
    Z: "M",
  " ": " ",
  "!": "!",
  ".": ".",
  "?": "?"
  }
 
  var decode = "";
  for(let i = 0; i < str.length; i++){
    decode += conversion[str[i]]
  }
  return decode.replace(/undefined/g, "")
}

console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));