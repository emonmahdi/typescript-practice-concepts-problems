
class Person{
    getSleep(){
        console.log('I am sleeping 8 hours per day')
    }
}


class Student extends Person{
    getSleep(){
        console.log('I am sleeping 7 hours per day')
    }
}


class Developer extends Person{
    getSleep(){
        console.log('I am sleeping 6 hours per day')
    }
}


const getSleepingHours = (param: Person) => {
   return param.getSleep() 
}


const person = new Person()
const student = new Student()
const developer = new Developer()

getSleepingHours(person)
getSleepingHours(student)
getSleepingHours(developer)


// Another Examples

class Shape{
    getArea(){
        return 0;
    }
}

class Circle extends Shape{
    radius: number
    constructor(radius: number){
        super();
        this.radius = radius
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius
    }
}

class Rectangle extends Shape{
    height: number
    width: number
    constructor(height: number, width: number){
        super();
        this.height = height
        this.width = width
    }

    getArea(): number {
        return   this.height * this.width
    }
}


const getShapeArea = (param: Shape) => {
    console.log(param.getArea())
}

const shape = new Shape()
const circle = new Circle(10)
const rectangle = new Rectangle(10, 20)

getShapeArea(shape)
getShapeArea(circle)
getShapeArea(rectangle)



/* 

নিশ্চয়! এবার আমরা **TypeScript Polymorphism** খুবই সহজভাবে, বাস্তব উদাহরণ + সমস্যা সমাধান + ইন্টারভিউ Q&A সহ শিখবো।
Polymorphism হলো OOP-এর সবচেয়ে শক্তিশালী কনসেপ্টগুলোর একটি।

---

# 🧩 **TypeScript – Polymorphism (Bangla Easy Explanation)**

## 🔹 Polymorphism কী?

**Polymorphism** মানে হলো:

👉 **একই মেথড বা একই অ্যাকশন, বিভিন্ন ক্লাসে বিভিন্নভাবে কাজ করবে।**
(একই কাজ, কিন্তু আচরণ আলাদা)

এটা দুইভাবে হয়:

### ✔ ১. Method Overriding

Child class → parent এর মেথড নিজের মতো করে লিখে।

### ✔ ২. Method Overloading

একই মেথড → একাধিক signature (TypeScript support করে, কিন্তু Java/C++ এর মতো নয়)

---

# 🎯 Basic Example: Method Overriding Polymorphism

```ts
class Animal {
  makeSound() {
    console.log("Some generic animal sound...");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Dog says: Woof!");
  }
}

class Cat extends Animal {
  makeSound() {
    console.log("Cat says: Meow!");
  }
}

function playSound(animal: Animal) {
  animal.makeSound();  // polymorphism
}

playSound(new Dog());  
playSound(new Cat());
```

### 🔍 বাংলা ব্যাখ্যা

* `playSound()` ফাংশন animal এর type চায়
* কিন্তু আমরা Dog দিই, Cat দিই → উভয়ই Animal এর child
* makeSound() বিভিন্নভাবে behave করছে → **এটাই Polymorphism**

---

# 🐦 Real Life Example: Payment System

ধরো তুমি একটি ইকমার্স অ্যাপ বানাচ্ছো:

```ts
class Payment {
  pay(amount: number) {
    console.log(`Paying ${amount} using default method`);
  }
}

class PayPal extends Payment {
  pay(amount: number) {
    console.log(`Paying ${amount} via PayPal`);
  }
}

class Bkash extends Payment {
  pay(amount: number) {
    console.log(`Paying ${amount} via bKash`);
  }
}

function processPayment(p: Payment, amount: number) {
  p.pay(amount);
}

processPayment(new PayPal(), 500);
processPayment(new Bkash(), 1000);
```

### 💡 বাংলা ব্যাখ্যা

`processPayment()` শুধু Payment টাইপ চেনে — কিন্তু যেকোনো child class নিতে পারে।
PayPal এর pay(), Bkash এর pay() → আলাদা আলাদা কাজ করছে।

এটাই polymorphism।

---

# 🔥 Polymorphism + Interface Example

```ts
interface Shape {
  area(): number;
}

class Circle implements Shape {
  constructor(private radius: number) {}

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle implements Shape {
  constructor(private w: number, private h: number) {}

  area() {
    return this.w * this.h;
  }
}

function printArea(shape: Shape) {
  console.log("Area:", shape.area());
}

printArea(new Circle(10));
printArea(new Rectangle(5, 4));
```

✔ একই `area()` মেথড
✔ আচরণ আলাদা
✔ interface দিয়ে polymorphism

---

# 🎯 Method Overloading (TypeScript Style)

```ts
class Calculator {
  add(a: number, b: number): number;
  add(a: string, b: string): string;

  add(a: any, b: any): any {
    return a + b;
  }
}

const calc = new Calculator();

console.log(calc.add(10, 20)); // 30
console.log(calc.add("Hello ", "World")); // Hello World
```

---

# 🧩 Problem Solving (Interview Level)

---

## 📝 Problem 1: Notification System

### 🎯 Requirement

* Email notification class
* SMS notification class
* Common parent class Notification
* send() method → different behavior

### ✔ Solution

```ts
class Notification {
  send(message: string) {
    console.log("Sending notification:", message);
  }
}

class EmailNotification extends Notification {
  send(message: string) {
    console.log("Sending Email:", message);
  }
}

class SMSNotification extends Notification {
  send(message: string) {
    console.log("Sending SMS:", message);
  }
}

function notify(n: Notification, msg: string) {
  n.send(msg);
}

notify(new EmailNotification(), "Hello Email!");
notify(new SMSNotification(), "Hello SMS!");
```

---

## 📝 Problem 2: Transport System

### 🎯 Requirement

* Car, Bike, Truck → move()
* Same method but different behaviors

### ✔ Example

```ts
class Vehicle {
  move() {
    console.log("Vehicle moving...");
  }
}

class Car extends Vehicle {
  move() {
    console.log("Car is moving on 4 wheels");
  }
}

class Bike extends Vehicle {
  move() {
    console.log("Bike is moving on 2 wheels");
  }
}

function start(v: Vehicle) {
  v.move();
}

start(new Car());
start(new Bike());
```

---

# 👨‍💻 TypeScript Polymorphism – Interview Q&A (Bangla)

---

### ❓ ১. Polymorphism কী?

**Answer:**
একই method নাম → কিন্তু বিভিন্ন ক্লাসে বিভিন্নভাবে behave করে।
যেখানে parent reference → child objects ব্যবহার করতে পারে।

---

### ❓ ২. Polymorphism এর দুই ধরনের?

✔ Method Overriding
✔ Method Overloading

---

### ❓ ৩. TypeScript কীভাবে polymorphism achieve করে?

**Answer:**

* Class inheritance
* Interface implementation
* Method overriding
* Function accepting parent type but receiving child type

---

### ❓ ৪. কেন Polymorphism দরকার?

**Answer:**

* কোড reuse
* flexible design
* dependency কমায়
* Same function → different behaviors
* extensibility

---

### ❓ ৫. Function parameter polymorphism কী?

**Answer:**
একটা ফাংশন parent type গ্রহণ করে কিন্তু child type পাঠালে কাজ করে।

উদাহরণ:

```ts
function start(animal: Animal) {}
start(new Dog());
```

---

### ❓ ৬. Interface দিয়ে polymorphism হয়?

**Answer:**
✔ অবশ্যই হয়।
Interface contract → multiple classes → different behaviors.

---

### ❓ ৭. Polymorphism without inheritance possible?

**Answer:**
✔ হ্যাঁ — interface ব্যবহার করে।
❌ কিন্তু class-level overriding inheritance ছাড়া সম্ভব নয়।

---

# 🧪 Practice Tasks (For You)

### 🟦 Task 1

`Animal` → Dog, Cat, Cow
sound() method override

### 🟦 Task 2

`Payment` → Bkash, Nagad, Rocket
pay() override

### 🟦 Task 3

`Shape` → Circle, Triangle, Square
area() method override

চাও চাইলে আমি এগুলোর Full Solution তোমাকে লিখে দিতে পারি ❤️



*/