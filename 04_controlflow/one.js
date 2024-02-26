//if-else

const isuserLoggedIn = true

if (isuserLoggedIn) {
    //console.log("executed");
}

//< , > , <=, >= ,!= , == , === , !==

const tempreature = 51

if (tempreature>= 50) {
    //console.log(`yes temp is ${tempreature} `);
}
else{
    //console.log(false);
}

//one line code in if-else but not recommended.

const balance = 900

//if (balance > 800)  console.log("test pass");

//nesting

const useremail = true
const usedebitcard = true

if (useremail && usedebitcard) {
    console.log("Allowed to nuy cource!");
}

const userLoginGoogle = true
const userLoginEmail = false

if (userLoginEmail || userLoginGoogle) {
    console.log("User Log In Succesful!");
}

//Nullish Coalescing Operator (??) : null undefied

// 
let val1;

//val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = null ?? 39 ?? 90




//console.log(val1);

// Terniary operation 

//condition ? true : false

const iceTeaPrice = 100

iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80");