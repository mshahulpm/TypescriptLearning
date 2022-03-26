// enum Role { ADMIN = 'ADMIN', USER = 'USER', READ_ONLY = 'READ_ONLY' }
// const person
//     // : {
//     //     name: string,
//     //     age: number,
//     //     roles: [number, string]
//     // }
//     = {
//     name: 'shahul',
//     age: 26,
//     roles: Role.ADMIN
// }
// // person.roles.push('hello')
// // person.roles[1] = 10
// console.log(person);
// if (person.roles) console.log(person.roles);
// type Combinable = number | string
// function combine(inp1: Combinable, inp2: Combinable, convert?: boolean) {
//     if ((typeof inp1 === 'string' || typeof inp2 === 'string') && !convert) return inp1.toString() + ' And ' + inp2.toString()
//     else return +inp1 + +inp2
// }
// const r = combine(26, 21)
// console.log(r);
// console.log(combine('26', '21', true));
// console.log(combine('hello', '564', true));
// function add(n1: number, n2: number) {
//     return n1 + n2
// }
// function hoy(n1: number, n2: number, cb: (res: number) => void) {
//     cb(n1 + n2)
// }
// let hello: (a: number, b: number) => number;
// hello = add
// // hello = 90
// console.log(hello(10, 10));
// hoy(10, 20, (res) => console.log(res))
// let userInput:unknown;
// let userName:string
// userInput=6
// userInput='sbnjhsjhsj'
// userName='shahul'
// if(typeof userInput==='string') userName = userInput
// function generateError(message: string, code: number): never {
//     throw {
//         message,
//         ErrorCode: code
//     }
// }
// generateError('An Error occured', 500)
// generateError('New Error', 858)
"use strict";
function greet(name, date) {
    console.log('Hello ' + name + ' today is ' + date.toDateString());
}
greet('shahul', new Date());
var obj = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
var n = obj;
//  function with types 
function add(n1, n2) {
    return n1 + n2;
}
var minus = function (n1, n2) {
    return n1 - n2;
};
function getRandomString() {
    return Math.random().toString();
}
var num = 0;
num = add(9, 6);
