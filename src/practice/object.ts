
const student: {
    name: string,
    age: number,
    isPassed: boolean
} = {
    name: 'Emon Mahdi',
    age: 28,
    isPassed: true
}
console.log(student.name)
console.log(student.age)


type User = {
    name: string,
    age: number,
    isMarried?: boolean // optional
}

let user1: User = {
    name: 'Emran Hossain', 
    age: 30,
    isMarried: true
}


let user2: User ={
    name: "Hasan Imam",
    age: 32
}

console.log(user1)
console.log(user2)

// Example 2: Function + Optional Property

function printStudentInfo(student: User){
    console.log(`Student name ${student.name}`)
    if(student.age){
        console.log(`Student Age: ${student.age}`)
    }
}
printStudentInfo({name: 'Emon', age: 23})
printStudentInfo({name: 'Mahdi', age: 29, isMarried: true})

/* 

দারুণ ✅
আজ আমরা শিখব TypeScript এর একদম গুরুত্বপূর্ণ একটা বিষয় —
👉 **Object Types, Optional Properties, এবং Literal Types**

এই তিনটা কনসেপ্ট **TypeScript-এর “Core Type System”-এর হৃৎপিণ্ড** বলা যায় ❤️

তাহলে চল একদম শুরু থেকে A to Z শিখি —
**Code Example + Problem Solving + Interview Q&A + Practice Task সহ বাংলা ব্যাখ্যা** 😎

---

# 🧱 1️⃣ TypeScript Object Types

TypeScript এ **object** মানে হলো key-value পেয়ার, যেখানে আমরা **property এর type আগেই define করে দেই।**

---

## 🔹 Example 1: Basic Object Type

```typescript
let person: {
  name: string;
  age: number;
  isStudent: boolean;
} = {
  name: "Emon",
  age: 24,
  isStudent: true,
};

console.log(person.name); // Emon
console.log(person.age);  // 24
```

🧠 **ব্যাখ্যা:**
এখানে আমরা বলেছি, `person` object-এর `name` হবে string, `age` হবে number, আর `isStudent` হবে boolean।

---

## 🔹 Example 2: Type Alias (Object টাইপ রিইউজ করা)

```typescript
type User = {
  name: string;
  email: string;
  isActive: boolean;
};

let user1: User = { name: "Mahdi", email: "mahdi@gmail.com", isActive: true };
let user2: User = { name: "Hasan", email: "hasan@gmail.com", isActive: false };

console.log(user1, user2);
```

🧠 **ব্যাখ্যা:**
Type alias (`type User`) ব্যবহার করলে একই structure বারবার ব্যবহার করা যায় — clean, reusable, professional!

---

# 🧩 2️⃣ Optional Properties (?)

কিছু property সব object-এ নাও থাকতে পারে —
তখন TypeScript-এ আমরা “?” ব্যবহার করি **Optional Property** বোঝাতে।

---

## 🔹 Example 1: Optional Property

```typescript
type Student = {
  name: string;
  age?: number; // optional property
};

let s1: Student = { name: "Emon" };
let s2: Student = { name: "Mahdi", age: 23 };

console.log(s1);
console.log(s2);
```

🧠 **ব্যাখ্যা:**
👉 `age` property টা optional — অর্থাৎ চাইলে দেবে, চাইলে না দিলেও error দিবে না।

---

## 🔹 Example 2: Function + Optional Property

```typescript
function printStudentInfo(student: Student) {
  console.log(`Name: ${student.name}`);
  if (student.age) {
    console.log(`Age: ${student.age}`);
  }
}

printStudentInfo({ name: "Emon" });
printStudentInfo({ name: "Hasan", age: 22 });
```

---

## 🔹 Example 3: Optional in Nested Objects

```typescript
type Address = {
  city: string;
  zip?: number;
};

type Employee = {
  name: string;
  address?: Address;
};

let emp1: Employee = { name: "Emon" };
let emp2: Employee = { name: "Mahdi", address: { city: "Dhaka", zip: 1205 } };
```

---

# 🧱 3️⃣ Literal Types

Literal Types মানে — নির্দিষ্ট মান (fixed value) যা TypeScript আগে থেকে জানে।
যেমন: “type” হবে `"admin" | "user" | "guest"` — অর্থাৎ এর বাইরে কিছু হবে না।

---

## 🔹 Example 1: String Literal Type

```typescript
type Role = "admin" | "user" | "guest";

let currentRole: Role;

currentRole = "admin"; // ✅
currentRole = "user"; // ✅
// currentRole = "manager"; ❌ Error: Not allowed
```

---

## 🔹 Example 2: Number Literal Type

```typescript
type Dice = 1 | 2 | 3 | 4 | 5 | 6;

function rollDice(): Dice {
  return (Math.floor(Math.random() * 6) + 1) as Dice;
}

console.log(rollDice());
```

---

## 🔹 Example 3: Object + Literal Type

```typescript
type Product = {
  name: string;
  category: "electronics" | "clothing" | "food";
  price: number;
};

let laptop: Product = {
  name: "Dell Laptop",
  category: "electronics", // ✅ valid
  price: 800,
};
```

---

## 🔹 Example 4: Literal Type in Function Parameter

```typescript
function printStatus(status: "success" | "error" | "loading") {
  console.log(`Status is ${status}`);
}

printStatus("success");
printStatus("loading");
// printStatus("failed"); ❌ Error
```

---

# 🧩 4️⃣ Problem Solving Examples

---

### 🧠 Problem 1: Create User Profile Function

```typescript
type UserProfile = {
  username: string;
  age?: number;
  status: "active" | "inactive";
};

function printProfile(user: UserProfile) {
  console.log(`User: ${user.username}`);
  console.log(`Status: ${user.status}`);
  if (user.age) console.log(`Age: ${user.age}`);
}

printProfile({ username: "Emon", status: "active" });
printProfile({ username: "Mahdi", status: "inactive", age: 23 });
```

---

### 🧠 Problem 2: Shop Item with Optional Discount

```typescript
type Item = {
  name: string;
  price: number;
  discount?: number;
};

function getFinalPrice(item: Item): number {
  if (item.discount) {
    return item.price - (item.price * item.discount) / 100;
  }
  return item.price;
}

console.log(getFinalPrice({ name: "Shirt", price: 1000 }));
console.log(getFinalPrice({ name: "Pant", price: 1200, discount: 10 }));
```

---

### 🧠 Problem 3: Vehicle Type Literal Example

```typescript
type Vehicle = {
  type: "car" | "bike" | "truck";
  brand: string;
  speed: number;
};

function displayVehicle(vehicle: Vehicle) {
  console.log(`This is a ${vehicle.brand} ${vehicle.type} running at ${vehicle.speed} km/h`);
}

displayVehicle({ type: "car", brand: "BMW", speed: 120 });
displayVehicle({ type: "bike", brand: "Yamaha", speed: 90 });
```

---

# 🧠 Interview Q&A (বাংলায় ব্যাখ্যাসহ)

---

### ❓1. TypeScript এ object type কিভাবে define করো?

👉 উত্তর:

```typescript
let person: { name: string; age: number } = { name: "Emon", age: 24 };
```

এখানে object-এর প্রতিটা প্রপার্টির টাইপ আগে থেকেই নির্ধারণ করা হয়েছে।

---

### ❓2. Optional property কবে ব্যবহার করো?

👉 উত্তর:
যখন কোনো প্রপার্টি কিছু অবজেক্টে থাকবে, কিছুতে থাকবে না।

```typescript
type Student = { name: string; age?: number };
```

---

### ❓3. Literal Type কী?

👉 উত্তর:
Literal type নির্দিষ্ট value সেট করে দেয় — তার বাইরে কিছু দিলে error দিবে।

```typescript
type Status = "active" | "inactive";
```

---

### ❓4. Type Alias vs Interface এর পার্থক্য?

👉 উত্তর:

* `type` → primitive, union, intersection সব কিছুর জন্য কাজ করে।
* `interface` → শুধু object shape এর জন্য।
  তবে Object Type এর জন্য দুটো প্রায় একইভাবে কাজ করে।

---

### ❓5. Nested Object এ Optional property কিভাবে হ্যান্ডেল করো?

👉 উত্তর:
Optional chaining ব্যবহার করে:

```typescript
console.log(employee.address?.city);
```

---

# 🧩 Practice Tasks

✅ **Task 1:**
একটা `Product` টাইপ বানাও যেখানে থাকবে:
`name`, `price`, `discount?`, `category: "clothing" | "electronics" | "grocery"`

একটা ফাংশন লেখো যেটা ডিসকাউন্টসহ ফাইনাল প্রাইস রিটার্ন করবে।

---

✅ **Task 2:**
একটা `User` টাইপ বানাও —
`name`, `role: "admin" | "user" | "guest"`, `email?`
একটা ফাংশন লেখো যেটা রোল অনুযায়ী আলাদা মেসেজ দেখাবে।

---

✅ **Task 3:**
একটা `Vehicle` অবজেক্ট লিস্ট তৈরি করো (type ব্যবহার করে)।
তারপর filter করে শুধু “bike” টাইপ গুলো বের করো।

---

✅ **Task 4:**
একটা `Student` array বানাও যেখানে কিছু student-এর `marks` থাকবে না।
যাদের marks আছে শুধু তাদের average বের করো।

---

# 🚀 Summary Table

| Concept       | Example                         | ব্যাখ্যা               |                           |
| ------------- | ------------------------------- | ---------------------- | ------------------------- |
| Object Type   | `{ name: string; age: number }` | Fixed shape            |                           |
| Optional      | `age?: number`                  | থাকতে পারে বা নাও পারে |                           |
| Literal Type  | `"admin"                        | "user"`                | নির্দিষ্ট মান বাধ্যতামূলক |
| Nested Object | `{ address?: { city: string }}` | ভিতরের অবজেক্ট         |                           |
| Type Alias    | `type User = { name: string }`  | পুনঃব্যবহারযোগ্য টাইপ  |                           |

---

চাও কি আমি পরের অংশে তোমার জন্য
👉 **TypeScript Function Types (parameter, return, optional, generic function, interview + task)**
একইভাবে বাংলায় সাজিয়ে দিই?


*/