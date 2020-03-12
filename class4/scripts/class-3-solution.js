// using only what we have learnt so far;
let users = ["ybnl", "thankgod", "abcd"];
let passwords = ["123", "1234", "12345"];

function chkCred(username, password) {
  for (let i = 0; i < users.length; i++) {
    if (username === users[i]) {
      if (password === passwords[i]) {
        console.log("logged in successfully");
      } else {
        console.log("Invalid Credentials");
      }
    }
  }
}

chkCred("ybnl", "123");
