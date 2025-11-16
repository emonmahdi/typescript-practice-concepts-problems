/* 

নীচে **TypeScript Access Modifiers**—একদম সহজ ভাষায়, রিয়েল লাইফ উদাহরণ, কোড, ব্যবহার, এবং interview Q&A সহ সম্পূর্ণ ব্যাখ্যা দেওয়া হলো (Bangla Version)।

---

# 🔵 **Access Modifiers in TypeScript (Bangla Full Guide)**

TypeScript-এ Access Modifiers ব্যবহার করা হয় **class-এর ভিতরের property/method এর access control** করতে।

এগুলো ৩ ধরণের:

| Modifier      | Inside Class | Child Class | Outside Class |
| ------------- | ------------ | ----------- | ------------- |
| **public**    | ✔            | ✔           | ✔             |
| **private**   | ✔            | ✖           | ✖             |
| **protected** | ✔            | ✔           | ✖             |

---

# 🔵 1) **public**

👉 ডিফল্ট access modifier।
👉 সব জায়গা থেকে access করা যায় (class, child class, object)।

### ✔ Example:

```ts
class Person {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

const p = new Person("Emon");
p.name = "Mahdi";  // allowed
p.greet();         // allowed
```

---

# 🔵 2) **private**

👉 শুধু class-এর ভিতরে access করা যায়।
👉 child class বা object থেকে access করা যায় না।
👉 Encapsulation enforce করতে ব্যবহৃত হয়।

### ✔ Example:

```ts
class BankAccount {
  private balance: number = 0;

  deposit(amount: number) {
    this.balance += amount;
  }

  getBalance() {
    return this.balance;
  }
}

const acc = new BankAccount();
acc.deposit(1000);

// acc.balance  ❌ ERROR: private হওয়ায় access করা যাবে না
console.log(acc.getBalance()); // ✔
```

**Real-life use:**
Balance, password, salary, userCredential—এগুলো private রাখা হয়।

---

# 🔵 3) **protected**

👉 class এবং child class থেকে access করা যায়।
👉 কিন্তু object থেকে access করা যায় না।
👉 Inheritance-এর সময় খুব useful।

### ✔ Example:

```ts
class Employee {
  protected salary: number = 30000;

  getSalary() {
    return this.salary;
  }
}

class Manager extends Employee {
  increaseSalary(amount: number) {
    this.salary += amount; // ✔ allowed (protected)
  }
}

const m = new Manager();
m.increaseSalary(5000);
console.log(m.getSalary());

// m.salary ❌ ERROR (object থেকে allowed না)
```

---

# 🔵 📌 Summary Table (Simple Bangla)

| Modifier      | কোথায় ব্যবহার       | ব্যাবহার             |
| ------------- | ------------------- | -------------------- |
| **public**    | Everywhere          | ওপেন access          |
| **private**   | Only class          | Sensitive data hide  |
| **protected** | Class + child class | Inheritance security |

---

# 🔵 4) readonly (Extra Access Modifier)

👉 readonly value constructor-এর বাইরে পরিবর্তন করা যায় না।
👉 Const property-এর মতো behave করে।

### ✔ Example:

```ts
class Product {
  readonly id: number;

  constructor(id: number) {
    this.id = id;
  }
}

const p = new Product(101);
console.log(p.id); // 101

// p.id = 200 ❌ ERROR
```

---

# 🔵 5) Access Modifiers with Constructor

You can create properties directly from constructor:

```ts
class User {
  constructor(
    public name: string,
    private password: string,
    protected role: string
  ) {}
}

const u = new User("Emon", "pass123", "admin");

console.log(u.name);  // ✔
// console.log(u.password); ❌
// console.log(u.role); ❌
```

---

# 🔵 6) Real-Life Use Case (Encapsulation Example)

### 🏦 Bank Account System

```ts
class Bank {
  private balance: number;

  constructor() {
    this.balance = 0;
  }

  deposit(amount: number) {
    if (amount > 0) {
      this.balance += amount;
    }
  }

  withdraw(amount: number) {
    if (amount <= this.balance) {
      this.balance -= amount;
    } else {
      console.log("Insufficient balance");
    }
  }

  getBalance() {
    return this.balance;
  }
}

const bk = new Bank();
bk.deposit(1000);
bk.withdraw(500);
console.log(bk.getBalance());
```

**Why private?**
→ যাতে বাইরের কেউ balance = 0 করে না দিতে পারে।

---

# 🔵 7) Interview Q&A (Bangla)

### ❓ Q1. Access modifier কী?

**Ans:** Class-এর property/method-এর access control করতে ব্যবহৃত হয়।

---

### ❓ Q2. public vs private vs protected পার্থক্য?

**Ans:**

* **public:** সব জায়গায় access করা যায়
* **private:** শুধুমাত্র class-এর ভিতরে
* **protected:** class + child class

---

### ❓ Q3. protected কেন দরকার?

**Ans:** Inheritance-এর সময় parent class-এর কিছু প্রপার্টি child যেন access করতে পারে কিন্তু object থেকে না—এজন্য।

---

### ❓ Q4. private কেন ব্যবহার করি?

**Ans:**
Sensitive data hide করতে → যেমন balance, password, API key।

---

### ❓ Q5. readonly কী?

**Ans:** value একবার set করার পর পরিবর্তন করা যায় না।

---

### ❓ Q6. Constructor parameter modifiers কী?

**Ans:** Constructor-এর parameter-এ public/private/protected দিলে property auto-create হয়।

---

# 🔵 8) Want full practice tasks?

আমি চাইলে নিচের topic-গুলোর জন্যও একইভাবে Example + Interview Q&A বানিয়ে দেবো—

* Inheritance (already given)
* Polymorphism
* Encapsulation
* Abstraction
* Interface
* Static
* Getter/Setter
* Type Guards
* Generics

বলুন কোনটা চান? 😊


*/