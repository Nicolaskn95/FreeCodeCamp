function splitify(str) {
    // Only change code below this line
  
    return str.split(/[" "-,-.]+/);

    // The forward slashes / / mark the beginning and end of the regular expression.
    // The square brackets [] are called a character class and match either one of the provided characters.
    // The plus + matches the preceding item one or more times.
    // https://bobbyhadz.com/blog/javascript-split-string-multiple-separators#:~:text=Use%20the%20String.,the%20string%20with%20multiple%20separators.
  }
  
  console.log(splitify("Hello World,I-am code"))