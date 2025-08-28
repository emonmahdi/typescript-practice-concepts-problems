type myArray<T> = Array<T>

const myNumber: myArray<number>  = [1,2,45,6,7,8];
const myString: myArray<string> = ['arif', 'rakib', 'abir', 'habib'];
const myBoolean: myArray<boolean>  = [true, false, true]

type InfoType = {name: string, age:number}

const ourInfo:myArray<InfoType> = [
    {name: "Abir", age: 21},
    {name: "kabir", age: 24},
    {name: "hasan", age:32 },
]

// tuple in generic

type MyGeneric<X, Y> = [X, Y];

const dataA:MyGeneric<string, number> = ['hasan', 23]
const dataB:MyGeneric<number, string> = [21,'hasan']
const dataC:MyGeneric<number, boolean> = [21,true]

// console.log(dataA)

// function in generic

const printInfo = <P, Q>(info1: P, info2: Q) => {
    console.log(`Name: ${info1}, Age: ${info2}`);
}

printInfo<string, number>('Hasan', 23)
printInfo<number, string>(22, 'Hasan')

// object in generic

interface IME<T, R> {
    name: string,
    age: T,
    salary: number
}

const myData:IME<string, number>= {
    name: 'Md Emon',
    age: '28years',
    salary: 50000
}