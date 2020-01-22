'use strict';

console.log(reverseStringBy("what was the thing you said?\nwe need to talk", "\n"));
console.log(checkBeginningAndEnd("soon\nnoup\npoop\npoost"));

function reverseStringBy(str, split) {
  let splitSentence = str.split(split);
  let returnString = "";
  if(splitSentence.length === 1) {
    return reverseString(splitSentence[0]);
  }
  splitSentence.forEach(element => {
    returnString += reverseStringBy(element, " ") + split;
  });
  return returnString;
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

function checkBeginningAndEnd(str) {
  let splitWords = str.split("\n");
  let prevWord = "";
  let yesNo = "YES"
  splitWords.forEach(element => {
    if(prevWord === "") {
      prevWord = element;
    } else {
      if(prevWord.charAt(prevWord.length-1) !== element.charAt(0)) {
        yesNo = "NO";
        return;
      }
      prevWord = element;
    }
  });
  return yesNo;
}
