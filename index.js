
// getName();
// console.log(getName);

// var x= 4;

// function getName(){
//     console.log("Namaste Javascript")
// }

// getName();
// console.log(x);
// console.log(getName);


// var x = 1;
// a();
// b();
// console.log(x);

// function a(){
//     var x = 12;
//     console.log(x);
// }

// function b(){
//     var x = 15;
//     console.log(x);
// }


// scope in js

// where you can access specific variable and function in our code
// is var b inside the scope in c().../of a function
// scope directly dependent in lexical environment
// whenever a execution context is created a lexical environemnt is also created
// lex. environment is local memory along with lexical environemnt of itd parent
// lexical = in hieraarchy /in sequence/ eg: c fun is lexically inside a function and a funciton is lexically inside the global scope
// for global execution context it points to null

function a(){
    var b =10;
    c()
    function c(){
        console.log(b)
    }
}

a()