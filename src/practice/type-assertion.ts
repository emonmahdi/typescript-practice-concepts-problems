
const someValue: unknown = 'Hello typescript';

const strLength: number = (someValue as string).length;
console.log(strLength)

const strLength2: number = (<string>someValue).length;


type User ={
    name: string,
    age?:number
}

let user = {} as User;

user.name= 'Emon';
user.age=29

console.log(user)


function kgToGm(value: number | string) : number | string | undefined{
    if(typeof value  === 'string'){
        return parseFloat(value) * 1000
    }
    if(typeof value === 'number'){
        return value * 1000
    }
}

const result1 = kgToGm(100) as number
const result2 = kgToGm('100') as string

console.log(result1)