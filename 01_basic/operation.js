//add two string

let str1 = "hello"
let str2 = " ratna"

console.log(str1 + str2) //Or you can write

let str3 = str1 + str2
console.log(str3);


console.log("1" + 2);
console.log(1 + "2");
console.log("1" + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

//so here is the trick when the string comes first all the values converted in string auto
//when the string comes in the last the other value which is in number stay as the same.
//use () if you want do arithmetic operation in one line eg. ((3+4) *5 % 6).

console.log(+true);
console.log(+"");

//value++ ,++value postfix and prefix
let x = 3
let y = ++x
console.log(x , y );

