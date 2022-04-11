// basic class aka empty class 

class Point_ {
    x: number;
    y: number;
}

const pt = new Point_()
pt.x = 23
pt.y = 98


class Point_1 {
    x = 10
    y = 20
}

const pt_1 = new Point_1()
// console.log(pt_1.x, pt_1.y) 

// pt_1.x = 'ahahah' //error 


// with constructor  
class Point_2 {
    name: string

    constructor() {
        this.name = 'shahul'
    }
}

const pt_3 = new Point_2()
// console.log(pt_3.name)    // shahul

pt_3.name = 'ulala'
// console.log(pt_3.name)    // ulala

// readonly 
class Greeter {
    readonly name: string = 'hello'
    constructor(newName?: string) {
        newName && (this.name = newName)
    }

    err(newName?: string) {
        //  this.name = newName    // error because read-only  
        throw new Error('not implemented')
    }
}


const g = new Greeter()
// g.name = 'new fuckin name'    //error bc. read-only 

const g2 = new Greeter('shahul')

// console.log(g.name, g2.name)

// g2.err()    // throw error  


class Point_3 {
    x: number;
    y: number;

    // Normal signature with defaults
    constructor(x = 0, y = 0) {
        this.x = x
        this.y = y
    }
}


class Point_4 {
    x: number;
    y: number;
    s: string
    xs: any
    xy: any
    // overloads 
    constructor(x: number, y: string);
    constructor(s: string);
    constructor(xs: any, y?: any) {

    }
}

const pt_4 = new Point_4(12, '23')


// Super Calls 

class Base {
    k = 4
}

class Derived extends Base {
    constructor() {
        super()
        console.log(this.k)
    }
}

const d = new Derived()

//  method in class 
class Point_5 {
    x = 10
    y = 20

    scale(n: number): void {
        this.x *= n
        this.y *= n
    }
}

// Getters / Setters  

class C {
    private _length = 0

    get length() {
        return this._length
    }
    set length(value) {
        this._length = value
    }
}

const c11 = new C()
console.log(c11.length)
// c11._length = 656
console.log(c11.length)

c11.length = 60909
console.log(c11.length)


class Thing {
    _size = 0;

    get size() {
        return this._size
    }

    set size(value: string | number | boolean) {
        value = Number(value)
        if (!Number.isFinite(value)) {
            this._size = 0
            return
        }
        this._size = value
    }
}

const thing = new Thing()
console.log('-----------------------------')
console.log(thing._size)
thing.size = '456'
console.log(thing._size)
thing.size = true
console.log(thing._size)
thing.size = 9000
console.log(thing._size)
thing.size = 'shahul'
console.log(thing._size)
console.log('-----------------------------')


// Index Signatures

class MyClass {
    [s: string]: boolean | ((s: string) => boolean)

    check(s: string) {
        return this[s] as boolean
    }
}

const myclass = new MyClass()
myclass['hello'] = true
console.log(myclass.check('hello'))
myclass.greet = (s: string) => {
    console.log(s)
    return true
}
console.log(myclass.check('greet'))


// Class Heritage

// implements Clauses
/*
    You can use an implements clause to check that a class satisfies a particular interface . An error
    will be issued if a class fails to correctly implement it:
 */

interface Pingable {
    ping(): void
}

class Sonar implements Pingable {

    //  if ping method is missing this will throw an error
    ping(): void {
        console.log('ping')
    }
}


const sonar = new Sonar()
console.log('--------------------')
sonar.ping()
console.log('--------------------')



type Checkable = {
    check(name: string): boolean
}

class NameChecker implements Checkable {
    name: string
    check(name: string): boolean {
        this.name = name
        return true
    }
}

const nameChecker = new NameChecker()
console.log(nameChecker.name)
console.log(nameChecker.check('shahul'))
console.log(nameChecker.name)


class Animal10 {
    move() {
        console.log('Moving forward')
    }
}

class Dog10 extends Animal10 {

    woof(times: number) {
        while (times-- > 0) {
            console.log('woof ! ' + times)
        }
    }
}

const dog10 = new Dog10()

dog10.move()
dog10.woof(10)



// Overriding Methods of base class 

class Base2 {
    greet() {
        console.log('Hello World!')
    }
}

class Derived2 extends Base2 {

    //  overriding greet method of base class 
    greet(name?: string) {
        name ?
            console.log('Hello ' + name.toUpperCase()) :
            super.greet()
    }
}

const dd2 = new Derived2()
dd2.greet()
dd2.greet('shahul')

// It's important that a derived class follow its base class contract. Remember that it's very common (and always legal!) to refer to a derived class instance through a base class reference:
const b2: Base2 = dd2
b2.greet()

class D4 extends Base2 {

    //  can't make arg name required bc. base class greet method is not assignable 
    // greet(name:string): void {
    //     console.log(name )
    // }
}

/* 
The order of class initialization, as defined by JavaScript, is:
The base class fields are initialized
The base class constructor runs
The derived class fields are initialized
The derived class constructor runs

*/

class One {
    name = 'base'
    constructor() {
        console.log('My name is ' + this.name)
    }
}

class Two extends One {
    name = 'two'
}

const two = new Two()   // prints base not two


// Inheriting Built-in Types

class MsgError extends Error {
    constructor(m: string) {
        super(m)

    }

    sayHello() {
        console.log('Hello ' + this.message)
    }
}

const msgError = new MsgError('new Error found')

msgError.sayHello()
console.log(msgError.message, msgError.name)


// Member Visibility 
console.log('===================================')

class Greeter2 {
    public greet() {
        console.log('Hi!')
    }

    protected getName() {
        return 'shahul'
    }
}

const g3 = new Greeter2()
g3.greet()


class SpGreeter extends Greeter2 {
    public howdy() {
        console.log('Houdy, ' + this.getName())
    }
}

const spg = new SpGreeter()
spg.howdy()
// spg.getName()  // error only accessible inside with in main or sub classes 

// Exposure of protected members 

class PM {
    protected m = 10
}

class DE_PM extends PM {
    m = 15
}


const de = new DE_PM()
console.log(de.m)

// Cross-hierarchy protected access 

class A1 {
    protected x: number = 1
}

class D1 extends A1 {
    protected x: number = 5
}


class D2 extends A1 {
    f1(other: D2) {
        other.x = 10
    }

    f2(other: A1) {
        // other.x =10   // error
    }
}


// private property 

class A2 {
    private x: number = 1
}

const a2 = new A2()
// console.log(a2.x)    // can't access private property

class D3 extends A2 {

    // x = 34    // error 

    showX() {
        // console.log(this.x)   // also error private property only can access with in the same class
    }
}


// TypeScript does allow cross-instance private access:

class AAA {
    private x = 100

    public sameAs(other: AAA) {
        // no error 
        return other.x === this.x
    }
}

// Caveats 

class MySafe {
    private secretKey = 63574527
}

const s = new MySafe()

//  only showing error in Ts but will print value in JS File
// console.log(s.secretKey)

//  no error no problem 
console.log(s['secretKey'])

class Dog3 {
    // strict private 
    #barkAmount = 1801;
    personality = "happy";
    constructor() { }

    printPrivate() {
        console.log(this.#barkAmount)
    }

}


const dog3 = new Dog3()

console.log(dog3.personality)

dog3.printPrivate()
//    console.log(dog3['#barkAmount'])


// Static Members 

class MyClass1 {

    static x = 10
    static printx() {
        console.log(MyClass1.x)
    }
}

console.log(MyClass1.x)
MyClass1.printx()

// Static members can also use the same public , protected , and private visibility modifiers:

class MyClass2 {
    private static x = 30
}

// console.log(MyClass2.x)    // error can't access private property 

// Static members are also inherited
class Base3 {
    static greetings() {
        return 'Hello world'
    }
}


class Derived3 extends Base3 {
    myGreetings = Derived3.greetings()
}

console.log(new Derived3().myGreetings)


// Generic Classes 

class Box_1<T>{
    contents: T
    constructor(value: T) {
        this.contents = value
    }
}

const b_1 = new Box_1('hello')

console.log(b_1.contents)


// this types 

class Box_22 {
    contents: string = ''
    set(value: string) {
        this.contents = value
        return this
    }
}

const newValue = new Box_22().set('new value')

class ClearableBox extends Box_22 {
    clear() {
        this.contents = 'cleared'
    }
}

const _aa = new ClearableBox()
const _bb = _aa.set('shahul')
console.log(_bb.contents)
_bb.clear()
console.log(_bb.contents)


class Box_3 {
    content = ''
    sameAs(other: this) {
        return other.content === this.content
    }
}

// this -based type guards

class FileSystemObject {
    isFile(): this is FileRep {
        return this instanceof FileRep
    }
    isDirectory(): this is Directory {
        return this instanceof Directory
    }
    isNetWorked(): this is NetWorked & this {
        return this.networked
    }
    constructor(public path: string, private networked: boolean) {

    }
}

class FileRep extends FileSystemObject {
    constructor(path: string, public content: string) {
        super(path, false);
    }
}


class Directory extends FileSystemObject {
    children: FileSystemObject[] = []
}

interface NetWorked {
    host: string
}


const fso: FileSystemObject = new Directory('/home/shahul', false)
if (fso.isFile()) {
    console.log(fso.content)
} else if (fso.isDirectory()) {
    console.log(fso.children)
} else if (fso.isNetWorked()) {
    console.log(fso.host)
}

console.log('++++++++++++++++++++++++++')

class Boxx<T> {
    value?: T

    hasValue(): this is { value: T } {
        return this.value !== undefined
    }
}

const boxx = new Boxx()
boxx.value = 'shahul'

if (boxx.hasValue()) {
    console.log(boxx.value)
}

// Class Expressions 

const someClass = class <T>{
    value: T
    constructor(arg: T) {
        this.value = arg
    }
}

const smc = new someClass('hello world')
console.log(smc.value)

// abstract Classes and Members

abstract class Base4 {
    abstract getName(): string

    printName() {
        console.log('hello ' + this.getName())
    }
}

// const b4 = new Base4()    // error 
// We can't instantiate Base with new because it's abstract. Instead, we need to make a derived class and implement the abstract members:

class Derived5 extends Base4 {
    getName(): string {
        return 'shahul'
    }
}


const d5 = new Derived5()
d5.printName()


