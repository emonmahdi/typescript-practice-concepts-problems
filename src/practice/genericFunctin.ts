
function identity(value: string): string{
    return value;
}

console.log(identity('Mahdi Hasan'))
// console.log(identity(200)) // only string value assign

function genericIdentity<T>(value: T){
    return value;
}

const resultString = genericIdentity<string>('Hospital')
const resultNumber = genericIdentity<number>(3000)
const resultBoolean = genericIdentity<boolean>(false);


// object
const myObj = <T, U>(value1: T, value2: U) => {
    return {
        value1, value2
    }
}

const objResult = myObj('Amir Khan', {name: 'Hira', age: 23})
console.log(objResult)