//                          JS EXERCISES
// 
//         21) Given variables x = "John" and y = "Doe", write on the console "John <> Doe"
//         22) Create an object with properties such name, surname, email
//         23) Delete the email property from the previously created object
//         24) Create an array with 10 strings in it
//         25) Print in the console every string from the previous array
//         26) Create an array with 100 random numbers in it
//         27) Write a function to get the maximum and minimum values from the previously created array
//         28) Create an array of arrays, in which every array has 10 random numbers
//         29) Create a function that gets 2 arrays as parameters and returns the longest one
//         30) Create a function that gets 2 arrays of numbers as parameters and returns the one with the higher sum of values






// 21

let x = "John"
let y = "Doe"

console.log (x + "<" + ">" + y)

//22

let someObject = {
    name: "someName",
    surname: "someSurname",
    email: "some.email@fakemal.com",

}

//23

delete someObject.email

//24

let someArray = [ "there", "must", "be", "ten", "strings", "in", "this", "array", "or", "else"]


//25 

console.log(someArray)

//26 (the numbers repeat in this case, will look at a way for getting only unique values)

let bigArray = [ ]

for (let i = 0, m = 100; i < m; i++) {
    bigArray.push(Math.round(Math.random() * m))
}

console.log(bigArray)

//27 

let minValue = Math.min.apply(Math, bigArray)

let maxValue = Math.max.apply(Math,bigArray)

console.log("the min value is", minValue, "the max value is", maxValue)