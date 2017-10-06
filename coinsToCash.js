const piggyBank = {
    quarters: 4,
    dimes: 10,
    nickels: 5,
    pennies: 100,
}

let dollarAmount = 0;

dollarAmount += piggyBank.quarters * .25;
dollarAmount += piggyBank.dimes * .10;
dollarAmount += piggyBank.nickels * .05;
dollarAmount += piggyBank.pennies * .01;

dollarAmount = dollarAmount.toFixed(2);


console.log("amount:","$" + dollarAmount )