function telephoneCheck(str) {
  if(str.match(/^1*\s*\(\d\d\d\)(\s?|\-?)\d\d\d(\s?|\-?)\d\d\d\d$|^1*\s*\d\d\d(\s?|\-?)\d\d\d(\s?|\-?)\d\d\d\d$/)){
    return true;
  } else {
    return false;
  }
  
}

console.log(telephoneCheck("555-555-5555"));