/* 

নীচে **TypeScript-এ Encapsulation** খুব সহজ ভাষায়, বাস্তব উদাহরণ, সমস্যা সমাধান, এবং Interview Q&A সহ বুঝিয়ে দিলাম।

---

# ✅ **Encapsulation in TypeScript (সহজভাবে ব্যাখ্যা)**

**Encapsulation মানে হলো:**
👉 ডেটা (properties) এবং ফাংশন (methods) একসাথে বেঁধে রাখা
👉 বাইরের লোক যেন সরাসরি ডেটা পরিবর্তন করতে না পারে
👉 Access control (public, private, protected) ব্যবহার করে নিরাপদ ভাবে ডেটা হ্যান্ডেল করা

**সহজ উদাহরণ:**
তুমি রুমে কাপড় রাখো। রুমে তালা আছে।
কারা রুমে ঢুকতে পারবে তা তুমি ঠিক করো → **Encapsulation**

---

# ✅ **Why Encapsulation? (কেন ব্যবহার করি?)**

✔ ডেটা সিকিউরিটির জন্য
✔ অবাঞ্ছিত বা ভুল ডেটা পরিবর্তন বন্ধ করতে
✔ কোডকে control করা ও clean রাখা
✔ শুধু প্রয়োজনীয় জিনিস expose করা

---

# 🔥 **Encapsulation-এর জন্য সবচেয়ে বেশি ব্যবহার হয়:**

* **private**
* **protected**
* **public**
* **getter/setter** (controlled access)

---

# ✅ **Basic Encapsulation Example**

```ts
class BankAccount {
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  // Getter
  getBalance() {
    return this.balance;
  }

  // Setter (Controlled Update)
  deposit(amount: number) {
    if (amount > 0) {
      this.balance += amount;
    } else {
      console.log("Invalid amount!");
    }
  }
}

const acc = new BankAccount(1000);

console.log(acc.getBalance()); // 1000

acc.deposit(500);
console.log(acc.getBalance()); // 1500

// ❌ Direct access is not allowed:
// acc.balance = 999; → ERROR (private)
```

🔍 **এখানে balance private**, তাই বাইরে থেকে পরিবর্তন করা যাবে না।
শুধু **getter/setter দিয়ে নিয়ন্ত্রিত ভাবে access** করা যাবে।

---

# ✅ **Encapsulation Example with Getter/Setter (TS way)**

```ts
class User {
  private _password: string;

  constructor(password: string) {
    this._password = password;
  }

  // Getter
  get password() {
    return "❌ Password is protected";
  }

  // Setter
  set password(newPass: string) {
    if (newPass.length < 6) {
      console.log("Password too short!");
    } else {
      this._password = newPass;
      console.log("Password updated");
    }
  }
}

const u = new User("secret123");

console.log(u.password);  // ❌ Password is protected

u.password = "hi";  // Password too short!
u.password = "newsecret"; // Password updated
```

---

# 🚀 **Real-Life Example: Student Marks System**

```ts
class Student {
  private marks: number = 0;

  setMarks(value: number) {
    if (value < 0 || value > 100) {
      console.log("Invalid Marks!");
      return;
    }
    this.marks = value;
  }

  getMarks() {
    return this.marks;
  }
}

const s = new Student();
s.setMarks(120);   // Invalid Marks!
s.setMarks(85);
console.log(s.getMarks()); // 85
```

---

# 🧠 **Problem Solving Task**

**Task:**
একটি Product ক্লাস বানাও যার ভিতরে

* name (public)
* price (private)
* getPrice()
* setPrice() → price কখনো negative হতে পারবে না

👉 আমি চাইলে সমাধানও দিবো।

---

# 🎯 **Encapsulation Interview Q&A (Bangla)**

### **Q1: Encapsulation কী?**

**Ans:** ডেটা ও ফাংশনকে একসাথে রাখা এবং private/protected ব্যবহার করে ডেটা নিয়ন্ত্রণ করা।

---

### **Q2: Encapsulation কেন দরকার?**

✔ ডেটা সুরক্ষিত রাখতে
✔ অবৈধ ডেটা এন্ট্রি আটকাতে
✔ কোডকে পরিষ্কার, maintainable রাখতে
✔ Internal logic লুকিয়ে রাখতে (data hiding)

---

### **Q3: Encapsulation কিভাবে achieve করা হয়?**

**private**, **protected**, **getters**, **setters** → এগুলো ব্যবহার করে।

---

### **Q4: private আর protected এর মধ্যে পার্থক্য?**

| Keyword       | কোথা থেকে Access করা যায়? |
| ------------- | ------------------------- |
| **private**   | শুধু ক্লাসের ভিতরে        |
| **protected** | ক্লাস + subclass এর ভিতরে |
| **public**    | সব জায়গা থেকেই            |

---

### **Q5: Getter এবং Setter কেন প্রয়োজন?**

👉 ডেটা সরাসরি না বদলে **controlled access** দিতে
👉 validation করার জন্য
👉 encapsulation follow করার জন্য

---

### **Q6: Encapsulation vs Abstraction**

| Encapsulation          | Abstraction               |
| ---------------------- | ------------------------- |
| ডেটা hide/control করা  | জটিল logic লুকানো         |
| private, getter/setter | interface, abstract class |

---

# 🏁 শেষ কথা

Encapsulation হলো TypeScript-এর **foundation OOP concept**, যা clean, secure, and scalable কোড লিখতে সাহায্য করে।

---

চাইলে এখন
👉 **Inheritance**, 👉 **Interface**, 👉 **Type Narrowing**, 👉 **Generics**,
এগুলোও একই স্টাইলে বানিয়ে দিতে পারব।

বলুন কোনটা চান? 😊



*/


/* 

নীচে **Encapsulation ব্যবহার করে ৫টি Real-Life Practical Task** দিলাম — এগুলো তুমি তোমার প্রোজেক্টে বা প্র্যাকটিসে ব্যবহার করতে পারবে। সবগুলোই TypeScript-এ এবং বাস্তব জীবনের মতো ফাংশনালিটি দেখানো হয়েছে।

---

# ⭐ **Task 1: ATM Machine System (Encapsulation Real-Life Use)**

User ATM-এ গিয়ে টাকা তুলবে, ব্যালেন্স দেখবে, কিন্তু **direct balance change করতে পারবে না** — এটিই Encapsulation।

### ✅ Requirement

* balance → private
* withdraw(amount)
* deposit(amount)
* checkBalance()

### ✅ Code:

```ts
class ATM {
  private balance: number;

  constructor(initial: number) {
    this.balance = initial;
  }

  deposit(amount: number) {
    if (amount <= 0) {
      console.log("Invalid deposit amount");
      return;
    }
    this.balance += amount;
  }

  withdraw(amount: number) {
    if (amount > this.balance) {
      console.log("Insufficient balance!");
      return;
    }
    this.balance -= amount;
  }

  checkBalance() {
    return this.balance;
  }
}

const atm = new ATM(5000);
atm.withdraw(6000);  // Insufficient balance!
atm.deposit(2000);
console.log(atm.checkBalance()); // 7000
```

🔒 **balance private**, তাই direct access করা যাবে না।
➡️ এইটা pure encapsulation.

---

# ⭐ **Task 2: User Registration System (Password Hide + Encapsulation)**

### Requirements:

* password → private
* setPassword() → validation
* getPassword() → show masked text

### Code:

```ts
class User {
  private _password: string;

  constructor(password: string) {
    this._password = password;
  }

  set password(newPass: string) {
    if (newPass.length < 6) {
      console.log("Password must be at least 6 characters!");
      return;
    }
    this._password = newPass;
    console.log("Password updated");
  }

  get password() {
    return "********";
  }
}

const u = new User("secret123");
console.log(u.password); // ********
u.password = "123";      // Password must be at least 6 characters
u.password = "newPass12"; // Password updated
```

👉 বাস্তব অ্যাপে পাসওয়ার্ডকে private রাখা Encapsulation-এর best real-life example।

---

# ⭐ **Task 3: E-commerce Cart System (Quantity Control)**

User cart-এ quantity ভুলভাবে manipulate করতে পারবে না (negative / invalid quantity)।
Encapsulation দিয়ে quantity protect করা হবে।

### Code:

```ts
class CartItem {
  public name: string;
  private quantity: number;

  constructor(name: string) {
    this.name = name;
    this.quantity = 1;
  }

  setQuantity(qty: number) {
    if (qty <= 0) {
      console.log("Quantity must be greater than 0");
      return;
    }
    this.quantity = qty;
  }

  getQuantity() {
    return this.quantity;
  }
}

const item = new CartItem("Laptop");

item.setQuantity(-2); // Quantity must be greater than 0
item.setQuantity(3);
console.log(item.getQuantity()); // 3
```

👉 Negative quantity allow করা উচিত না → Encapsulation solves it.

---

# ⭐ **Task 4: Salary Management System**

Employee এর বেতন protected রাখতে হবে, যেন direct edit করা না যায়।

### Requirements:

* salary → private
* setSalary() — only valid amount
* getSalary() — admin version
* increaseSalary() — controlled update

### Code:

```ts
class Employee {
  private salary: number;

  constructor(salary: number) {
    this.salary = salary;
  }

  getSalary() {
    return this.salary;
  }

  increaseSalary(amount: number) {
    if (amount <= 0) {
      console.log("Invalid amount!");
      return;
    }
    this.salary += amount;
  }
}

const emp = new Employee(30000);
emp.increaseSalary(5000);
console.log(emp.getSalary()); // 35000
```

👉 Salary কে protect করা অনেক কোম্পানির system-এ real life encapsulation।

---

# ⭐ **Task 5: School Student Marks System (Validation + Security)**

### Requirements:

* marks private
* mark কখনো 0–100 range এর বাইরে হতে পারবে না

### Code:

```ts
class Student {
  private marks: number = 0;

  setMarks(value: number) {
    if (value < 0 || value > 100) {
      console.log("Invalid Marks!");
      return;
    }
    this.marks = value;
  }

  getMarks() {
    return this.marks;
  }
}

const std = new Student();
std.setMarks(150); // Invalid Marks!
std.setMarks(90);
console.log(std.getMarks()); // 90
```

👉 ভুল মার্কস prevent করা exactly encapsulation।

---

# 🎯 Bonus Task: Banking Loan Eligibility System

চাইলে এটাও বানিয়ে দেবো — এতে private credit score থাকবে।

---

# 🧠 Want Practice?

তুমি চাইলে আমি এগুলোকে **assignment format**, **test cases**, বা **interview style coding task** হিসেবেও সাজিয়ে দিতে পারি।

### তুমি কোনটা চাও?

* ATM task মতো আরও Real-life tasks?
* Beginner → Advanced Encapsulation Projects?
* Encapsulation + Inheritance + Polymorphism মিলিয়ে বড় project?


*/