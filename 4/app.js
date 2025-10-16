

// tersine çevir

function reverseString(metin){

  return metin.split("").reverse().join("");
}
  console.log(reverseString("Merhaba Dünya"));






function isPalindrome(s) {
  const clean = s.toLowerCase().replace(/[^a-z0-9ığüşöçı]/g, "");
  let i = 0, j = clean.length - 1;
  while (i < j) {
    if (clean[i] !== clean[j]) return false;
    i++; j--;
  }
  return true;
}
console.log(isPalindrome("Ey edip Adana'da pide ye")); // true


function isPalindrome2(s){
  const clean = s.toLowerCase().replace(/[^a-z0-9ığüşöçı]/g, "");
  let i = 0 , j = clean.length - 1;
  while(i < j){
    if(clean[i] !== clean[j]) return false;
    i++; j--;
  }
  return true;

}
console.log(isPalindrome2("Ey edip Adana'da pide ye")); // true




