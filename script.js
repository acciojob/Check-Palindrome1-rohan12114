// complete the given function

function isPalindrome(s) {
  // Remove non-alphanumeric characters and convert the string to lowercase
  s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  
  // Compare the original string with its reverse
  return s === s.split('').reverse().join('');
}