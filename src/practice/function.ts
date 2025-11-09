// 🔹 Example 1: Simple Function with Type

function addFunc(a: number, b: number): number{
    return a + b
}

console.log(addFunc(4, 10))

// 🧩 2️⃣ Function Return Type

function greet(name: string): string {
    return `Hello, ${name}!`;
  }

// যদি ফাংশন কিছু return না করে, তাহলে return type হবে void।

function logMessage(message: string): void {
    console.log("Log:", message);
  }

// 🧩 3️⃣ Optional & Default Parameters

function printUser(name: string, age?: number): void {
    console.log(`Name: ${name}`);
    if (age) console.log(`Age: ${age}`);
  }
  
  printUser("Emon");
  printUser("Mahdi", 24);

//   🔹 Example 2: Default Parameter Value

function greetUser(name: string = "Guest"): void {
    console.log(`Welcome, ${name}`);
  }
  
  greetUser(); // Welcome, Guest
  greetUser("Emon"); // Welcome, Emon
  

// 🧩 4️⃣ Function Expression & Arrow Function

const multiply = function (x: number, y: number): number {
    return x * y;
  };

  const divide = (x: number, y: number): number => x / y;


/* 

অসাধারণ! 🔥
তুমি এখন **TypeScript Function** শিখতে চাও একদম A to Z —
মানে সবকিছু:
👉 বেসিক → প্যারামিটার → রিটার্ন টাইপ → অপশনাল → ডিফল্ট ভ্যালু → অ্যানোনিমাস → অ্যারো ফাংশন → ফাংশন টাইপ → জেনেরিক → ইন্টারভিউ প্রশ্ন → প্র্যাকটিস টাস্ক 😎

চলো ধাপে ধাপে একদম প্রফেশনালভাবে শিখি — বাংলা ব্যাখ্যা + কোড উদাহরণসহ 👇

---

# 🧩 1️⃣ Function Basic in TypeScript

JavaScript এ যেভাবে ফাংশন লিখি, TypeScript তাতে **টাইপ যোগ করে দেয়** —
অর্থাৎ প্যারামিটার ও রিটার্ন টাইপ আগেই declare করা যায় ✅

---

### 🔹 Example 1: Simple Function with Type

```typescript
function add(a: number, b: number): number {
  return a + b;
}

console.log(add(5, 10)); // 15
```

🧠 **ব্যাখ্যা:**

* `a: number` ও `b: number` → parameter টাইপ
* `: number` → return টাইপ

যদি অন্য টাইপ দাও 👇

```typescript
add("5", 10); // ❌ Error
```

---

# 🧩 2️⃣ Function Return Type

TypeScript ফাংশন রিটার্ন টাইপও চেক করে।

### 🔹 Example 1: Explicit Return Type

```typescript
function greet(name: string): string {
  return `Hello, ${name}!`;
}
```

### 🔹 Example 2: Void Return Type

যদি ফাংশন কিছু **return না করে**, তাহলে return type হবে `void`।

```typescript
function logMessage(message: string): void {
  console.log("Log:", message);
}
```

---

# 🧩 3️⃣ Optional & Default Parameters

### 🔹 Example 1: Optional Parameter (`?`)

```typescript
function printUser(name: string, age?: number): void {
  console.log(`Name: ${name}`);
  if (age) console.log(`Age: ${age}`);
}

printUser("Emon");
printUser("Mahdi", 24);
```

👉 `age` ঐচ্ছিক (optional) — না দিলে error দিবে না।

---

### 🔹 Example 2: Default Parameter Value

```typescript
function greetUser(name: string = "Guest"): void {
  console.log(`Welcome, ${name}`);
}

greetUser(); // Welcome, Guest
greetUser("Emon"); // Welcome, Emon
```

---

# 🧩 4️⃣ Function Expression & Arrow Function

TypeScript-এ function কে variable এও assign করা যায়।

### 🔹 Example 1: Function Expression

```typescript
const multiply = function (x: number, y: number): number {
  return x * y;
};
```

### 🔹 Example 2: Arrow Function

```typescript
const divide = (x: number, y: number): number => x / y;
```

---

# 🧩 5️⃣ Function Type Declaration

আমরা চাইলে একটা ফাংশনের type define করে রাখতে পারি 👇

### 🔹 Example 1: Function Type Variable

```typescript
let calc: (x: number, y: number) => number;

calc = (a, b) => a + b;
console.log(calc(5, 7)); // 12
```

🧠 **ব্যাখ্যা:**
`calc` ভ্যারিয়েবল শুধুমাত্র এমন ফাংশন নিতে পারবে যেটার প্যারামিটার দুইটা number এবং return করবে number।

---

# 🧩 6️⃣ Type Alias for Function Type

```typescript
type MathOperation = (a: number, b: number) => number;

const add: MathOperation = (a, b) => a + b;
const sub: MathOperation = (a, b) => a - b;

console.log(add(10, 5)); // 15
console.log(sub(10, 5)); // 5
```

---

# 🧩 7️⃣ Anonymous Function (Callback Example)

```typescript
function processUser(callback: (name: string) => void) {
  callback("Emon");
}

processUser((name) => {
  console.log("User name is:", name);
});
```

---

# 🧩 8️⃣ Rest Parameters

যদি ফাংশনে অনেকগুলো argument নিতে চাও — তখন `...` (rest) ব্যবহার করো।

```typescript
function sumAll(...numbers: number[]): number {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sumAll(1, 2, 3, 4, 5)); // 15
```

---

# 🧩 9️⃣ Function Overloading (Advanced Concept)

একই ফাংশনের একাধিক signature থাকতে পারে।

```typescript
function getInfo(value: string): string;
function getInfo(value: number): number;
function getInfo(value: any): any {
  return value;
}

console.log(getInfo("Emon")); // string
console.log(getInfo(123)); // number
```

---

# 🧩 🔟 Generic Function (Reusability)

Generic ফাংশন মানে — ফাংশন যেকোনো টাইপের ডেটা হ্যান্ডেল করতে পারে, টাইপ সেফটি রেখেই।

```typescript
function identity<T>(value: T): T {
  return value;
}

console.log(identity<string>("Hello TypeScript"));
console.log(identity<number>(123));
```

🧠 **ব্যাখ্যা:**

* `<T>` হলো generic placeholder (যে কোনো টাইপ represent করে)
* ফাংশন কলের সময় তুমি টাইপ দেবে `<string>`, `<number>` ইত্যাদি।

---

# 🎯 Problem Solving Examples

---

### 🧠 Example 1: Calculate Rectangle Area

```typescript
function rectangleArea(width: number, height: number): number {
  return width * height;
}

console.log(rectangleArea(5, 10)); // 50
```

---

### 🧠 Example 2: Display User Info

```typescript
type User = {
  name: string;
  age?: number;
};

function showUserInfo(user: User): void {
  console.log(`Name: ${user.name}`);
  if (user.age) console.log(`Age: ${user.age}`);
}

showUserInfo({ name: "Emon" });
showUserInfo({ name: "Mahdi", age: 24 });
```

---

### 🧠 Example 3: Average of Numbers

```typescript
function average(...nums: number[]): number {
  let total = nums.reduce((a, b) => a + b, 0);
  return total / nums.length;
}

console.log(average(10, 20, 30)); // 20
```

---

### 🧠 Example 4: Generic Array Reverse Function

```typescript
function reverseArray<T>(arr: T[]): T[] {
  return arr.reverse();
}

console.log(reverseArray<number>([1, 2, 3]));
console.log(reverseArray<string>(["a", "b", "c"]));
```

---

# 💬 Interview Q&A (বাংলায় ব্যাখ্যাসহ)

---

### ❓1. TypeScript এ function এর parameter ও return type কিভাবে define করা হয়?

👉 উত্তর:

```typescript
function add(a: number, b: number): number {
  return a + b;
}
```

---

### ❓2. Void return type মানে কী?

👉 উত্তর:
যখন কোনো ফাংশন কিছু return করে না, তখন তার টাইপ হয় `void`।

---

### ❓3. Optional parameter কিভাবে define করো?

👉 উত্তর:

```typescript
function greet(name?: string) {
  console.log(`Hello, ${name || "Guest"}`);
}
```

---

### ❓4. Generic Function কী?

👉 উত্তর:
Generic Function এক বা একাধিক টাইপ নিয়ে কাজ করতে পারে কিন্তু টাইপ সেফটি বজায় রাখে।

```typescript
function identity<T>(value: T): T {
  return value;
}
```

---

### ❓5. Function Overloading কীভাবে কাজ করে?

👉 উত্তর:
একই ফাংশনের একাধিক declaration থাকতে পারে বিভিন্ন টাইপ বা প্যারামিটারের জন্য।

---

# 🧩 Practice Tasks (Stage: Function)

✅ **Task 1:**
একটা ফাংশন লেখো — `getFullName(firstName: string, lastName?: string)`
→ যদি lastName না থাকে শুধু firstName রিটার্ন করবে।

---

✅ **Task 2:**
একটা generic function বানাও `mergeArrays<T>(arr1: T[], arr2: T[]): T[]`
→ দুইটা array merge করে রিটার্ন করবে।

---

✅ **Task 3:**
একটা `calculate` নামের function বানাও —
প্যারামিটার: `(a: number, b: number, op: "add" | "sub" | "mul" | "div")`
→ operation অনুযায়ী রেজাল্ট রিটার্ন করবে।

---

✅ **Task 4:**
একটা ফাংশন লেখো `logData<T>(data: T)`
→ যেই টাইপের data পাঠাবে সেটাই console-এ প্রিন্ট করবে।

---

✅ **Task 5:**
একটা callback function example তৈরি করো —
যেটা array এর প্রতিটা item-এর value দ্বিগুণ করে নতুন array রিটার্ন করবে।

---

# 🧭 Summary Table

| Concept        | Example                            | Description        |
| -------------- | ---------------------------------- | ------------------ |
| Function Type  | `(x: number, y: number) => number` | টাইপ নির্ধারণ      |
| Optional Param | `age?: number`                     | চাইলে থাকবে        |
| Default Param  | `function(x=10)`                   | ডিফল্ট মান         |
| Void           | `(): void`                         | কিছু return করে না |
| Rest           | `(...nums: number[])`              | একাধিক আর্গুমেন্ট  |
| Generic        | `<T>(value: T): T`                 | টাইপ স্বাধীনতা     |
| Overloading    | একাধিক signature                   | ভিন্ন ব্যবহার      |

---

চাও কি আমি পরের অংশে তোমাকে
👉 **TypeScript Interface, Class, এবং Inheritance (OOP concepts)**
একইভাবে বাংলা ব্যাখ্যা + কোড + ইন্টারভিউ + টাস্কসহ সাজিয়ে দিই?


*/