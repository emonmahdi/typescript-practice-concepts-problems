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

// 🧩 Problem 3: Find Longest String

function longestName(names: string[]): string {
    return names.reduce((longest, current ) =>  
    current.length > longest.length ? current : longest
    )
}
const stringNames : string[] = ['Abdullah', 'Mahim', 'Emon Mahdi', "hasan"]
console.log(longestName(stringNames))

// 🧩 Problem 4: Remove Duplicate Elements
function removeDuplicate(arr:number[]): number[]{
    return Array.from(new Set(arr))
}
const numberRepeat: number[] = [12,4,1,2,4,12,3,1,2,4,12,5,5,5,12,3,46,4,21,1,2];
console.log(removeDuplicate(numberRepeat))

// 🧩 Problem 5: Reverse Array (Without using .reverse)

function reverseArray<T>(arr: T[]): T[] {
    let result: T[] = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      result.push(arr[i]);
    }
    return result;
  }
  
  console.log(reverseArray(["A", "B", "C", "D"])); // ["D", "C", "B", "A"]
  

//   🔹 10. Spread Operator in Array

let arr1: number[] = [1, 2, 3];
let arr2: number[] = [4, 5, 6];

const merged = [...arr1, ...arr2];
console.log(merged)


/* 
দারুণ 🔥
চলো এখন আমরা **TypeScript এ Array নিয়ে “A to Z”** সম্পূর্ণ শেখার গাইড বানাই —
মানে এখানে থাকবে 👇

✅ Array এর **সব কনসেপ্ট**
✅ **বাস্তব উদাহরণ (Problem Solving)**
✅ **Common Interview Questions (বাংলায় ব্যাখ্যা সহ)**

---

# 🎯 **TypeScript Array – A to Z Guide**

---

## 🧱 Step 1: Array কী?

👉 Array হলো একাধিক ভ্যালু একসাথে রাখার একটি ডেটা স্ট্রাকচার।
TypeScript এ আমরা array এর element-এর type define করতে পারি।

---

## 🔹 1. Basic Array Declaration

```typescript
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Emon", "Mahdi", "Hasan"];
let isActive: boolean[] = [true, false, true];

console.log(numbers);
console.log(names);
console.log(isActive);
```

---

## 🔹 2. Array এর অন্যভাবে Declaration (Generic Syntax)

```typescript
let fruits: Array<string> = ["Apple", "Banana", "Mango"];
let prices: Array<number> = [100, 200, 300];
```

➡️ `number[]` আর `Array<number>` — দুটোই একই জিনিস।

---

## 🔹 3. Mixed Type Array (Union Type)

```typescript
let mixedArray: (string | number)[] = ["Apple", 100, "Banana", 200];
console.log(mixedArray);
```

---

## 🔹 4. Array এর Important Properties

```typescript
let nums: number[] = [10, 20, 30, 40, 50];

console.log(nums.length); // 5
console.log(nums[0]); // 10
console.log(nums[nums.length - 1]); // 50
```

---

## 🔹 5. Array Methods (Most Common Ones)

### ➤ `push()` এবং `pop()`

```typescript
let numbers: number[] = [1, 2, 3];
numbers.push(4); // যোগ করা
console.log(numbers); // [1,2,3,4]

numbers.pop(); // শেষ থেকে বাদ দেয়া
console.log(numbers); // [1,2,3]
```

---

### ➤ `shift()` এবং `unshift()`

```typescript
let fruits: string[] = ["Banana", "Orange"];
fruits.unshift("Apple"); // শুরুতে যোগ করা
console.log(fruits); // ["Apple", "Banana", "Orange"]

fruits.shift(); // শুরু থেকে বাদ দেয়া
console.log(fruits); // ["Banana", "Orange"]
```

---

### ➤ `map()`

```typescript
let numbers: number[] = [1, 2, 3, 4, 5];
let doubled = numbers.map((num) => num * 2);

console.log(doubled); // [2,4,6,8,10]
```

---

### ➤ `filter()`

```typescript
let numbers: number[] = [10, 25, 30, 45, 60];
let filtered = numbers.filter((num) => num > 30);

console.log(filtered); // [45, 60]
```

---

### ➤ `find()`

```typescript
let names: string[] = ["Emon", "Mahdi", "Hasan"];
let result = names.find((n) => n === "Mahdi");

console.log(result); // Mahdi
```

---

### ➤ `forEach()`

```typescript
let colors: string[] = ["Red", "Green", "Blue"];
colors.forEach((color, index) => {
  console.log(`Index ${index}: ${color}`);
});
```

---

### ➤ `reduce()` (Sum Example)

```typescript
let nums: number[] = [1, 2, 3, 4, 5];
let sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15
```

---

### ➤ `includes()` এবং `indexOf()`

```typescript
let languages: string[] = ["JavaScript", "TypeScript", "Python"];
console.log(languages.includes("TypeScript")); // true
console.log(languages.indexOf("Python")); // 2
```

---

## 🔹 6. Array of Objects

```typescript
type Student = {
  name: string;
  age: number;
  isPassed: boolean;
};

let students: Student[] = [
  { name: "Emon", age: 24, isPassed: true },
  { name: "Hasan", age: 22, isPassed: false },
  { name: "Mahdi", age: 23, isPassed: true },
];

console.log(students);

// Filter Passed Students
let passed = students.filter((s) => s.isPassed);
console.log("✅ Passed Students:", passed);
```

---

## 🔹 7. Array Destructuring

```typescript
let scores: number[] = [85, 90, 78];

const [math, english, science] = scores;
console.log(`Math: ${math}, English: ${english}, Science: ${science}`);
```

---

## 🔹 8. Array + Function Example (Problem Solving)

### 🧩 Problem 1: Array Sum

```typescript
function arraySum(arr: number[]): number {
  return arr.reduce((acc, val) => acc + val, 0);
}

console.log(arraySum([1, 2, 3, 4, 5])); // Output: 15
```

---

### 🧩 Problem 2: Find Even Numbers

```typescript
function findEvenNumbers(arr: number[]): number[] {
  return arr.filter((num) => num % 2 === 0);
}

console.log(findEvenNumbers([1, 2, 3, 4, 5, 6])); // [2,4,6]
```

---

### 🧩 Problem 3: Find Longest String

```typescript
function longestName(names: string[]): string {
  return names.reduce((longest, current) =>
    current.length > longest.length ? current : longest
  );
}

console.log(longestName(["Emon", "Mahdi", "Abdullah", "Hasan"])); // Abdullah
```

---

### 🧩 Problem 4: Remove Duplicate Elements

```typescript
function removeDuplicates(arr: number[]): number[] {
  return Array.from(new Set(arr));
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1,2,3,4,5]
```

---

### 🧩 Problem 5: Reverse Array (Without using .reverse)

```typescript
function reverseArray<T>(arr: T[]): T[] {
  let result: T[] = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}

console.log(reverseArray(["A", "B", "C", "D"])); // ["D", "C", "B", "A"]
```

---

## 🔹 9. Multi-dimensional Array

```typescript
let matrix: number[][] = [
  [1, 2],
  [3, 4],
  [5, 6],
];

console.log(matrix[1][1]); // 4
```

---

## 🔹 10. Spread Operator in Array

```typescript
let arr1: number[] = [1, 2, 3];
let arr2: number[] = [4, 5, 6];

let merged = [...arr1, ...arr2];
console.log(merged); // [1,2,3,4,5,6]
```

---

# 🧠 Interview Questions (বাংলায় ব্যাখ্যা সহ)

---

### ❓1. Array vs Tuple এর পার্থক্য কী?

**উত্তর:**

* Array এ সব element একই টাইপের হয়।
* Tuple এ নির্দিষ্ট সংখ্যক element এবং নির্দিষ্ট টাইপ থাকে।

```typescript
let arr: number[] = [1, 2, 3]; 
let tuple: [string, number] = ["Emon", 24];
```

---

### ❓2. TypeScript এ Array কিভাবে define করো?

**উত্তর:**

```typescript
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["Emon", "Mahdi"];
```

---

### ❓3. Array এ “map” আর “forEach” এর পার্থক্য কী?

**উত্তর:**

* `map()` নতুন Array রিটার্ন করে।
* `forEach()` শুধু loop চালায়, কিছু return করে না।

---

### ❓4. `readonly` array কী?

**উত্তর:**
TypeScript এ `readonly` array মানে যেটি modify করা যাবে না।

```typescript
const ids: readonly number[] = [1, 2, 3];
// ids.push(4); ❌ Error: Property 'push' does not exist on type 'readonly number[]'
```

---

### ❓5. Generic Array কেন দরকার?

**উত্তর:**
Generic array reusable করে দেয় যেকোনো টাইপের জন্য।

```typescript
function getFirst<T>(arr: T[]): T {
  return arr[0];
}

console.log(getFirst<number>([10, 20, 30]));
console.log(getFirst<string>(["a", "b", "c"]));
```

---

# 🧩 Mini Project Task – Array Master Practice

✅ **Task 1:**
`filterPassedStudents(students: Student[])` — যেসব ছাত্র passed হয়েছে তাদের নাম প্রিন্ট করো।

✅ **Task 2:**
`findMax(arr: number[])` — সর্বোচ্চ সংখ্যা বের করো।

✅ **Task 3:**
`groupByCategory(products: Product[])` — category অনুযায়ী প্রোডাক্ট গুলো গ্রুপ করো।

✅ **Task 4:**
একটা function লেখো যেটা নামগুলো sort করে রিটার্ন করবে (ascending / descending)।

✅ **Task 5:**
একটা array of string থেকে duplicate সরিয়ে alphabetical order এ সাজাও।

---

# 🚀 Summary

| Concept         | উদাহরণ                                             |            |
| --------------- | -------------------------------------------------- | ---------- |
| Basic           | `let arr: number[] = [1,2,3]`                      |            |
| Union Array     | `(string                                           | number)[]` |
| Object Array    | `User[]`                                           |            |
| Readonly Array  | `readonly number[]`                                |            |
| Methods         | `map, filter, reduce, find, includes, indexOf`     |            |
| Problem Solving | sum, filter, findLongest, removeDuplicate, reverse |            |
| Interview       | ৫+ প্রশ্ন ও উত্তর                                  |            |

---

তুমি কি চাও আমি এখন এর পরের অংশ
👉 **TypeScript “Tuple + Object + Function Advanced Practice”**
একইভাবে (A to Z, Problem Solving + Interview) বানিয়ে দিই?






*/