//array is object.in js array are resizeable.
//in js-array index start with zero.
//1st way to declare array.
const myarr = [0,1,2,3,4,5]
const superman = ["thor", "Dr.strange", "black panther"]

//2nd way to declare array.
const myarray = new Array(1,2,3,4,5)
//accessing the array =>
//console.log(myarray[3]);


//when you do copy operation in array it makes shallow copies.

// Array methods
myarr.push(9)//add the numbers in last
//console.log(myarr);

myarr.pop() //no need to pass any parameteres, remove the last element from the array.
//console.log(myarr);

myarr.unshift(9)
//console.log(myarr);// shift all the number and add in the start the 9number.

myarr.shift()
//console.log(myarr);
//shift and unshift is very similar like push and pop.the only diffrence is they add and remove elment from the begining.

//console.log(myarr);
const newArr = myarr.join()
//console.log(newArr);//join change the type of the array in string.
//console.log(typeof(newArr));//string


//imp mehtods[slice , splice]

console.log("A", myarr);

const myn1 = myarr.slice(1,3)
console.log(myn1);//[1,2]
console.log("B" , myarr);

const myn2 = myarr.splice(1,3)
console.log(myn2);//[1,2,3]
console.log("C" , myarr);
//splice manipulate the actual string , but slice don't do that.