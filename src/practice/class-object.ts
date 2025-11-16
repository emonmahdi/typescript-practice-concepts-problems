/* 

নীচে **TypeScript-এ Class এবং Object**— একদম শুরু থেকে অ্যাডভান্স পর্যন্ত—
**Definition, Simple Example, Real-Life Code, Problem Solving Task, Interview Q&A** সহ সম্পূর্ণ ব্যাখ্যা দেয়া হলো (Bangla Version)।

---

# 🔵 **1) Class & Object — Definition (Bangla)**

## ✅ **Class কী?**

**Class হলো একটি ব্লুপ্রিন্ট (Template)** যার মাধ্যমে Object তৈরি হয়।
এটা এমন, যেমন—

* একটি বাড়ির ডিজাইন = Class
* সেই ডিজাইন দিয়ে বানানো বাড়ি = Object

**Class → নিয়ম, গঠন, properties, methods define করে**
**Object → সেই class থেকে বানানো real data**

---

## ✅ **Object কী?**

Object হলো **class-এর instance** (বাস্তব রূপ)।
Class-এ যেভাবে property/method define করা থাকে Object সেটা ব্যবহার করতে পারে।

---

# 🔵 **2) Simple Class & Object Example (TS Code)**

```ts
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const p1 = new Person("Emon", 24);
p1.greet();
```

### Output:

```
Hello, my name is Emon and I am 24 years old.
```

---

# 🔵 **3) Real-Life Use Case: Student Admission System**

### Scenario:

School student admission form class দিয়ে manage করা হচ্ছে।

```ts
class Student {
  id: number;
  name: string;
  className: string;

  constructor(id: number, name: string, className: string) {
    this.id = id;
    this.name = name;
    this.className = className;
  }

  getDetails() {
    return `${this.name} admitted in class ${this.className}`;
  }
}

const s1 = new Student(101, "Mahdi", "Class-8");
console.log(s1.getDetails());
```

---

# 🔵 **4) Real-Life Use Case: E-commerce Product System**

```ts
class Product {
  name: string;
  price: number;
  
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  getDiscountedPrice(discount: number) {
    return this.price - (this.price * discount) / 100;
  }
}

const laptop = new Product("HP Laptop", 60000);
console.log(laptop.getDiscountedPrice(10));  // 54000
```

---

# 🔵 **5) Real-Life Use Case: Bank Account System**

```ts
class BankAccount {
  owner: string;
  private balance: number;

  constructor(owner: string, balance: number) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount: number) {
    this.balance += amount;
  }

  getBalance() {
    return this.balance;
  }
}

const acc = new BankAccount("Emon", 5000);
acc.deposit(2000);
console.log(acc.getBalance()); // 7000
```

---

# 🔵 **6) Problem Solving Tasks (Practice)**

### 🟣 **Task 1: Create a Car class**

* brand
* model
* speed
* method: accelerate(amount)
* method: brake(amount)

👉 চাইলে সমাধানও দেবো।

---

### 🟣 **Task 2: Create a Bank class**

* private balance
* deposit()
* withdraw()
* checkBalance()

👉 Real-life Encapsulation + Class practice।

---

### 🟣 **Task 3: Create a Library System**

* Add book
* Remove book
* Search book
* Count books

👉 চাইলে পুরো solution দেবো।

---

# 🔵 **7) Important Features of Class in TypeScript**

| Feature                      | Explanation                   |
| ---------------------------- | ----------------------------- |
| **constructor**              | Object তৈরি হওয়ার সময় চালু হয় |
| **this**                     | Current object-কে নির্দেশ করে |
| **methods**                  | Object-এর actions             |
| **properties**               | Object-এর ডেটা                |
| **public/private/protected** | Encapsulation control         |
| **readonly**                 | Property পরিবর্তন করা যাবে না |

---

# 🔵 **8) Class vs Object (Bangla)**

| Class                    | Object                           |
| ------------------------ | -------------------------------- |
| Template                 | Real Instance                    |
| কিছু define করে          | Define করা জিনিসগুলো ব্যবহার করে |
| Memory নেয় না            | Memory নেয়                       |
| একবার লিখলেই অনেক Object | অনেক Object তৈরি করা যায়         |

---

# 🔵 **9) Interview Q&A (Bangla)**

### **Q1. Class কী?**

**Ans:** Class হলো object তৈরির জন্য template। এতে properties এবং methods define করা হয়।

---

### **Q2. Object কী?**

**Ans:** Class থেকে তৈরি বাস্তব instance-কে Object বলে।

---

### **Q3. Constructor কী?**

**Ans:** ক্লাস থেকে object তৈরি হলে প্রথমে যে method call হয় সেটি constructor।

---

### **Q4. this কী?**

**Ans:** this keyword object-এর current instance-কে নির্দেশ করে।

---

### **Q5. Class এবং Object এর মধ্যে পার্থক্য কী?**

Class হলো design / plan
Object হলো সেই design অনুযায়ী real জিনিস

---

### **Q6. কেন Class ব্যবহার করি?**

✔ Code organization
✔ Reusability
✔ Maintainability
✔ Real-world modeling

---

### **Q7. Real-life example of Class/Object?**

* Student Management
* E-commerce Product
* Banking System
* Employee Salary
  সব জায়গায় Class/Object ব্যবহার হয়।

---

### **Q8. TypeScript class কীভাবে JavaScript-এ কম্পাইল হয়?**

TS → ক্লাসকে ES5/ES6 compatible JavaScript-এ convert করে।
ভিতরে function + prototype হয়।

---

# 🔵 **10) Want More?**

আমি চাইলে নিচের সবকিছুও একই স্টাইলে বানিয়ে দিতে পারি—

✔ Inheritance
✔ Polymorphism
✔ Abstraction
✔ Encapsulation
✔ Static
✔ Getter/Setter
✔ Interface
✔ Generics

---

আপনি বলুন কোন টপিকটি চান? 😊


*/