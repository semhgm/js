

// tersine çevir

function reverseString(metin){

  return metin.split("").reverse().join("");
}
  console.log(reverseString("Merhaba Dünya"));




// palindrom mu değil mi
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



//dizideki sayıları topla
function sum2(arr){
  let total = 0;
  for (const n of arr)
    total += n;
  return total;
}
console.log(sum2([2,5,3])); // 10


// dizideki en büyük sayıyı bul
function maxNum(arr){
  let max = arr[0];
  for(const n of arr){
    if(n > max) max = n;
  }
  return max;
}
console.log(maxNum([2,5,3])); // 5

const nums = [1,2,3,4,5,6];
const odds = nums.filter(n => n % 2 === 1);
const evens = nums.filter(n => n % 2 === 0);
console.log(odds, evens);

// FizzBuzz
for(let a = 1; a <= 15; a++){
  if(a % 3 === 0 && a % 5 === 0) console.log("FizzBuzz");
  else if(a % 3 === 0) console.log("Fizz");
  else if(a % 5 === 0) console.log("Buzz");
  else console.log(a);
}
