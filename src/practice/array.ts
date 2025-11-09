const numbers: number[] = [10,20,30]
console.log(numbers)

const names: string[] = ['emon', 'mahdi', 'hasan']
console.log(names);

const isBoolean: boolean[] = [true, false, true];
console.log(isBoolean);


// Array এর অন্যভাবে Declaration (Generic Syntax)

const fruits: Array<string> = ['apple', 'mango', 'banana'];
const price: Array<number> = [12,14,15]
console.log(fruits)
console.log(price)

// 3. Mixed Type Array (Union Type)
let mixedArray : (string | number)[]=['Apple', 10, 'Mango', 13];
console.log('Union Type array: ',mixedArray)

// 4. Array এর Important Properties

const arrayProperties: number[] = [12,21,34,56,67,44];

console.log(arrayProperties.length) // number of array length;
console.log(arrayProperties[0]) // first index
console.log(arrayProperties[arrayProperties.length - 1])  //last index



// 5. Array Methods (Most Common Ones)
numbers.push(101);
console.log(numbers)

numbers.pop(); // // শেষ থেকে বাদ দেয়া
console.log(numbers)

fruits.unshift('pineapple') // শুরুতে যোগ করা
console.log(fruits)

price.shift() // শুরু থেকে বাদ দেয়া
console.log(price)

// map
const doubled = numbers.map((num) => num * 2)
console.log(doubled)

// filter
const filtered = numbers.filter((num) => num > 20);
console.log(filtered)

//find
const findName = names.find((n) => n === 'emon');
console.log(findName);


// forEach
let colors: string[] = ["Red", "Green", "Blue"];
colors.forEach((color, index) => {
    console.log(`Index ${index}: ${color}`)
})

// reduce
const nums: number[] = [1,2,3,4,5];
const resultReduce = nums.reduce((acc, curr) => acc + curr, 0);
console.log(resultReduce)

// includes() এবং indexOf()
let languages: string[] = ["JavaScript", "TypeScript", "Python"];
console.log(languages.includes('JavaScript'));
console.log(languages.indexOf('TypeScript'));


// 6. Array of Objects

type StudentType = {
    name: string,
    age: number,
    isPassed: boolean
}

const students:  StudentType[] = [
    {name: 'Emon', age: 21, isPassed: true},
    {name: 'Mahdi', age: 25, isPassed: true},
    {name: 'Hasan', age: 31, isPassed: false}
];

console.log(students)

// // Filter Passed Students
const passed = students.filter((s) => s.isPassed == true)
console.log(`Passed student:`, passed );

// Array Destructuring
const scores: number[] = [85, 69, 97];
const [math, bangla, english] = scores;

console.log(`Score are math: ${math}, bangla: ${bangla}, English: ${english}`)


// 🧩 Problem 1: Array Sum

const numbersSum: number[] = [2,4,6,8,10, 5,9,13,21];

function arraySum(arr: number[]): number{
    return arr.reduce((acc, curr) => acc + curr, 0)
}
console.log(arraySum(numbersSum))

// 🧩 Problem 2: Find Even Numbers
function evenNumber(arr: number[]): number[]{
    return arr.filter((n) => n % 2 === 0)
}

console.log(evenNumber(numbersSum))