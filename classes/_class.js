// basic class aka empty class 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Dog3_barkAmount;
var Point_ = /** @class */ (function () {
    function Point_() {
    }
    return Point_;
}());
var pt = new Point_();
pt.x = 23;
pt.y = 98;
var Point_1 = /** @class */ (function () {
    function Point_1() {
        this.x = 10;
        this.y = 20;
    }
    return Point_1;
}());
var pt_1 = new Point_1();
// console.log(pt_1.x, pt_1.y) 
// pt_1.x = 'ahahah' //error 
// with constructor  
var Point_2 = /** @class */ (function () {
    function Point_2() {
        this.name = 'shahul';
    }
    return Point_2;
}());
var pt_3 = new Point_2();
// console.log(pt_3.name)    // shahul
pt_3.name = 'ulala';
// console.log(pt_3.name)    // ulala
// readonly 
var Greeter = /** @class */ (function () {
    function Greeter(newName) {
        this.name = 'hello';
        newName && (this.name = newName);
    }
    Greeter.prototype.err = function (newName) {
        //  this.name = newName    // error because read-only  
        throw new Error('not implemented');
    };
    return Greeter;
}());
var g = new Greeter();
// g.name = 'new fuckin name'    //error bc. read-only 
var g2 = new Greeter('shahul');
// console.log(g.name, g2.name)
// g2.err()    // throw error  
var Point_3 = /** @class */ (function () {
    // Normal signature with defaults
    function Point_3(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    return Point_3;
}());
var Point_4 = /** @class */ (function () {
    function Point_4(xs, y) {
    }
    return Point_4;
}());
var pt_4 = new Point_4(12, '23');
// Super Calls 
var Base = /** @class */ (function () {
    function Base() {
        this.k = 4;
    }
    return Base;
}());
var Derived = /** @class */ (function (_super) {
    __extends(Derived, _super);
    function Derived() {
        var _this = _super.call(this) || this;
        console.log(_this.k);
        return _this;
    }
    return Derived;
}(Base));
var d = new Derived();
//  method in class 
var Point_5 = /** @class */ (function () {
    function Point_5() {
        this.x = 10;
        this.y = 20;
    }
    Point_5.prototype.scale = function (n) {
        this.x *= n;
        this.y *= n;
    };
    return Point_5;
}());
// Getters / Setters  
var C = /** @class */ (function () {
    function C() {
        this._length = 0;
    }
    Object.defineProperty(C.prototype, "length", {
        get: function () {
            return this._length;
        },
        set: function (value) {
            this._length = value;
        },
        enumerable: false,
        configurable: true
    });
    return C;
}());
var c11 = new C();
console.log(c11.length);
// c11._length = 656
console.log(c11.length);
c11.length = 60909;
console.log(c11.length);
var Thing = /** @class */ (function () {
    function Thing() {
        this._size = 0;
    }
    Object.defineProperty(Thing.prototype, "size", {
        get: function () {
            return this._size;
        },
        set: function (value) {
            value = Number(value);
            if (!Number.isFinite(value)) {
                this._size = 0;
                return;
            }
            this._size = value;
        },
        enumerable: false,
        configurable: true
    });
    return Thing;
}());
var thing = new Thing();
console.log('-----------------------------');
console.log(thing._size);
thing.size = '456';
console.log(thing._size);
thing.size = true;
console.log(thing._size);
thing.size = 9000;
console.log(thing._size);
thing.size = 'shahul';
console.log(thing._size);
console.log('-----------------------------');
// Index Signatures
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.prototype.check = function (s) {
        return this[s];
    };
    return MyClass;
}());
var myclass = new MyClass();
myclass['hello'] = true;
console.log(myclass.check('hello'));
myclass.greet = function (s) {
    console.log(s);
    return true;
};
console.log(myclass.check('greet'));
var Sonar = /** @class */ (function () {
    function Sonar() {
    }
    //  if ping method is missing this will throw an error
    Sonar.prototype.ping = function () {
        console.log('ping');
    };
    return Sonar;
}());
var sonar = new Sonar();
console.log('--------------------');
sonar.ping();
console.log('--------------------');
var NameChecker = /** @class */ (function () {
    function NameChecker() {
    }
    NameChecker.prototype.check = function (name) {
        this.name = name;
        return true;
    };
    return NameChecker;
}());
var nameChecker = new NameChecker();
console.log(nameChecker.name);
console.log(nameChecker.check('shahul'));
console.log(nameChecker.name);
var Animal10 = /** @class */ (function () {
    function Animal10() {
    }
    Animal10.prototype.move = function () {
        console.log('Moving forward');
    };
    return Animal10;
}());
var Dog10 = /** @class */ (function (_super) {
    __extends(Dog10, _super);
    function Dog10() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog10.prototype.woof = function (times) {
        while (times-- > 0) {
            console.log('woof ! ' + times);
        }
    };
    return Dog10;
}(Animal10));
var dog10 = new Dog10();
dog10.move();
dog10.woof(10);
// Overriding Methods of base class 
var Base2 = /** @class */ (function () {
    function Base2() {
    }
    Base2.prototype.greet = function () {
        console.log('Hello World!');
    };
    return Base2;
}());
var Derived2 = /** @class */ (function (_super) {
    __extends(Derived2, _super);
    function Derived2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //  overriding greet method of base class 
    Derived2.prototype.greet = function (name) {
        name ?
            console.log('Hello ' + name.toUpperCase()) :
            _super.prototype.greet.call(this);
    };
    return Derived2;
}(Base2));
var dd2 = new Derived2();
dd2.greet();
dd2.greet('shahul');
// It's important that a derived class follow its base class contract. Remember that it's very common (and always legal!) to refer to a derived class instance through a base class reference:
var b2 = dd2;
b2.greet();
var D4 = /** @class */ (function (_super) {
    __extends(D4, _super);
    function D4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return D4;
}(Base2));
/*
The order of class initialization, as defined by JavaScript, is:
The base class fields are initialized
The base class constructor runs
The derived class fields are initialized
The derived class constructor runs

*/
var One = /** @class */ (function () {
    function One() {
        this.name = 'base';
        console.log('My name is ' + this.name);
    }
    return One;
}());
var Two = /** @class */ (function (_super) {
    __extends(Two, _super);
    function Two() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'two';
        return _this;
    }
    return Two;
}(One));
var two = new Two(); // prints base not two
// Inheriting Built-in Types
var MsgError = /** @class */ (function (_super) {
    __extends(MsgError, _super);
    function MsgError(m) {
        return _super.call(this, m) || this;
    }
    MsgError.prototype.sayHello = function () {
        console.log('Hello ' + this.message);
    };
    return MsgError;
}(Error));
var msgError = new MsgError('new Error found');
msgError.sayHello();
console.log(msgError.message, msgError.name);
// Member Visibility 
console.log('===================================');
var Greeter2 = /** @class */ (function () {
    function Greeter2() {
    }
    Greeter2.prototype.greet = function () {
        console.log('Hi!');
    };
    Greeter2.prototype.getName = function () {
        return 'shahul';
    };
    return Greeter2;
}());
var g3 = new Greeter2();
g3.greet();
var SpGreeter = /** @class */ (function (_super) {
    __extends(SpGreeter, _super);
    function SpGreeter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpGreeter.prototype.howdy = function () {
        console.log('Houdy, ' + this.getName());
    };
    return SpGreeter;
}(Greeter2));
var spg = new SpGreeter();
spg.howdy();
// spg.getName()  // error only accessible inside with in main or sub classes 
// Exposure of protected members 
var PM = /** @class */ (function () {
    function PM() {
        this.m = 10;
    }
    return PM;
}());
var DE_PM = /** @class */ (function (_super) {
    __extends(DE_PM, _super);
    function DE_PM() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.m = 15;
        return _this;
    }
    return DE_PM;
}(PM));
var de = new DE_PM();
console.log(de.m);
// Cross-hierarchy protected access 
var A1 = /** @class */ (function () {
    function A1() {
        this.x = 1;
    }
    return A1;
}());
var D1 = /** @class */ (function (_super) {
    __extends(D1, _super);
    function D1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.x = 5;
        return _this;
    }
    return D1;
}(A1));
var D2 = /** @class */ (function (_super) {
    __extends(D2, _super);
    function D2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    D2.prototype.f1 = function (other) {
        other.x = 10;
    };
    D2.prototype.f2 = function (other) {
        // other.x =10   // error
    };
    return D2;
}(A1));
// private property 
var A2 = /** @class */ (function () {
    function A2() {
        this.x = 1;
    }
    return A2;
}());
var a2 = new A2();
// console.log(a2.x)    // can't access private property
var D3 = /** @class */ (function (_super) {
    __extends(D3, _super);
    function D3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // x = 34    // error 
    D3.prototype.showX = function () {
        // console.log(this.x)   // also error private property only can access with in the same class
    };
    return D3;
}(A2));
// TypeScript does allow cross-instance private access:
var AAA = /** @class */ (function () {
    function AAA() {
        this.x = 100;
    }
    AAA.prototype.sameAs = function (other) {
        // no error 
        return other.x === this.x;
    };
    return AAA;
}());
// Caveats 
var MySafe = /** @class */ (function () {
    function MySafe() {
        this.secretKey = 63574527;
    }
    return MySafe;
}());
var s = new MySafe();
//  only showing error in Ts but will print value in JS File
// console.log(s.secretKey)
//  no error no problem 
console.log(s['secretKey']);
var Dog3 = /** @class */ (function () {
    function Dog3() {
        // strict private 
        _Dog3_barkAmount.set(this, 1801);
        this.personality = "happy";
    }
    Dog3.prototype.printPrivate = function () {
        console.log(__classPrivateFieldGet(this, _Dog3_barkAmount, "f"));
    };
    return Dog3;
}());
_Dog3_barkAmount = new WeakMap();
var dog3 = new Dog3();
console.log(dog3.personality);
dog3.printPrivate();
console.log(dog3['#barkAmount'])
