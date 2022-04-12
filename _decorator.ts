

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

class Random extends BugReport {

    vote: number
    constructor(n: number) {
        super('helo')
        this.vote = n
    }
}



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


// better explanation from internet 

// class decorator 

const clsDecorator = (target: Function) => {
    // do something with your class 
}

@clsDecorator
class Rocket { }

// If you want to override the properties within the class, you can return a new class that extends its constructor and set the properties.
function addFuelToRocket(target: { new(): any }) {
    return class extends target {
        fuel: number = 100
    }
}

@addFuelToRocket
class Rocket2 {

}

const rock = new Rocket2()


//  calculate execution time  method decorator

const checkMinimumFuel = (fuel: number) => (
    target: Object,
    propertyKey: string,
    descriptor: PropertyDescriptor
) => {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        // @ts-ignore
        if (fuel > this.fuel) {
            console.log("Not enough fuel")

        } else {
            originalMethod.apply(this, args)
        }
    }
    return descriptor
}

class Rocket4 {

    fuel = 50

    @checkMinimumFuel(100)
    @measure
    launch() {
        const start = Date.now()
        while (Date.now() - start < 1000) { }
        console.log("Launching in 3... 2... 1... 🚀");
    }
}

function measure(
    target: Object,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        const start = Date.now()
        const result = originalMethod.apply(this, args);
        const end = Date.now();
        console.log(`Execution time : ${end - start} ms`);
        return result
    }

    return descriptor
}



const rocket4 = new Rocket4()

rocket4.launch()