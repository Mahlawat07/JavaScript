const accountId = 144553
let accountEmail = "sagar@google.com"
var accountPassword = "12345" 
/* 
prefer not to use var 
because of issue in block scope and functional scope 
*/
accoutnCity = "Jaipur"
let accountState; 

// accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accoutnCity, accountState])