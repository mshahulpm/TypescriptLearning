
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




// We can use multiple type parameters as well. For example, a standalone version of map would look like this: 

function map<Input, Output>(arr: Input[], fn: (arg: Input) => Output): C