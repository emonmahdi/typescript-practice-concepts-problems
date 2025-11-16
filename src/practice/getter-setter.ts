
class User{
   private _name: string = "";


   // getter
   get name(){
    return this._name;
   }


   // setter
   set name(value: string){
    if(value.length < 3){
        throw new Error('Name must be at least 3 character')
    }

     this._name = value

   }
}


const user = new User;
user.name='Emon'
console.log(user.name)


// Another

class Employee{
    private _salary: number =0;


    // get
    get salary(){
        return this._salary
    }

    // set
    set salary(amount: number){
        if(amount < 0){
            throw new Error('Can not be negative')
        }
        this._salary= amount
    }

}

const emp = new Employee;
emp.salary=40000; // setter
console.log(emp.salary) // getter









/* 
নিশ্চয়! চলো **TypeScript Getter & Setter** খুবই সহজভাবে, বাস্তব উদাহরণ, সমস্যা সমাধান, এবং ইন্টারভিউ Q&A সহ শিখি।
এটা OOP–এর খুব গুরুত্বপূর্ণ কনসেপ্ট। 😊

---

# 🧩 **TypeScript Getter & Setter — সহজ ব্যাখ্যা (Bangla)**

## 🔹 Getter (`get`)

Getter মানে হলো:
👉 **কোনো প্রপার্টির মানকে “পড়া (read)” করার জন্য বিশেষ মেথড।**
অ্যাপের ভেতরের ডেটা কে নিরাপদে রিটার্ন করে।

## 🔹 Setter (`set`)

Setter মানে হলো:
👉 **কোনো প্রপার্টির মানকে “সেট/পরিবর্তন” করার জন্য বিশেষ মেথড।**
Setter–এর ভেতরে তুমি **ভ্যালিডেশন, ক্যালকুলেশন, কন্ডিশন** দিতে পারো।

---

# 🎯 **Basic Example: Getter and Setter**

```ts
class User {
  private _name: string = "";

  // getter
  get name() {
    return this._name;
  }

  // setter
  set name(value: string) {
    if (value.length < 3) {
      throw new Error("Name must be at least 3 characters");
    }
    this._name = value;
  }
}

const user = new User();
user.name = "Emon"; // setter কল হচ্ছে
console.log(user.name); // getter কল হচ্ছে
```

### 🔍 বাংলা ব্যাখ্যা

* `_name` হলো private property → বাইরে থেকে সরাসরি পরিবর্তন করা যাবে না।
* `user.name = "Emon"` → setter চালু হলো → ভ্যালিডেশন চেক করল → সেট করল।
* `console.log(user.name)` → getter চালু হলো → ভ্যালু রিটার্ন করল।

---

# 🔥 **Real Life Example: Salary Calculation System**

ধরো তুমি একটা স্যালারি সিস্টেম বানাচ্ছো:

```ts
class Employee {
  private _salary: number = 0;

  get salary() {
    return this._salary;
  }

  set salary(amount: number) {
    if (amount < 0) {
      throw new Error("Salary cannot be negative");
    }
    this._salary = amount;
  }
}

const emp = new Employee();
emp.salary = 50000; // setter
console.log(emp.salary); // getter → 50000
```

✔ Negative salary হতে দিচ্ছে না
✔ সরাসরি মান চেঞ্জ করতে দিচ্ছে না
✔ Getter দিয়ে নিয়ন্ত্রিত ভাবে রিড করা যাচ্ছে

---

# 🧠 **Getter & Setter Help in Problem Solving**

### 🎯 **Problem:**

একটা product class বানাতে হবে যেখানে price কখনো 0 এর কম হবে না, এবং discount getter থেকে final price রিটার্ন হবে।

### ✔ Solution:

```ts
class Product {
  private _price: number = 0;
  private _discount: number = 0; // শতাংশে discount

  set price(value: number) {
    if (value < 0) throw new Error("Price cannot be negative");
    this._price = value;
  }

  get price() {
    return this._price - (this._price * this._discount) / 100;
  }

  set discount(value: number) {
    if (value < 0 || value > 100)
      throw new Error("Discount must be between 0-100");
    this._discount = value;
  }
}

const p = new Product();
p.price = 1000;
p.discount = 20;

console.log(p.price); // 800
```

### 🔍 ব্যাখ্যা:

* **Setter price** → negative price হতে দিচ্ছে না
* **Setter discount** → 0-100% এর বাইরে হতে দিচ্ছে না
* **Getter price** → ডিসকাউন্ট প্রাইস হিসাব করে রিটার্ন করছে

---

# 👨‍💻 **Interview Q&A (Bangla)**

---

### ❓ **1. Getter এবং Setter কী এবং কেন ব্যবহার করা হয়?**

**Answer:**
Getter দিয়ে কোনো প্রপার্টির ভ্যালু read করা যায়, কিন্তু controlled way-তে।
Setter দিয়ে ভ্যালু সেট করা যায়, সাথে ভ্যালিডেশন বা কন্ডিশন যুক্ত করা যায়।
এগুলো security, data validation, encapsulation বজায় রাখতে সাহায্য করে।

---

### ❓ **2. সরাসরি প্রপার্টি public রেখে দিই কেন? Getter/Setter কেন দরকার?**

**Answer:**
Public property হলে যেকেউ ভুল ভ্যালু দিয়ে দিতে পারে।
Setter দিয়ে → validation
Getter দিয়ে → data format, calculation, logging
যেটা real-life application-এ খুব দরকার।

---

### ❓ **3. TypeScript-এ getter/setter ব্যবহার করলে কী সতর্কতা রাখতে হয়?**

**Answer:**

* Getter এর মধ্যে heavy logic রাখা যাবে না।
* Setter অবশ্যই void রিটার্ন করতে হবে।
* Getter/Setter এর নাম *একই* হতে হবে।
* Private property convention: `_name`, `_age`.

---

### ❓ **4. Getter এর ভেতরে parameter নেওয়া যায়?**

**Answer:**
❌ না, getter এর কোনো parameter নেই।
Getter শুধুমাত্র return দেয়।

---

### ❓ **5. Setter কি return value দিতে পারে?**

**Answer:**
❌ না, setter এর return টাইপ `void` হতে হবে।

---

# 📝 Practice Tasks (for you)

### ✅ Task 1

`BankAccount` class বানাও

* private balance
* getter → balance কে রিটার্ন করবে
* setter → negative deposit/withdraw আটকাবে

### ✅ Task 2

`Student` class বানাও

* name (min 3 chars)
* marks (0 – 100)
* getter → grade (A/B/C/F) রিটার্ন করবে

চাও চাইলে আমি এর পূর্ণ solutionও লিখে দিতে পারি। 😊



*/