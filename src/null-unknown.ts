
const myFunction =(text: string | null): void => {
    if (text !== null) {
        console.log(text.length);
    } else {
        console.log("No value provided");
    }
}

myFunction("Mahdi")
myFunction(null)


const gussMessage = (myGuss: unknown) => {
    console.log(myGuss)
}

gussMessage('maruf');
gussMessage(23)
gussMessage(null);
gussMessage(undefined);
