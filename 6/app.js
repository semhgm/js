//arrays
const fruits = ["apple", "banana", "orange", "mango"];
const numbers = [1, 2, 3, 4, 5];

//accessing array elements
console.log(fruits[0]); // apple
console.log(numbers[2]); // 3

//modifying array elements
fruits[1] = "strawberry";
numbers.push(6);

//looping through arrays
fruits.forEach(fruit => {
    console.log(fruit);
});

numbers.forEach(number => {
    console.log(number);
});

//array methods
const moreFruits = fruits.concat(["grape", "kiwi"]);
const filteredNumbers = numbers.filter(num => num > 3);
const mappedFruits = fruits.map(fruit => fruit.toUpperCase());

console.log(moreFruits);
console.log(filteredNumbers);
console.log(mappedFruits);

//finding elements
const foundFruit = fruits.find(fruit => fruit.startsWith("m"));
console.log(foundFruit); // mango

//array length
console.log(`Fruits array length: ${fruits.length}`);
console.log(`Numbers array length: ${numbers.length}`);

fruits.push("cherry");
console.log('After adding cherry:', fruits);

numbers.pop();
console.log('After removing last number:', numbers);
numbers.push(7);
console.log('After adding 7:', numbers);

// unshift and shift
fruits.unshift("kiwi");
console.log('After adding kiwi at the beginning:', fruits);
numbers.shift();
console.log('After removing first number:', numbers);

//splice method
fruits.splice(2, 1, "pear");
console.log('After splicing fruits:', fruits);
numbers.splice(1, 2, 8, 9);
console.log('After splicing numbers:', numbers);

//toString and join
const fruitsString = fruits.toString();
console.log('Fruits as string:', fruitsString);
const numbersJoined = numbers.join(" - ");
console.log('Numbers joined with " - ":', numbersJoined);

const numbersToString = numbers.toString();
console.log('Numbers as string:', numbersToString);

if(typeof(numbersToString)=== 'string'){
    console.log('numbersToString is indeed a string.');
} // string

//join 
const numbersJoinedWithTiren = numbers.join(" - ");
console.log('Numbers joined with " - ":', numbersJoinedWithTiren);

console.log(parseInt(numbersJoinedWithTiren));
console.log(typeof(parseInt(numbersJoinedWithTiren)));

//concat
const combinedArray = fruits.concat(numbers);
console.log('Combined array:', combinedArray);

//slice
const someFruits = fruits.slice(1, 4);
console.log('Sliced fruits (1 to 4):', someFruits);

const someNumbers = numbers.slice(2);
console.log('Sliced numbers (from index 2):', someNumbers);

//indexOf and lastIndexOf
const indexOfMango = fruits.indexOf("mango");
console.log('Index of mango:', indexOfMango);

const lastIndexOf3 = numbers.lastIndexOf(3);
console.log('Last index of 3:', lastIndexOf3);