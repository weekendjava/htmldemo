//  variables
// let, const

// number 12, 23.45
// String 'sdsd'
// array
// object
// undefined
// boolean

// const arr = ['one', 'two', 'three'];

// console.log(arr);

// const obj = {
//     name: 'User',
//     place: {
//         city: 'Bangalore',
//         state: 'Karnataka'
//     },
//     hobbies: ['tv', 'stuff']
// };

// const arrayOfUsers = [ {
//     name: 'User',
//     place: {
//         city: 'Bangalore',
//         state: 'Karnataka'
//     },
//     hobbies: ['tv', 'stuff']
// }, {name: 'Ram2'}, {name: 'Ram3'}];


// // console.log(123>34);

// let bq;
// arr.push('Hello');
// console.log(arr);
// console.log(bq);

// function myFunction(){
//     console.log("Hello world");
// }

// myFunction();

// const myFunction = function(){
//     console.log("Hello world");
// }

// const anotherFunction = function(farg){
//     farg();
// };

// anotherFunction(myFunction);

// // arrow function
// const arrow = (a) => {
//     console.log(a);
//     return a+10;
// };

// const shortArrow = () => "Hello";

// console.log(shortArrow());

// // short hand syntax ---> only functions with one line -->return stmt
// const op = arrow(23);
// console.log(op);

// const obj = {
//     name: 'User',
//     place: {
//         city: 'Bangalore',
//         state: 'Karnataka'
//     },
//     hobbies: ['tv', 'stuff']
// };

// console.log(obj);

// obj.age = 23;
// console.log(obj['hobbies']);

// array methods ---> syncronus async
// console.log('hello');
// // asyncronus root, fetch--> api calls, promise
// // callback function
// setTimeout(() => {
//     console.log('timeout');
// }, 0);
// console.log('Hi');

//api, send email, printing, image pro
// single threaded

// browser req----> <---(json)res server (restfull api)

// front end web / backend developer--> full stack developer
// backend developer ---> api, java, c#, ruby rails, python 
// front end ---> consume ---> ui, js

//fetch --> inbuilt method in js
const i = 0;
// const pr = new Promise((resolve, reject) => {
//     if (i < 10) {
//         resolve('success');
//     } else {
//         reject('failure');
//     }
// });
// method 1
// pr.then((data)=>{
//    console.log(data); 
// }).catch((err) => {
//     console.log(err);
// });

// async await method 2
const pr = fetch('https://api.github.com/users');
const asyncMethod = async () => {
    try {
        const data = await pr;
        const users = await data.json();
        console.log(users);
    } catch (err) {
        console.log(err);
    }
};

asyncMethod();
