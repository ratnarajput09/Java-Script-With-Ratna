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
console.log(newuser.username.userfullname.First);