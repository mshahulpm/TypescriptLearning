// The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number }) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}


printCoord({ x: 10, y: 20 });

// optional parameters 

function printName(obj: { fName: string, lName?: string }) {
    console.log(obj.fName + " " + obj.lName);
    //  need to check if lName is undefined 
    console.log(obj.lName?.toUpperCase());
}

// union types (or)

function printId(id: string | number) {
    console.log('Your ID is: ' + id);
}

printId('2')
printId(2)

//  you need to check the type to use type specific methods and properties 

function welcomePeople(name: string[] | string) {
    if (Array.isArray(name)) {
        console.log(name.join(', '));
    } else {
        console.log(name);
    }

    //     u can use common methods and properties without checking the type
    return name.slice(0, 3);
}

// type aliases - a name for any types 

type Point = {
    x: number,
    y: number
}

type ID = string | number;

function hello(point: Point) {
    console.log(point.x);
}

// Interface   - another way to define the type  

interface Point2 {
    x: number;
    y: number;
}

// extending interfaces 

interface Animal {
    name: string;
}

interface Dog extends Animal {
    breed: string;
}

// extending types 

type Animal2 = {
    name: string;
}

type Dog2 = Animal2 & {
    breed: string;
}

//  adding new fields to an existing interface 
interface Dog {
    isAGoodBoy: boolean;
}

// adding new fields to an existing type is not possible 

let dog: Dog = {
    name: 'Max',
    breed: 'Labrador',
    isAGoodBoy: true
}

// type assertions  -- knowledge about the type more than typescript knows  

const canvas = document.getElementById('canvas') as HTMLCanvasElement;

//  also can use angle-brackets except for the .tsx file 
let canvas2 = <HTMLCanvasElement>document.getElementById('canvas');

// Literal Inference 

const obj2 = { counter: 1 }
obj2.counter = 89;

function handleRequest(url: string, method: 'GET' | 'POST') {
    console.log(url, method);
}

const req = { url: 'http://www.google.com', method: 'GET' };

handleRequest(req.url, req.method as 'GET'); // because req method is a string

//  also can use const to convert the entire object to be type literals

const req2 = { url: 'http://www.google.com', method: 'GET' } as const;
handleRequest(req2.url, req2.method);

// strict null checks 

function doSomething(obj: object | null) {
    if (!obj) return; // if obj is null or undefined
    console.log(obj.toString());
}

//  post fix null 
function another(x: number | null) {
    console.log(x!.toFixed(2));
}

// in operator 

type Fish = {
    swim: () => void;
}

type Bird = {
    fly: () => void;
}

function move(animal: Fish | Bird) {
    if ('swim' in animal) {
        return animal.swim()
    }
    return animal.fly()
}

// type predicates 

function isFish(pet: Fish | Bird): pet is Fish {

    // return (<Fish>pet).swim !== undefined;  //or 
    return (pet as Fish).swim !== undefined;
}

function getPet(): Bird | Fish {
    const random = Math.random()
    const obj10 = {
        fly: () => { }
    }
    const obj20 = {
        swim: () => { }
    }
    return random < .5 ? obj10 : obj20;
}


// type guards 

const zoo: (Fish | Bird)[] = [getPet(), getPet(), getPet()];
const underWater1: Fish[] = zoo.filter(isFish) // or 
const underWater2: Fish[] = zoo.filter(isFish) as Fish[];

