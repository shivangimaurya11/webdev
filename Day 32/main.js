"use strict";
exports.__esModule = true;
// var a=10;
// a="hello"
// let a;
// a=10;
// a="hello";
// let a=[1,2,3];
// a.push("hello")
// let a :number[]=[1,2,3];
var s = ["a", "b", "c"];
var a = [1, 2, 3];
a.push("hello");
// a.push(false)
// console.log(a);
//objects
var users = {
    name: "swechchha",
    age: 21
};
var user = {
    name: "John",
    age: 30
};
console.log(user);
// typescript in object oriented programming
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.printHello = function () {
        console.log("hello");
    };
    return App;
}());
var app = new App();
app.printHello();
var uusername = "";
console.log(uusername);
var door = "open";
console.log(door);
var aa;
aa = 10;
aa = "hello";
aa = false;
console.log(aa);
//function
function add(a, b) {
    return a + b;
}
console.log(add(1, 2));
console.log(add(1, "2"));