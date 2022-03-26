// The parameter's type annotation is an object type
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 10, y: 20 });
// optional parameters 
function printName(obj) {
    var _a;
    console.log(obj.fName + " " + obj.lName);
    //  need to check if lName is undefined 
    console.log((_a = obj.lName) === null || _a === void 0 ? void 0 : _a.toUpperCase());
}
// union types (or)
function printId(id) {
    console.log('Your ID is: ' + id);
}
printId('2');
printId(2);
//  you need to check the type to use type specific methods and properties 
function welcomePeople(name) {
    if (Array.isArray(name)) {
        console.log(name.join(', '));
    }
    else {
        console.log(name);
    }
    //     u can use common methods and properties without checking the type
    return name.slice(0, 3);
}
function hello(point) {
    console.log(point.x);
}
// adding new fields to an existing type is not possible 
var dog = {
    name: 'Max',
    breed: 'Labrador',
    isAGoodBoy: true
};
// type assertions  -- knowledge about the type more than typescript knows  
var canvas = document.getElementById('canvas');
