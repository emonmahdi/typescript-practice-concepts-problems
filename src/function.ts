function heroNormalFunc(a: number, b: number):number{
    const sum = a + b;
    return  sum;
}

console.log(heroNormalFunc(2,4));

// arrow  
const heroArrowFun = (a: number, b: number):number=>  {
    const result = a + b
    return  result
}

console.log(heroArrowFun(3,5))