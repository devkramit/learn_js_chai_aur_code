const accountId = 778996;
let accountName = "Amit Kr."
var accountEmail = "amit@abc.com";
accountAddress = "Sant Nagar"

console.table([accountId, accountName, accountEmail, accountAddress]);

// accountId = 12345 // Altering a constant value is not permissible

accountName = "Mr. Amit"
accountEmail = "amit@google.com"
accountAddress = "Delhi"
let accountState; // This will print variable value as undefined

console.table([accountId, accountName, accountEmail, accountAddress, accountState]);