const makeChange = (c) => {
  c = parseInt(c, 10); // Convert input to an integer
  const change = {
    q: 0, // quarters
    d: 0, // dimes
    n: 0, // nickels
    p: 0  // pennies
  };

  // Values of coins in cents
  const coinValues = { q: 25, d: 10, n: 5, p: 1 };

  // Calculate change for each coin type
  for (const coin in coinValues) {
    const coinValue = coinValues[coin];
    change[coin] = Math.floor(c / coinValue); // Number of this coin
    c %= coinValue; // Remaining amount
  }

  return change;
};

// Prompt the user for input and show the output
const c = prompt("Enter c: "); // Ask for the amount in cents
alert(JSON.stringify(makeChange(c))); // Show the result in JSON format

