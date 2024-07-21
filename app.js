// var variablle1 = 10;
// var varaible2 = 20;
// var variable3 = variablle1 + varaible2;
// console.log(variable3);

// var str1 = "string g";
// var str2 = 'string 2';
// var str3 = `string 3`;
// var str4 = "don't do this"
// console.log(str4);

// var combination = 'string' + varaible2;
// console.log(combination);

// var combine2 = str1 + ' ' + str2;
// console.log(combine2);


// var newnew = 'variable2';
// var new2 = varaible2;
// console.log(newnew);
// console.log(new2);

// var combine3 = `variable2 value is `+ varaible2;
// console.log(combine3)

// var combine4 = `variable2 value is ${varaible2}`
// console.log(combine4);

// /* 
//     + 
//     -
//     *
//     /
//     % 
// */

// const rem = 10%8;
// console.log(rem)

// /* 
//     NaN -> not a number
// */

// console.log('a'/10) //JS does not throw any error -> which can cause trouble 

// console.log(Infinity); //value -> NaN
// console.log(-Infinity); 

// //null and undefined -> 
// //never ever do something like

// var newVaraible = undefined; //not a good thing
// var newVaraible2 = null; //can do

// const normal = 1+2+10+400+900;
// console.log(normal)

// const normal2 = 1 + str1 + (10+ 400+ variable3); //variable3 is a number data type 
// console.log(normal2);

// //boolean -> true + false

// //coercision -> changing the data type 
// //11040030 -> 141030
// /* 
//     ewfew

//     ewfewf
// */

// console.log(true + false);

// console.log(typeof NaN);

// let a = 'abcd';
// let b = 'defg';
// let c = a.concat(b);
// console.log(c);
// console.log(a.length);
// console.log(a.charAt(2));
// console.log(a[2])

// console.log(String)

// let a = 200;
// if(a == 200){
//     console.log('print inside')
// }
// if(a > 200){
//     console.log('print inside 2')
// }
// else{
//     console.log('this fails')
// }
// if(a < 200){
//     console.log('print inside 3')
// }
// if(a % 10 == 0){
//     console.log('print inside 4')
// }
// if(10 || a){
//     console.log('print inside 5')
// }
// if(-5 && a){
//     console.log('print inside 6')
// }

// //ternary operatory -> conditionals
// const output = a == 201 ? 400 : 600;
// console.log(output)

// conditional -> if true -> else

// for(let i=0; i<10; i++){
//     i++;
//     console.log(i)
// }

//step 1 -> compare the value of i with the condition 
//step 2 -> if pass enter the loop 
//step 3 -> run all the statements within the loop
//step 4 -> handle the change determined in the loop
//repeat

// for(let i =100; i>10; i--){
//     i = i/3;
//     console.log(i)
// }

//infinite loop
// let i=10; //initialisation -> outside the loop
// while(i<20){ //condition
//     //inside the loop
//     //change 
//     console.log(i); //inside the loop
// } 

// for(let i=10;; i++){
//     console.log(i)
// }

/* 
    object, array and higher order functions
    
    forEach
    for in
    for of
    map
*/

// let i=10;
// while(i<20){

//     if(i%2 == 0) {
//         i++;
//         continue
//     }
//     console.log(i);
//     i++;
// }

/* 
    

*/

//function is a reusable code block -> 

// const var1 = function isEven(n){
//     //write logic 
//     if(n % 2 == 0){
//         console.log('even');

//     }
//     else{
//         console.log('odd')
//     }
// }
// let a = 10;
// console.log(var1(a, ))
// let d = 200;
// console.log(var1(d))
// console.log(var1)
// console.log(isEven)//referring a

/* 
    1) calling a function
    2) referring a function
*/


// let abcd = 10;
// console.log(abcd)







// const var1 = function isEven(n, n2= 300, n3 =400){
//     console.log(n);
//     console.log(n2);
//     console.log(n3);
// }
// // let a = 10;
// // let b = 200;
// // var1(a, b)
// // let d = 200;
// // var1(d)
// var1(5,15)

/* 
    ''
    ""
    ``
    '"

*/
//data structures -> programming -
//a way of organising the data 

// const studentArr = ['naman', 'shivalal', 'rahul', 'ankit'];

//objects are key value pairs
// const obj = {
//     key1: 'value1',
//     key2: 'value2'
// }
// console.log(obj['key1'])

// const student = {
//     name: 'naman',
//     rollNo: 1,
//     gender: 'male',
//     age: 10,
//     address: 'delhi'
// }

//... -> rest spread operator
// function abcd(){
    
// }

/* 
    generateARandomStrongPassword 

*/

// function getRandomPassword(){
//     let pass = 'defg'+(Date.now() * (Math.random() * 100 -1)) + 'a';
//     console.log(pass)
// }

// getRandomPassword()

// function func(){
//     console.log('execute')
// }

// function higher(n, n1, n2){
//     n2()
// }
// let a = 10;
// let b = 20;
// let c = 30
// higher(a, b, func)

/* 
    higher order funciton -> a function which takes another function as a parameter or a funciton which return another functiion is referred to as a higher order finciton

    first class function -> a function which is getting passed to another function is referred ot as a first clalss funciton

    callbacks 

*/
// function hof(func){
//     func();
//     return function sample(){
//         var a =10;
//         console.log(a);
//     }
// }
// let a = 100;
// const func = hof(function def(){
//     console.log('i am a callback func')
// });
// func();

/* 
    map -> hof
    filter -> hof
    reduce -> hof
    find -> hof
    forEach -> hof 

*/

function higher(a1, a2){
    a1(a2)
}

higher(function(a){
    console.log(a)
}, 200)

/* 
    closures -> 
*/