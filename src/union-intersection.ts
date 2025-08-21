

/* 
Intersection মানে হলো AND (&) অপারেটর ব্যবহার করে একাধিক টাইপের সবগুলো property একসাথে থাকতে হবে।
*/

type HeroTypeA ={
    name: string,
    age: number
}

type HeroTypeB = HeroTypeA & {
    salary: number,
    isMarried: boolean
}

const myHero: HeroTypeB ={
    name:'Abu',
    age: 32,
    salary: 30000,
    isMarried: true
}
console.log(myHero);


/* 
Union মানে হলো, কোনো ভেরিয়েবল একাধিক টাইপের ভ্যালু রাখতে পারবে। অর্থাৎ, OR (|) অপারেটর ব্যবহার করা হয়।
*/

const heroUnion: HeroTypeA | HeroTypeB={
    name:"Madhi",
    age: 23,
    // salary: 3022,
    // isMarried: true
}

console.log(heroUnion)




/* 

ইন্টারভিউ প্রশ্ন (Union)

Q1: Union টাইপের মূল ব্যবহার কী?
Ans: যখন কোনো ভেরিয়েবল বা প্যারামিটার একাধিক টাইপ সাপোর্ট করবে (যেমন string বা number)।

Q2: Union টাইপে যদি কোনো টাইপ match না করে তখন কী হবে?
Ans: TypeScript কম্পাইল টাইমে error দেবে।

Q1: Intersection টাইপের মূল কাজ কী?
Ans: একাধিক টাইপকে কম্বাইন করে একটি নতুন টাইপ বানানো যেখানে সব প্রপার্টি থাকবে।

Q2: Union vs Intersection পার্থক্য কী?
Ans:

Union (|): OR শর্ত — যে কোনো একটির টাইপ হলেই চলবে।

Intersection (&): AND শর্ত — সব টাইপের প্রপার্টি থাকতে হবে।

*/