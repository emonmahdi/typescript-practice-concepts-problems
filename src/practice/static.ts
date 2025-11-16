class Counter{
   static count: number = 0;

   static increment(){
        return(Counter.count = Counter.count + 1)
    }
   static decrement(){
        return(Counter.count = Counter.count - 1)
    }
}

// const instance1 = new Counter()
// console.log(instance1.increment())

console.log(Counter.increment())

// const instance2 = new Counter()
// console.log(instance2.increment())

console.log(Counter.increment())


/* 

নিশ্চয়! এবার আমরা **TypeScript - static keyword** খুব সহজভাবে, বাস্তব উদাহরণ + সমস্যা সমাধান + ইন্টারভিউ Q&A সহ শিখবো।
Static হচ্ছে OOP-এর খুবই গুরুত্বপূর্ণ কনসেপ্ট।

---

# 🧩 **Static Keyword in TypeScript — সহজ ব্যাখ্যা (Bangla)**

## 🔹 Static কী?

`static` মানে হলো:

👉 **যে প্রপার্টি বা মেথড ক্লাসের অন্তর্গত, কিন্তু অবজেক্টের নয়।**
মানে object বানানো লাগবে না — ক্লাস থেকেই ব্যবহার করা যাবে।

---

# ✔ সাধারণ উদাহরণ

```ts
class Counter {
  static count = 0;

  static increment() {
    this.count++;
  }
}

Counter.increment();
Counter.increment();

console.log(Counter.count); // 2
```

### 🔍 বাংলা ব্যাখ্যা

* `count` হলো static property → object নয়, **class-এর property**
* `increment()` static method → class থেকেই কল করা হয়
* `Counter.increment()` → ঠিক
* `new Counter().increment()` → ❌ ভুল

---

# 🎯 Real Life Example: User Registration System

ধরো রেজিস্টার করা user সংখ্যা track করতে হবে:

```ts
class User {
  static totalUsers = 0;

  constructor(public name: string) {
    User.totalUsers++;
  }
}

const u1 = new User("Emon");
const u2 = new User("Mahdi");

console.log(User.totalUsers); // 2
```

### 🔍 ব্যাখ্যা

* Object যত তৈরি হবে, static count বাড়বে
* Static property class-level ডাটা store করে
* Individual object data → constructor parameters

---

# 🔥 Real Life Example: Math Helper Class

```ts
class MathHelper {
  static add(a: number, b: number) {
    return a + b;
  }

  static multiply(a: number, b: number) {
    return a * b;
  }
}

console.log(MathHelper.add(5, 10)); // 15
```

✔ কোনো object লাগেনা
✔ Tools/Utility classes-এ static বেশি ব্যবহার হয়

---

# 🧠 Static + Getter/Setter Combo Example

```ts
class Config {
  private static _version = "1.0";

  static get version() {
    return this._version;
  }

  static set version(v: string) {
    if (!v.includes(".")) {
      throw new Error("Invalid version format");
    }
    this._version = v;
  }
}

console.log(Config.version); // getter
Config.version = "2.0";     // setter
console.log(Config.version);
```

✔ getter/setter static-ও হতে পারে
✔ global settings store করতে খুবই সুবিধা

---

# 🧩 Problem Solving

---

## 📝 **Problem 1: Bank System Static Account Number Generator**

### 🎯 Requirement:

* নতুন অ্যাকাউন্ট তৈরি হলে auto-increment account number দিতে হবে
* Account number should be static
* প্রতিটা user-এর own balance থাকবে

### ✔ Solution:

```ts
class BankAccount {
  private static nextAccountNumber = 1;

  public accountNumber: number;
  private balance = 0;

  constructor(public name: string) {
    this.accountNumber = BankAccount.nextAccountNumber++;
  }

  deposit(amount: number) {
    this.balance += amount;
  }

  getBalance() {
    return this.balance;
  }
}

const u1 = new BankAccount("Emon");
const u2 = new BankAccount("Hasan");

console.log(u1.accountNumber); // 1
console.log(u2.accountNumber); // 2
```

### 🔍 ব্যাখ্যা

* account number auto-increment হল
* static property shared → সব object একই value access করতে পারে
* constructor প্রতি object-এ নতুন number assign করে

---

# 📝 **Problem 2: Unique ID Generator**

```ts
class IDGenerator {
  private static lastId = 1000;

  static generate() {
    return ++this.lastId;
  }
}

console.log(IDGenerator.generate()); // 1001
console.log(IDGenerator.generate()); // 1002
```

✔ Unique, auto incremented ID generating system

---

# 👨‍💻 TypeScript Interview Q&A (Bangla)

---

### ❓ 1. Static property কী?

**Answer:**
Static property ক্লাস-এর property, object-এর নয়।
Class থেকেই access করা যায়, object তৈরি লাগেনা।

---

### ❓ 2. Static method কেন ব্যবহার করা হয়?

**Answer:**
Utility functions (math, time, logger), global configuration, counters, ID generators — যেগুলোর জন্য object create করার দরকার নেই।

---

### ❓ 3. Static property কি object দিয়ে access করা যায়?

**Answer:**
❌ না।

```ts
const obj = new A();
obj.myStatic; // Error
```

---

### ❓ 4. Static কি inheritance support করে?

**Answer:**
✔ হ্যাঁ, child class static property/method ইনহেরিট পায়।

```ts
class A {
  static name = "Base";
}

class B extends A {}

console.log(B.name); // "Base"
```

---

### ❓ 5. Static + constructor একসাথে কিভাবে কাজ করে?

**Answer:**
Static values shared across all instances → constructor instance-level কাজ করে।
Static কখনই constructor এর অংশ নয়।

---

### ❓ 6. Static context এ `this` কী নির্দেশ করে?

**Answer:**
Static method-এ `this` → class নিজেই
Instance method-এ `this` → object instance

---

# 🧪 Practice Tasks (for you)

### 🟦 Task 1

`TicketCounter` class বানাও

* static counter
* static generateTicket()
* প্রতিবার কল করলে নতুন ticket number return করবে

### 🟦 Task 2

`AppSettings` class বানাও

* static appName
* static version
* getter/setter দিয়ে version validate করবে

### 🟦 Task 3

`Product` class বানাও

* static TAX value (like 15%)
* price + TAX calculate করা getter বানাও

চাও চাইলে আমি এগুলোর full solution তৈরি করে দেবো ❤️


*/