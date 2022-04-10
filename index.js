


let a = {
    name: 'a',
    age: 1,
}

let b = a

console.log({ a, b })
a.age++
a.name = 'shahul'
console.log({ a, b })
b.age++
b.name = 'jhon'
console.log({ a, b })