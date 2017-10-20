const piggyBank = {
    quarters: 4,
    dimes: 10,
    nickels: 5,
    pennies: 100,
}
// initialize dollarAmount variable and set to 0
let dollarAmount = 0;

// add the amount of quarters in the piggyBank object multiplied by the value of a quarter (25 cents) to dollarAmount variable.
dollarAmount += piggyBank.quarters * .25;
// add the amount of dimes in the piggyBank object multiplied by the value of a dime (10 cents) to dollarAmount variable.
dollarAmount += piggyBank.dimes * .10;
// add the amount of nickels in the piggyBank object multiplied by the value of a nickle (5 cents) to dollarAmount variable.
dollarAmount += piggyBank.nickels * .05;
// add the amount of pennies in the piggyBank object multiplied by the value of a penny (1 cent) to dollarAmount variable.
dollarAmount += piggyBank.pennies * .01;

// fix the amount of decimals to 2 to format total properly. 
dollarAmount = dollarAmount.toFixed(2);

// Send the amount of bash stores in the piggyBank object to the console 
console.log("amount:","$" + dollarAmount )