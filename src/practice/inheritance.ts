/* 


নীচে **OOP-এর Inheritance** খুব সহজ ভাষায়, TypeScript কোড, বাস্তব উদাহরণ, সমস্যা সমাধান, এবং Interview Q&A সহ সম্পূর্ণ ব্যাখ্যা দিলাম।

---

# 🔵 **Inheritance in OOP — সহজ ব্যাখ্যা (Bangla)**

### ✅ **Inheritance মানে হলো:**

একটি Class আরেকটি Class-এর **property** এবং **method**—
**inherit/extend** করে নেয়।

**Parent Class → Base / Super Class**
**Child Class → Derived / Sub Class**

👉 সহজ কথা:
যেমন বাবা-মার কিছু গুণ শিশুর মধ্যে থাকে → এটাই inheritance।

---

# 🔵 **Why Inheritance? (কেন ব্যবহার করি?)**

✔ Code reuse (পুনরায় কোড লেখার প্রয়োজন নেই)
✔ Common logic parent ক্লাসে রাখা যায়
✔ Child প্রয়োজনমতো নতুন features যোগ করতে পারে
✔ Clean architecture পাওয়া যায়

---

# 🔥 **Important Keyword → `extends`**

Child class যখন Parent class থেকে inherit করে, তখন TypeScript-এ `extends` লিখতে হয়।

---

# 🔵 **Basic Example (TypeScript)**

```ts
class Animal {
  move() {
    console.log("Animal is moving");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Dog is barking");
  }
}

const dog = new Dog();
dog.move(); // from parent class
dog.bark(); // from child class
```

---

# 🔵 **Constructor with Inheritance (super keyword)**

Child ক্লাস parent-এর constructor ব্যবহার করতে চাইলে `super()` ব্যবহার করতে হয়।

```ts
class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Student extends Person {
  roll: number;

  constructor(name: string, roll: number) {
    super(name); // parent constructor call
    this.roll = roll;
  }
}

const s1 = new Student("Emon", 101);
console.log(s1.name, s1.roll);
```

---

# 🔵 **Method Overriding Example (Polymorphism + Inheritance)**

Child ক্লাস parent-এর method কে নিজের মতো override করতে পারে।

```ts
class Vehicle {
  start() {
    console.log("Vehicle starting...");
  }
}

class Car extends Vehicle {
  start() {
    console.log("Car starting with key...");
  }
}

const car = new Car();
car.start(); // overridden version
```

---

# 🔵 **Real-Life Example 1: Employee Management System**

```ts
class Employee {
  name: string;
  salary: number;

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }

  getInfo() {
    return `${this.name} earns ${this.salary}`;
  }
}

class Manager extends Employee {
  bonus: number;

  constructor(name: string, salary: number, bonus: number) {
    super(name, salary);
    this.bonus = bonus;
  }

  getTotalSalary() {
    return this.salary + this.bonus;
  }
}

const m1 = new Manager("Mahdi", 30000, 5000);
console.log(m1.getTotalSalary()); // 35000
```

---

# 🔵 **Real-Life Example 2: E-commerce User Roles**

```ts
class User {
  email: string;

  constructor(email: string) {
    this.email = email;
  }
}

class Admin extends User {
  deleteUser() {
    console.log("User deleted.");
  }
}

class Customer extends User {
  purchase() {
    console.log("Customer purchased a product.");
  }
}

const admin = new Admin("admin@gmail.com");
admin.deleteUser();

const customer = new Customer("customer@gmail.com");
customer.purchase();
```

---

# 🔵 **Real-Life Example 3: Banking Account Types**

```ts
class BankAccount {
  balance: number;

  constructor(balance: number) {
    this.balance = balance;
  }

  deposit(amount: number) {
    this.balance += amount;
  }
}

class SavingsAccount extends BankAccount {
  addInterest() {
    this.balance += this.balance * 0.05;
  }
}

const acc = new SavingsAccount(1000);
acc.addInterest();  
console.log(acc.balance); // 1050
```

---

# 🔵 **Practical Problem Solving Tasks (For Practice)**

### 🟣 **Task 1:**

একটি **Vehicle** parent class বানাও।
Child class: **Bike**, **Car**

* Both: start()
* Car has AC feature
* Bike has helmetCheck()

👉 চাইলে solution দেবো।

---

### 🟣 **Task 2:**

Parent class: **Shape**
Child: **Circle**, **Rectangle**

* getArea() override করবে

👉 চাইলে solve করে দেবো।

---

### 🟣 **Task 3:**

School System

* Parent: Person (name, age)
* Child: Teacher, Student

---

# 🔵 **Inheritance-এর Rules (TypeScript)**

| Concept            | Explanation                                                  |
| ------------------ | ------------------------------------------------------------ |
| extends            | Parent inherit করার keyword                                  |
| super()            | Parent-এর constructor call                                   |
| Method overriding  | Child method modify করতে পারে                                |
| Single inheritance | TS only supports single inheritance                          |
| Access modifiers   | Parent property কে child access করতে পারে (public/protected) |

---

# 🔵 **Inheritance Interview Q&A (Bangla)**

### **Q1: Inheritance কী?**

**Ans:** একটি ক্লাস আরেকটি ক্লাসের properties ও methods কে reuse করার সুবিধা।

---

### **Q2: কেন Inheritance ব্যবহার করা হয়?**

✔ Code reuse
✔ Structure improve
✔ Duplicate code remove

---

### **Q3: Method overriding কী?**

**Ans:** Child class parent-এর method নিজের মতো করে redefine করলে তাকে overriding বলে।

---

### **Q4: super() এর কাজ কী?**

**Ans:** Parent class এর constructor বা method কে call করা।

---

### **Q5: TypeScript কি multiple inheritance support করে?**

**Ans:** ❌ না। JavaScript এবং TypeScript দুইটাই multiple inheritance support করে না।

---

### **Q6: Composition vs Inheritance?**

**Inheritance:** is-a relationship
**Composition:** has-a relationship

* Car is a Vehicle → Inheritance
* Car has an Engine → Composition

---

### **Q7: Real-life example of inheritance?**

* Employee → Manager
* User → Admin / Customer
* Vehicle → Car / Bike
* Shape → Circle / Rectangle

---

# 🔵 Want Next Topic?

আমি চাইলে এখন
✔ Polymorphism
✔ Abstraction
✔ Encapsulation
✔ Interface
✔ Static
✔ Generics

এগুলোও একই style-এ বানিয়ে দিতে পারি।

👉 কোনটা চান?



*/