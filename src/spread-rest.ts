// spread

/* 
Spread operator (...) ব্যবহার করা হয় array, object বা iterable কে আলাদা আলাদা value তে ভেঙে দিতে।
অর্থাৎ এটা একটি collection কে "ছড়িয়ে" দেয়।
*/

const friend1:string[] = ['nayeem', 'rana', 'abir'];
const friend2:string[] = ['hafiz', 'jalal', 'rajib']

const result:string[] =  [...friend1, ...friend2]

console.log(result)



// rest parameter
/* 
Rest parameter ব্যবহার করা হয় function এর argument গুলোকে একটি array হিসেবে নিতে।
যখন function এ কতগুলো parameter আসবে আগে থেকে জানা নেই, তখন rest parameter কাজে লাগে।
*/

function heroString(...strings:string[]):void{
    strings.map(s => console.log(s))
}

heroString('programming', 'hero')


function sumAll(...nums: number[]):number{
    return nums.reduce((total, sum) => total + sum, 0)
}

console.log(sumAll(1,2,3,4,5))