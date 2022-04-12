

function color(value: string) {

    return function (target: any) {
        //  this is decorator 
    }
}

// eg. 

function first() {
    console.log('first(): factory evaluated')
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log('first(): called')
    }
}

function second() {
    console.log('second(): factory evaluated')
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log('second(): called')
    }
}

class ExampleClass {
    @first()
    @second()
    method() { }
}


// Class Decorators

@sealed
class BugReport {
    type = 'report'
    title: string
    constructor(t: string) {
        this.title = t
    }
}

// define @sealed decorator using function declaration
function sealed(constructor: Function) {
    Object.seal(constructor)
    Object.seal(constructor.prototype)
}

const bgr = new BugReport('dark')

// Next we have an example of how to override the constructor to set new defaults.

function reportableClassDecorator<T extends { new(...args: any[]): {} }>(constructor: T) {

    return class extends constructor {
        reportingUrl = 'http://localhost'
    }
}

@reportableClassDecorator
class BugReport2 {
    type = 'report'
    title: string

    constructor(t: string) {
        this.title = t
    }
}


const bug = new BugReport2('Needs dark mode!')
console.log(bug.title)
console.log(bug.type)

// console.log(bug.reportingUrl)   // cant access 

// Method Decorators 

class Greeter22 {
    greeting: string
    constructor(message: string) {
        this.greeting = message
    }

    @enumerable(false)
    greet() {
        return 'hello, ' + this.greeting
    }
}

function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value;
    }
}