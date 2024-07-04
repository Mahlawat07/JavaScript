

function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("G");
    console.log("A");
    console.log("R");
}

// sayMyName();

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2;
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result:", result)


function loginUserMesaage (username = "Rahul"){
    if(!username){
        console.log("Please enter a usernamw");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMesaage("Sagar"))
// console.log(loginUserMesaage("Sagar"))


function calculateCartPrice(val, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 3000))

const user = {
    username: "Sagar",
    price: 1999999
}

function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 299 
})

const myNewArray = [200, 400, 600, 1000]

function returnSecondvalue(getArray){
    return getArray[1]
}

// console.log(returnSecondvalue(myNewArray))
console.log(returnSecondvalue([200, 400, 600, 1000]))