abstract class Car{
    abstract start(): void;
    abstract stop(): void;
}

class MyCar extends Car{
    start():void{
        console.log("Start Car")
    }
    stop():void{
        console.log("Stop Car")
    }
}
const car1 = new MyCar()
car1.start()
car1.stop()




/* 
# অ্যাবস্ট্রাকশন (Abstraction) — সহজে (বাংলা)

**অ্যাবস্ট্রাকশন = জটিলতা লুকানো, দরকারি ব্যবস্থা দেখানো।**
অর্থাৎ আমরা কেবল **কী করা হবে** (method/ইন্টারফেস) বলি — **কিভাবে করা হবে** সেটা ক্লাসগুলোর ভিতরেই লুকিয়ে রাখি।

---

# ধাপে ধাপে সংক্ষেপে

1. একটি **abstract class** বা **interface** তৈরি করো — এখানে শুধু প্রয়োজনীয় মেথড ডিক্লেয়ার থাকবে।
2. আলাদা আলাদা ক্লাসগুলো সেটা **extend/implement** করবে।
3. ব্যবহারকারী (caller) শুধু parent টাইপ দেখে কাজ করবে — ভিতরের implementation জানতে হবে না।
4. ফলে কোড সহজে পরিবর্তনযোগ্য, টেস্ট করা ও রিইউজ করা সহজ হয়।

---

# খুব সরল TypeScript উদাহরণ (কোড + বাংলা মন্তব্য)

```ts
// Parent — abstract class (অ্যাবস্ট্রাক্ট বেস)
abstract class Payment {
  // Shared/helper method (সবার জন্য সাধারণ ভ্যালিডেশন)
  protected validate(amount: number) {
    if (amount <= 0) throw new Error("Amount must be > 0");
  }

  // Abstract method — child class গুলোকে implement করতে হবে
  abstract process(amount: number): void;
}

// Child 1 — bKash পেমেন্ট
class BkashPayment extends Payment {
  process(amount: number): void {
    this.validate(amount); // shared logic ব্যবহার
    console.log(`bKash: ${amount} টাকা পেমেন্ট সফল`);
  }
}

// Child 2 — Credit Card পেমেন্ট
class CardPayment extends Payment {
  process(amount: number): void {
    this.validate(amount);
    console.log(`Card: ${amount} টাকা পেমেন্ট সফল`);
  }
}

// Checkout ফাংশন — এখানে কারনে implementation প্রয়োজন নেই
function checkout(p: Payment, amount: number) {
  p.process(amount); // শুধু process() বললেই কাজ হবে
}

// ব্যবহার
checkout(new BkashPayment(), 500);  // bKash: 500 টাকা পেমেন্ট সফল
checkout(new CardPayment(), 1200);  // Card: 1200 টাকা পেমেন্ট সফল
```

**কী হচ্ছে:** `checkout()` শুধুই `Payment` টাইপ চায় — কাহারো ভিতরের কাজ কেমন সেটা জানার প্রয়োজন নেই। এইটাই অ্যাবস্ট্রাকশন।

---

# রিয়াল-লাইফ ব্যাখ্যা (সহজ ভাষায়)

ধরা যাক — তোমার দোকানে পেমেন্ট নেওয়ার অনেক উপায় আছে (bKash, Card, PayPal)।
তুমি Checkout ফাংশনে শুধু বলবে: “পেমেন্ট করো” — *কিভাবে* আদৌ পেমেন্ট হবে সেটা প্রতিটি পেমেন্ট ক্লাস নিজে জানবে।
এইভাবে তুমি পুরো পেমেন্ট প্রসেসের জটিলতা লুকিয়ে রাখছো — এটাই অ্যাবস্ট্রাকশন।

---

# কখন/কোথায় ব্যবহার করো?

* যখন তুমি চাইছো বিভিন্ন implementation থাকার পরও **একই interface** দিয়ে কাজ করাতে (plugin systems)
* সার্ভিস লেয়ারে (API wrappers) — বাইরে ফ্রন্টেন্ড শুধু service.method() বলবে
* বড় প্রজেক্টে dependency injection বা টেস্টিং সহজ করতে (mock করতে পারবে)
* UI কম্পোনেন্ট সিস্টেমে common behavior expose করতে (render, mount ইত্যাদি)

---

# সংক্ষেপে (Quick recap)

* **অ্যাবস্ট্রাকশন = প্রয়োজনীয় কাজ প্রকাশ, কিভাবে তা হবে লুকানো।**
* TypeScript-এ `abstract class` বা `interface` দিয়ে করে থাকি।
* সুবিধা: কোড পরিষ্কার, পরিবর্তন সহজ, টেস্ট ও রিইউজ সহজ। ✅

চাওলে আমি একই উদাহরণ React + TypeScript-এ দেখিয়ে একটা ছোট ডেমো বানিয়ে দেখাই — বলো কি লাগবে?


 */