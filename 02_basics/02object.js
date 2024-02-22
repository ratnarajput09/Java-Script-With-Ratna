//singleton [constructor]

const tinderuser = new Object()//single ton object
const tinderUser = {}//non singleton object

//nesting in objects

const newuser ={
    username : {
        userfullname : {
            First : "shivani",
            Middle : "k.p",
            Last : "Rajput",
        }
    }
}
//accessing the value in the nested objects.
//console.log(newuser.username.userfullname.First);

//object merging
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({},obj1 , obj2)


//this method you will use mostly because its easy and latest.
const obj3 = {...obj1, ...obj2}
//console.log(obj3);


//arrays in object 
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); access keys
// console.log(Object.values(tinderUser)); access values
// console.log(Object.entries(tinderUser)); not used much

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); you can check that database has this value or not.


//D- structuring

const course = {
    name : "js hindi",
    price : "1000",
    language : "javasvript",
    instructor : "hitesh"
}

console.log(course.language);//so this is basic syntax

//if you want to access same value again and again and for the clean code there is different syntax 

const {instructor: i} = course
console.log(i);


//json api brief


// json syntax 
//{
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

//can be in array form
[
    {},
    {},
    {}
]