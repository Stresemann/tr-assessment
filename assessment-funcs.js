function reverseString(str) {
  return str
    .split('')
    .reverse()
    .join('');
}

function reverseStringBy(str, split) {
  const splitSentence = str.split(split);
  let returnString = '';
  if (splitSentence.length === 1) {
    return reverseString(splitSentence[0]);
  }
  splitSentence.forEach(element => {
    returnString += reverseStringBy(element, ' ') + split;
  });
  return returnString;
}

function checkBeginningAndEnd(str) {
  const splitWords = str.split('\n');
  let prevWord = '';
  let yesNo = 'YES';
  splitWords.forEach(element => {
    if (prevWord === '') {
      prevWord = element;
    } else {
      if (prevWord.charAt(prevWord.length - 1) !== element.charAt(0)) {
        yesNo = 'NO';
        return;
      }
      prevWord = element;
    }
  });
  return yesNo;
}

console.log(
  reverseStringBy('what was the thing you said?\nwe need to talk', '\n')
);
console.log(checkBeginningAndEnd('soon\nnoup\npoop\npoost'));

module.exports.reverseStringBy = reverseStringBy;
module.exports.checkBeginningAndEnd = checkBeginningAndEnd;
