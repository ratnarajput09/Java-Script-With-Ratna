//objects in javascript

//2 ways to declare object 1.literals 2.constructor(singleton)


Object.create //constructor(here singleton create)


//symbol in objects
const mysym = Symbol("key1")
const jsuser = {
//literal way    

    heros : "hitesh",
    age : 23,
    location : "india",
    [mysym] : "key1", 
}

console.log(jsuser.age);//1 way to access data

console.log(jsuser["age"]); //2 way

console.log(jsuser[mysym]);

//changing values in object

jsuser.age = 34;

console.log(jsuser.age);

//Object.freeze(jsuser)//lock the object value

jsuser.age = 45
console.log(jsuser.age);//value will not change

console.log(jsuser);

//function with object

jsuser.greetings = function(){
    console.log("hello welcom to the js world");
}
console.log(jsuser.greetings());