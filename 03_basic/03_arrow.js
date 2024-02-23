// arrow function and this keyword.

//this keyword give you info about current context.


const user = {
    username: "shivani",
    price: 199,

    welcommessage : function () {
        console.log(`${this.username}, welcome to the website`);
        console.log(this);
    }

}

//user.welcommessage()
//user.username = "ratna"
//user.welcommessage()

console.log(this); //this will give you empty obj because we are in node enviornment

//this same function will give different value in chrome becaue the global obj is window.


//function one(){
    //let username = "shivani"
    //console.log(this.username);
//}
//one()  op = undefined

/*const chai = function one (){
    let username = "shivani"
    console.log(this.username);
}
chai() //undefined
*/

/*const chai = () => {
    let username = "shivani"
    console.log(this.username);
}
chai() //op = undefined
*/

//arrow function

const addtwonum = (num1, num2) => {
    return num1 + num2 
}
 console.log(addtwonum(7,89));

//implicit way of defining arrow fn

const dividetwonum = (val1, val2) => ( val1 / val2 )

console.log(dividetwonum(7,6));

//when you creat a fn with explicitly you have return the value.
//in implicitly use of () is must.







