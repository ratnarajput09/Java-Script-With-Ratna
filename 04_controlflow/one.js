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



