/ Check whether a string is a palindrome or not.

let str = "racecar";

let bag = "";
for (let i = str.length - 1; i >= 0; i--) {
  bag = bag + str[i];
}
if (bag === str) {
  console.log("This String is a palindrome");
} else {
  console.log("This String is not a panlindrome");
}
