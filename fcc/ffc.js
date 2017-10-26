// 26/10/17


function palindrome(str) {
  return str.replace(/[\W_]/g, '').toLowerCase() ===
         str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
}

function factorialize(num) {
  var result = 1;
  for(var i = 1; i <= num; i++){
    result *= i;
  }
  return result;
}

factorialize(5);

function palindrome(str) {
  return str.replace(/[\W_]/g, '').toLowerCase() ===
         str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
}

palindrome("eye");