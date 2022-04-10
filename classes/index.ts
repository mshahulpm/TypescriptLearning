//  generic class 

class GenericNumber<NumType> {
    zeroValue: NumType;
    add: (x: NumType, y: NumType) => NumType;

    constructor(x: NumType) {
        this.zeroValue = x;
        this.add = function (x: NumType, y: NumType) {
            return x
        }
    }
}
let myGenericNumber = new GenericNumber<number>(3);
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
}

// Using Type Parameters in Generic Constraints

function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
    return obj[key];
}

const xx = {
    name: 'John',
    age: 10
}

getProperty(xx, 'name'); // John
getProperty(xx, 'age'); // 10

type Point23 = { x: number, y: number };
type P = keyof Point23; // "x" | "y"

const p: P = 'x';

type Arrayish = { [n: number]: unknown }
type A = keyof Arrayish; // number

const aa: A = 56;


type Mapish = { [k: string]: boolean }
type M = keyof Mapish; // string | number 


function f() {
    return { a: 1, b: 2 }
}

type Fn = typeof f;

// Indexed Access Types 

type Person_ = { name: string, age: number, alive: boolean }

type Age = Person_['age']

type p1 = Person_['name' | 'age']
type p2 = Person_[keyof Person_]
type AliveOrName = 'alive' | 'name'
type p3 = Person_[AliveOrName]

// type p4 = Person_['gtre']  // error  

const MyArray = [
    { name: "Alice", age: 15 },
    { name: "Bob", age: 23 },
    { name: "Eve", age: 38 },
]

type Person_1 = typeof MyArray[number]

type Age_0 = typeof MyArray[number]['age']
type Age_1 = Person_1['age']

// Conditional Types

interface _Animal {
    live(): void
}

interface _Dog extends _Animal {
    woof(): void
}

type Example_1 = _Dog extends _Animal ? number : string
type Example_2 = RegExp extends _Animal ? number : string

interface IdLabel {
    id: number,
}

interface NameLabel {
    name: string,
}

// function createLabel(id:number):IdLabel;
// function createLabel(name:string):NameLabel;
// function createLabel(idOrName:number|string):IdLabel|NameLabel ;
// function createLabel(idOrName:number|string):IdLabel|NameLabel {
//     throw new Error("Method not implemented.");
// }

type NameOrId<T extends number | string> = T extends number ? IdLabel : NameLabel;

function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
    throw new Error("Method not implemented.");
}

let a = createLabel('ts')
let b = createLabel(1)
let c = createLabel(Math.random() ? 'hello' : 6)

// Conditional Type Constraints 

// type MessageOf<T> = T['message'] // error   

type MessageOf<T extends { message: unknown }> = T['message']

interface Email {
    message: string
}

type EmailMessageContent = MessageOf<Email>


type MessageOf2<T> = T extends { message: unknown } ? T['message'] : never

interface Dog {
    bark(): void
}

type EmailMessageContent2 = MessageOf2<Email>
type DogMessageContent = MessageOf2<Dog>


type Flatten<T> = T extends any[] ? T[number] : T
type str = Flatten<string[]>
type num = Flatten<number>

type Flatten2<T> = T extends Array<infer Item> ? Item : T
type str2 = Flatten2<string[]>
type num2 = Flatten2<number>

type GetReturnType<T> = T extends (...args: any[]) => infer R ? R : never

type num3 = GetReturnType<() => number>
type str3 = GetReturnType<() => string>
type bools = GetReturnType<() => boolean>



declare function stringOrNum(x: string): number;
declare function stringOrNum(x: number): string;
declare function stringOrNum(x: string | number): string | number;

type T_1 = ReturnType<typeof stringOrNum>

type ToArray<T> = T extends any ? T[] : never
type stringOrNumber = ToArray<string | number>


// Mapped Types 

type Horse = {}

type OnlyBoolsAndHorses = {
    [key: string]: boolean | Horse
}

const conforms: OnlyBoolsAndHorses = {
    del: true,
    rodney: false
}


type optionalFlags<T> = {
    [Property in keyof T]: boolean
}

type T_10 = {
    name: string
    age: number
    greet(): void
}

type OF = optionalFlags<T_10>

// Removes 'readonly' attributes from a type's properties

type CreateMutable<T> = {
    -readonly [P in keyof T]: T[P]
}

type LockedAcc = {
    readonly id: number
    readonly name: string
}

type UnlockedAcc = CreateMutable<LockedAcc>

// Removes 'optional' attributes from a type's properties

type Concrete<T> = {
    [P in keyof T]-?: T[P]
}

type optional_1 = {
    name?: string
    age?: number
    greet?(): void
    place: string
}
type no_optional = Concrete<optional_1>

// Key Remapping via as


type MappedTypeWithNewProperties<T> = {
    [P in keyof T as string]: T[P]
}

//  above thing is no Idea may get some Idea from below 

type Getters<T> = {
    [P in keyof T as `get${Capitalize<string & P>}`]: () => T[P]
}

interface Person_2 {
    name: string
    age: number
    location: string
}

type LazyPerson = Getters<Person_2>


// Remove the 'kind' property 

type RemoveKindField<T> = {
    [P in keyof T as Exclude<P, 'kind'>]: T[P]
}

type T_Kind = {
    kind: 'person'
    name: string
    age: number
    greet(): void
}

type T_without_kind = RemoveKindField<T_Kind>


type ExtractPII<T> = {
    [P in keyof T]: T[P] extends { pii: true } ? true : false
}

type T_pii = {
    id: { format: "incrementing" };
    name: { type: string; pii: true };
}

type T_extract_pii = ExtractPII<T_pii>


// Template Literal Types

type World = 'world!'
type Greeting = `hello ${World}`

type EmailLocaleIds = 'welcome_email' | 'email_heading'
type FooterLocaleIds = 'footer_text' | 'footer_link'

type AllLocaleIds = `${EmailLocaleIds | FooterLocaleIds}_id`
type Lang = 'en' | 'fr' | 'ar'

type LocaleMessageIds = `${AllLocaleIds}_${Lang}`


// String Unions in Types

type PropEventSource<T> = {
    on(eventName: `${string & keyof T}Changed`, callback: (newValue: T[string & keyof T]) => void): void
}

declare function makeWatchedObject<Type>(obj: Type): Type & PropEventSource<Type>

const person = makeWatchedObject({
    firstName: "Saoirse",
    lastName: "Ronan",
    age: 26
});

person.on("firstNameChanged", () => { });

//    Intrinsic String Manipulation Types 

type Greeting_1 = `hello, world!`
type ShoutyGreeting = Uppercase<Greeting_1>

type ASCIICacheKey<Str extends string> = `ID-${Uppercase<Str>}`

type MainID = ASCIICacheKey<"my_app">