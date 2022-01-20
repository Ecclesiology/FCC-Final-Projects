function convertToRoman(num) {
 var conversion = {
    1 : "I",
    4 : "IV", 
    5 : "V",
    9 : "IX", 
    10 : "X",
    40 : "XL",
    50 : "L",
    90 : "XC",
    100 : "C",
    400 : "CD",
    500 : "D",
    900 : "CM",
    1000 : "M"
  }

  var record = num;
  var romanNum = "";

  while(record > 0){
    if(record >= 1000){
      record -= 1000;
      romanNum += conversion[1000]
    } else if(record >= 900 && record < 1000) {
      record -= 900;
      romanNum += conversion[900]
    } else if (record >= 500 && record < 900 ) {
      record -= 500;
      romanNum += conversion[500]
    } else if(record >= 400 && record < 500){
      record -= 400;
      romanNum += conversion[400]
    } else if (record >= 100 && record < 400) {
      record -= 100;
      romanNum += conversion[100];
    } else if(record >= 90 && record < 100){
      record -= 90;
      romanNum += conversion[90]
    } else if (record > 50 && record < 100) {
      record -= 50;
      romanNum += conversion[50];
    } else if(record > 40 && record < 50){
      record -= 40;
      romanNum += conversion[40];
    } else if (record > 10 && record < 50) {
      record -= 10;
      romanNum += conversion[10];
    } else if(record == 9 && record < 10){
      record -= 9;
      romanNum += conversion[9];
    } else if (record >= 5 && record < 10) {
      record -= 5;
      romanNum += conversion[5];
    } else if (record == 4 && record < 5){
      record -= 4;
      romanNum += conversion[4];
    } else if (record >= 1 && record <= 3) {
      record -= 1;
      romanNum += conversion[1];
    }
  }
 return romanNum;
}

console.log(convertToRoman(36));