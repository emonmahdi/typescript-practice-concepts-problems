











/* 

নিশ্চয়! এবার আমরা **TypeScript – Abstraction** সহজ ভাষায়, বাস্তব উদাহরণ + সমস্যা সমাধান + ইন্টারভিউ Q&A সহ শিখবো।
Abstraction হলো OOP-এর সবচেয়ে গুরুত্বপূর্ণ কনসেপ্টগুলোর একটি।

---

# 🧩 **TypeScript Abstraction — সহজ ব্যাখ্যা (Bangla)**

## 🔹 Abstraction কী?

👉 **যে প্রযুক্তি জটিল জিনিসগুলো লুকিয়ে শুধু প্রয়োজনীয় জিনিসগুলো দেখায়— সেটাই abstraction।**

মানে:
✔ ভেতরের কাজ গোপন
✔ বাহিরে শুধু প্রয়োজনীয় feature

---

# 🛠 TypeScript-এ Abstraction কিভাবে করা যায়?

TypeScript এ abstraction করা যায় ২ভাবে:

### ✔ 1. **Abstract Class**

* সম্পূর্ণ মেথড + অসম্পূর্ণ মেথড রাখতে পারে
* Object বানানো যায় না (cannot instantiate)
* Child class abstract মেথড override করতে বাধ্য

### ✔ 2. **Interface**

* শুধু abstraction
* Implementation child class দেয়
* Multiple inheritance possible

---

# 🎯 Basic Example: Abstract Class

```ts
abstract class Animal {
  abstract makeSound(): void;

  move() {
    console.log("Animal is moving...");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Dog barks!");
  }
}

const dog = new Dog();
dog.makeSound();
dog.move();
```

### 🔍 বাংলা ব্যাখ্যা:

* `Animal` থেকে object বানানো যাবে না
* `makeSound()` abstract → body নেই
* Child class (Dog) → makeSound() override করতে হবে
* move() normal method → সব child ব্যবহার করতে পারে

---

# 🎯 Real Life Example: Payment System

```ts
abstract class Payment {
  abstract pay(amount: number): void;

  validate() {
    console.log("Payment validated.");
  }
}

class BkashPayment extends Payment {
  pay(amount: number) {
    console.log(`Paying ${amount} using bKash`);
  }
}

class CardPayment extends Payment {
  pay(amount: number) {
    console.log(`Paying ${amount} using Credit Card`);
  }
}

function process(p: Payment, amount: number) {
  p.validate();
  p.pay(amount);
}

process(new BkashPayment(), 500);
process(new CardPayment(), 1000);
```

✔ Abstract class — rule define
✔ Child class — implementation define
✔ validate() common method

---

# 🔥 Interface দিয়ে Abstraction Example

```ts
interface Vehicle {
  start(): void;
  stop(): void;
}

class Car implements Vehicle {
  start() {
    console.log("Car started");
  }
  stop() {
    console.log("Car stopped");
  }
}

class Bike implements Vehicle {
  start() {
    console.log("Bike started");
  }
  stop() {
    console.log("Bike stopped");
  }
}
```

✔ Interface → শুধু blueprint
✔ Car / Bike → সম্পূর্ণ implementation

---

# 🧩 Problem Solving

---

## 📝 Problem 1: User Authentication System

### 🎯 Requirement

* একটি abstract class
* register() abstract
* login() abstract
* password hashing common method

### ✔ Solution

```ts
abstract class AuthService {
  abstract register(user: string, pass: string): void;
  abstract login(user: string, pass: string): void;

  hashPassword(pass: string) {
    return "hashed_" + pass;
  }
}

class EmailAuth extends AuthService {
  register(user: string, pass: string) {
    console.log("Email registered:", user, this.hashPassword(pass));
  }

  login(user: string, pass: string) {
    console.log("Email login:", user);
  }
}

const auth = new EmailAuth();
auth.register("emon", "1234");
auth.login("emon", "1234");
```

✔ Abstract class দিয়ে common + required rules implement করা হচ্ছে

---

## 📝 Problem 2: Shape Calculator

### 🎯 Requirement

* Abstract Shape
* abstract area()
* Circle, Rectangle → implement

### ✔ Solution

```ts
abstract class Shape {
  abstract area(): number;
}

class Circle extends Shape {
  constructor(private r: number) {
    super();
  }
  area() {
    return Math.PI * this.r * this.r;
  }
}

class Rectangle extends Shape {
  constructor(private w: number, private h: number) {
    super();
  }
  area() {
    return this.w * this.h;
  }
}

const shapes: Shape[] = [
  new Circle(10),
  new Rectangle(5, 4),
];

shapes.forEach(s => console.log(s.area()));
```

---

# 👨‍💻 Interview Q&A (Bangla)

---

### ❓ 1. Abstraction কী?

**Answer:**
জটিল implementation লুকিয়ে, শুধু প্রয়োজনীয় অংশ দেখানো।
যেমন: mobile ব্যবহার করি → ভেতরের সার্কিট দেখি না।

---

### ❓ 2. Abstract class কেন ব্যবহার করা হয়?

**Answer:**

* কিছু common logic রাখতে
* কিছু rule enforce করতে
* Child class-কে নির্দিষ্ট structure follow করাতে

---

### ❓ 3. Abstract class এবং Interface-এর পার্থক্য কী?

| Feature              | Abstract Class    | Interface                                        |
| -------------------- | ----------------- | ------------------------------------------------ |
| Methods              | abstract + normal | শুধুই abstract                                   |
| Constructor          | থাকে              | থাকে না                                          |
| Multiple inheritance | ❌ না              | ✔ হ্যাঁ                                          |
| Properties           | রাখতে পারে        | রাখতে পারে না (only readonly/property signature) |

---

### ❓ 4. Abstract class instantiate করা যায়?

❌ না।
অবশ্যই child class দিয়ে করতে হবে।

---

### ❓ 5. Abstract method override কেন করতে হয়?

কারণ তার কোন body নেই।
Parent rule → child বাধ্য হয়ে implement করবে।

---

### ❓ 6. Interface আর abstract class কবে ব্যবহার করবেন?

✔ যদি common logic রাখতে হয় → **abstract class**
✔ শুধু rules enforce করতে চাইলে → **interface**

---

# 🧪 Practice Tasks (for you)

### 🟦 Task 1

`Notification` abstract class

* abstract send()
* EmailNotification
* SMSNotification

### 🟦 Task 2

`Database` abstract class

* connect()
* disconnect()
* MySQL, MongoDB override করবেন

### 🟦 Task 3

`MediaPlayer` abstract class

* play(), stop()
* VideoPlayer
* AudioPlayer

চাও চাইলে প্রতিটা task-এর full solution আমি লিখে দিতে পারি ❤️



*/