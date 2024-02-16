// primitive
//7 types : Stirng, Number, Boolean, null , undefined, Symbol ,BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123') //type of both id&anotherId will be symbol.
const anotherId = Symbol('123')

console.log(id === anotherId);

const BigInt = 1232318736187672639871377173131n

//non - primitive(reference type)
//Array,Objects,Functions

const cars = ["alto" , "bmw" , "scorpio"]; //array
let myobj = {
    name : "ratna" ,
    age : 23 , 
};  //object


const myFunction = function () {
    console.log("hello world");
}

console.log(typeof anotherId); 

//the type of myfunction will be function but it's called object-function.
//the typeof array(cars) will be object.

//js is Dynamic type language.