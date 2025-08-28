
type listOfFriend = {
    friend1: string,
    friend2: string,
    friend3: string,
    friend4: string,
}
type listOfFriendReadOnly = {
   readonly [key in keyof listOfFriend]  : listOfFriend[key] 
    // friend1: string,
    // friend2: string,
    // friend3: string,
    // friend4: string,
}

const myFriends:listOfFriendReadOnly = {
    friend1: "Abir",
    friend2: 'kabir',
    friend3: 'Sagir',
    friend4: 'Jakir'
}

// myFriends.friend1 = "Faysal"; // read only that'why not change

console.log(myFriends)