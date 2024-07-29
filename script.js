document.write("JavaScript works!");

console.log("Hello console!");
console.warn("This is only a test!");


/* 
Prompt the user for their name.
Next, prompt the user if they would like to play 3 or 6 holes of mini golf.
Finally, prompt the user either 3 times or 6 times (depending on their input for the second prompt) for each "hole of golf" asking for the number of putts for that specific hole.
Keep track of their cumulative score (total number of putts) and at the end, compare that to the total course par (9 if they chose 3 holes, 18 if they chose 6 — par is 3 for every hole) to calculate the golfer’s total par for the round.
After the last hole, one of three messages is logged to the console depending on if the user was over, under or on par for the round:
If over par, the message should read "Nice try, (name)... Your total par was: +(par)." [be sure to include the plus symbol here to denote over par].
If under par, the message should read "Great job, (name)! Your total par was: -(par)." [include the minus symbol]
If even with par, the message should read "Good game, (name). Your total par was: 0."


*/

// Prompt the user for their name
const name = prompt("Welcome to GC mini golf! What is your name?");
console.log(`Hi, ${name}!`);

// Prompt the user for the number of holes (3 or 6)
const numHoles = parseInt(prompt("Would you like to play 3 or 6 holes?"));

// Validate the number of holes input
if (numHoles !== 3 && numHoles !== 6) {
    console.log("Invalid number of holes. Please reload and choose either 3 or 6.");
} else {
    let totalPutts = 0;
    const parPerHole = 3;
    
    // Prompt for the number of putts for each hole
    for (let i = 1; i <= numHoles; i++) {
        const putts = parseInt(prompt(`How many putts for hole ${i}? (par: ${parPerHole})`));
        totalPutts += putts;
    }

    // Calculate the total par for the round
    const totalPar = numHoles * parPerHole;
    const parDifference = totalPutts - totalPar;

    // Determine the result based on the par difference
    if (parDifference > 0) {
        console.log(`Nice try, ${name}... Your total par was: +${parDifference}.`);
    } else if (parDifference < 0) {
        console.log(`Great job, ${name}! Your total par was: ${parDifference}.`);
    } else {
        console.log(`Good game, ${name}. Your total par was: 0.`);
    }
}
