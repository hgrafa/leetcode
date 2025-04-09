function isAlphabetChar(charCode: number) {
  return (charCode >= 65 && charCode <= 90) 
      || (charCode >= 97 && charCode <= 122)
      || (charCode >= 48 && charCode <= 57)
}

function isPalindrome(s: string): boolean {
    
  let onlyLetters = ""
  
  for(let k = 0; k < s.length; k++) {
    if(isAlphabetChar(s.charCodeAt(k))) {
      onlyLetters = onlyLetters.concat(s.charAt(k).toLowerCase())
    }
  }

  const endPos = onlyLetters.length - 1
  const middle = Math.floor(onlyLetters.length / 2);

  for (let i = 0, j = endPos; i < middle; i++, j-- ) {
    if(onlyLetters.charAt(i) !== onlyLetters.charAt(j)) {
      return false;
    } 
  }

  return true
};

export { isPalindrome }
