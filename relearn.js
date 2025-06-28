// ❇️CLOSURES

// msg = "hello"
// function outer(){
//     msg = "bye"
//     return function inner(){
//         console.log(msg)
//     }
// }
// msg = "jojo"
// c = outer();
// c();



// ❇️HOISTING
// console.log(a)

// a = "broo"    //RefferenceError: a is not defined                 | a is not defined

// var a = 30    //undefined                                         | undefined--->OK

// let a = 20    //RefferenceError: cannot access a before init..    | undefined--->NOT OK
// const a = 40  //RefferenceError: cannot access a before init..    | missing initializer in const declaration--->NOT OK



// ❇️SCOPE OF LET.CONST.VAR
// function outer(){
    // msg = "hi"

    // var msg = "hi"    //var is function-scoped only
    // let msg = "hi"    //let is block-scoped 
    // const msg = "hi"  //const is block-scoped
    // console.log(msg)
// }
// outer()
// console.log(msg)



// IIFE(immediately invoked function expression)


console.log("hi")

