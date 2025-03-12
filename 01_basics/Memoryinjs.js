// memory tyoes are : Stacks(primitive), heap (Non-primitive)


let myGameName = "Muzan"
let anotherName = myGameName
anotherName = "Istar"
console.log(myGameName)
console.log(anotherName)

// in this the code makes copy so its called stack 

let userOne = {
    email:"Raj@google.com",
    upi:"userybl"

}
let userTwo=userOne
userTwo.email="sarika@google.com"

console.log(userOne.email);
console.log(userTwo.email);

// in last code data is originally changed , so its called heap

