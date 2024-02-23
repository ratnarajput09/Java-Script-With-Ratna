//function 

//suppos i want to print my name alpha letters one by one agin and again but it long process if i do with simple console.log so we will use function for that

function Printname() {
    console.log("S");
    console.log("I");
    console.log("V");
    console.log("A");
    console.log("N");
    console.log("I");
}

//Printname() //function execution

function addTwonumbers(num1, num2) {
 console.log(num1 + num2);
}

//const result = addTwonumbers(8,19)
    
//console.log(result); //it will give you undefined because the fn is not returning anything

//return and console.log is different concepts.


function addtwoNum(val1 , val2) {
    return val1 + val2
}
const result = addtwoNum(8,90)
//console.log("Result" , result);

//when you return value in fn you have to store that in other variable cannot console.log direct.


//function for login username
function LoginuserMsg(username) {
    if (!username) {
    console.log("enter username")
    }
    return `${username} just logged in`
}
//console.log(LoginuserMsg("shivanik"));

//shopping cart 

function addtocart(...name) {
    return name
}

console.log(addtocart("makeup","hairoil","soap","shampoo","conditioner"));

//...(spread operato is also rest operator) depends on the usecase of function.
