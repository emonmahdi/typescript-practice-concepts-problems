
const arrOfNumbers: number[] = [1,2,3,5]

const arrOfString = arrOfNumbers.map((number) => number.toString())
console.log(arrOfString)


type ArrayOfNumber = {
    height: number,
    width: number
}

type ArrayOfString = {
    [key in keyof ArrayOfNumber] : string  // convert to string
}

type AreaOfString<T> = {
    [key in keyof T] : T[key]
}

const area1 : AreaOfString<{height: number, width: string}> = {
    height: 100,
    width: '299'
}
console.log(area1)