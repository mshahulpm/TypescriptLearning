
function greeter(fn: (a: string) => void) {
    fn("Hello World");
}

function print(s: string) {
    console.log(s);
}

greeter(print);

type DescribableFunction = {
    description: string;
    (arg: number): number;
}

function doSomething(fn: DescribableFunction) {
    console.log(fn.description);
    return fn(1);
}

const double: DescribableFunction = function () {

    return 2;
};
double.description = "double";

doSomething(double);

// Construct Signatures

type someConstructor = {
    new(s: string): String
}


function cons(c: someConstructor) {
    return new c("Hello");
}

cons(String);

// callOrConstruct 

interface callOrConstruct {
    new(s: string): Date;
    (n?: number): string;
}

function _callOrConstruct(c: callOrConstruct) {
    console.log(c(45));
    return new c("Hello");
}

_callOrConstruct(Date);



// generic functions 

// eg. 

function firstElement(arr: { name: string, age: number }[]) {
    return arr[0];
}

const el1 = firstElement([])

console.log(el1?.age)

function firstElement2<Type>(arr: Type[]): Type {
    return arr[0]
}

const el2 = firstElement2([45, "Hello"])
// we can pass any type also get return same type 

function identity<Type>(arg: Type): Type {
    return arg;
}

let identity1 = identity<number>(23);
let identity2 = identity<string>('23');

// accessing a property of variable type 
function _identity<Type>(arg: Type): Type {
    // @ts-ignore   these could lead to errors because there can be no type information 
    console.log(arg.length);
    return arg;
}

//  real way to do it 
function _identity2<Type>(arg: Type[]): Type[] {
    console.log(arg.length); // no error bc length property exist on arrays 
    return arg;
}

//  this also work 
function _identity3<Type>(arg: Array<Type>): Array<Type> {
    console.log(arg.length)
    return arg
}

let myIdentity: <Input>(arg: Input) => Input = identity;
//  above fn type as interface 
interface myIdentity<Input> {
    (arg: Input): Input
}
function _identity4<Type>(arg: Type): Type {
    return arg;
}

let myNewIdentity: myIdentity<number> = _identity4;


// Generic Constraints

function loggingIdentity<Type>(arg: Type): Type {
    console.log(arg.length)
    return arg
}

//  the above fn is can be correctly written as 

interface Lengthwise {
    length: number;
}

function loggingIdentity2<Type extends Lengthwise>(arg: Type): Type {
    console.log(arg.length)
    return arg
}

loggingIdentity2(3)  // error 
loggingIdentity2({ length: 10, value: 3 }) // no error

// Using Type Parameters in Generic Constraints 

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

getProperty({ name: 'Alice', age: 12 }, 'name');
let x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, 'a')
getProperty(x, 'm') // error 


//  Using Class Types in Generics
function create<T>(c: { new(): T }): T {
    return new c()
}


class bookKeeper {
    hasMask: boolean = false;
}

class ZooKeeper {
    nametag: string = "Mikle";
}

class Animal {
    numLegs: number = 4;
}

class Bee extends Animal {
    keeper: bookKeeper = new bookKeeper();
}

class Lion extends Animal {
    keeper: ZooKeeper = new ZooKeeper();
}

function createInstants<A extends Animal>(c: new () => A): A {
    return new c()
}

createInstants(Lion).keeper.nametag; // typechecks! 
createInstants(Bee).keeper.hasMask; // typechecks!


// Declaring this in a Function

const user = {
    id: 123,
    admin: false,
    makeAdmin: function () {
        this.admin = true;
    }
}

// rest parameter 

function multiplyWithFirstArg(n: number, ...m: number[]) {
    return m.map(x => x * n)
}

var result = multiplyWithFirstArg(2, 1, 2, 3, 4, 5)

var array1 = [1, 2, 3, 4, 5]
var array2 = [6, 7, 8, 9, 10]
array1.push(...array2)

let arg = [1, 4] as const
Math.atan2(...arg)


// Parameter Destructuring  

function sum({ a, b, c }: { a: number, b: number, c: number }) {
    console.log(a + b + c)
}

sum({ a: 1, b: 2, c: 3 })

type SUM = {
    a: number,
    b: number,
    c: number
}

function sum2({ a, b, c }: SUM) {
    console.log(a + b + c)
}


type voidFunc = () => void;

const f1: voidFunc = () => true    // valid 
const v1 = f1()

function f2(): void {
    return true  // error 
}

const f3 = function (): void {
    return true // also error 
}