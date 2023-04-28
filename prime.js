function identifyPrime(num) {
  // edge case
  if (num === 1) {
    console.log("No");
    return;
  }

  let range = Math.floor(Math.sqrt(num));
  for (let i = 2; i <= range; i++) {
    if (num % i === 0) {
      console.log("No");
      return;
    }
  }
  console.log("Yes");
}
