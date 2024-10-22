function isValidPassword(password, username) {
  if (password.length < 8) {
    return false;
  }

  if (password.includes(" ")) {
    return false;
  }

  if (password.includes(username)) {
    return false;
  }
  return true;
}

console.log(isValidPassword("password123", "user1"));
// console.log(isValidPassword("user12345", "user"));
// console.log(isValidPassword("pass word", "user"));
// console.log(isValidPassword("short", "user"));
 