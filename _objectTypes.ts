

type Ob = {
    name: string;
    age: number
}

function hello(arg: Ob) {
    arg.age = 27;
    arg.name = 'shahul'
    return arg;
}

console.log(hello({ name: "John", age: 34 }));

// readonly 
type obj = {
    readonly name: string;
    readonly age: number;
}

function hello2(arg: obj) {
    // arg.age = 27;   // error
    console.log({ arg });
}

console.log(hello2({ name: "John", age: 34 }));

interface Person {
    name: string;
    age: number;
}

interface readonlyPerson {
    readonly name: string;
    readonly age: number;
}

let writablePerson: Person = { name: "John", age: 34 };

let readonly_person: readonlyPerson = writablePerson

console.log(readonly_person); // { name: 'John', age: 34 }
writablePerson.name = "Shahul";
writablePerson.age = 27;
console.log(readonly_person); // { name: 'Shahul', age: 27 }

// Index signature 

interface StringArray {
    [index: number]: string;
}

const array_1: StringArray = ["Shahul", "John"];
const secondName = array_1[1];


interface NumberDictionary {
    [index: string]: number;
    length: number;
    // name: string;   // error 
}

interface NumberOrStringDictionary {
    [index: string]: number | string;
    length: number;
    name: string;  //ok
}


// extending type 
interface BasicAddress {
    name?: string;
    street: string;
    city: string;
    country: string;
    postalCode: string;
}

interface Address extends BasicAddress {
    name: string;
    unit: string;
}

// Intersection Types

type T1 = {
    color: string;
}
type T2 = {
    radius: number;
}

type ColorCircle = T1 & T2;   // also with interfaces

const cc: ColorCircle = {
    color: 'red',
    radius: 10
}

function draw(circle: T1 & T2) {
    console.log(`Color was ${circle.color}`);
    console.log(`Radius was ${circle.radius}`);
}

draw({ color: "blue", radius: 42 });

// draw({ color: "red", raidus: 42 }); // error

// Generic Object Types

interface Box {
    contents: any
}

let x1: Box = {
    contents: "hello"
}

console.log(x1.contents.toLowerCase()) // no error

interface Box2 {
    contents: unknown
}

let x2: Box2 = {
    contents: "hello"
}

// console.log(x2.contents.toLowerCase()) // error
console.log((x2.contents as string).toLowerCase()) // no error

let x3: Box2 = {
    contents: {
        name: 'shahul'
    }
}


// console.log(x3.contents.toLowerCase()) // error 
console.log((x3.contents as string).toLowerCase()) // this will leads to error


interface NumberBox {
    contents: number;
}
interface StringBox {
    contents: string;
}
interface BooleanBox {
    contents: boolean;
}

function setContents(box: StringBox, newContents: string): void;
function setContents(box: NumberBox, newContents: number): void;
function setContents(box: BooleanBox, newContents: boolean): void;
function setContents(box: { contents: string | number | boolean }, newContents: string | number | boolean) {
    box.contents = newContents;
}

//  the above with template 

interface BoxTemplate<Type> {
    contents: Type;
}

let bx1: BoxTemplate<string> = {
    contents: "hello"
}
bx1.contents;
let bx2: StringBox = {
    contents: "hello"
}
bx2.contents;

function setContents2<Type>(box: BoxTemplate<Type>, newCont: Type) {
    box.contents = newCont;
}

setContents2(bx1, '1');

// Since type aliases, unlike interfaces, can describe more than just object types, we can also use them to write other kinds of generic helper types.

type orNull<T> = T | null;
type OneOrMany<T> = T | T[];
type OneOrManyOrNull<T> = orNull<OneOrMany<T>>;

let t33: OneOrManyOrNull<number> = [1, 2, 3];
t33 = 1
t33 = null
// t33 ='ahah' // error


// TUPLE TYPE 

type Tuple = [number, string, boolean];

function distanceFromOrigin([x, y]: readonly [number, number]) {
    return Math.sqrt(x * x + y * y);
}

let point = [3, 4] as const;
distanceFromOrigin(point);

