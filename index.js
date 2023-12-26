import inquirer from "inquirer";
//  number between 1 to 10 
let generatedNo = Math.floor(Math.random() * 10) + 1;
// user enter their guess 
let { userGuess } = await inquirer.prompt({
    type: "number",
    name: "userGuess",
    message: "guess the number(between 1 to 10)"
});
// check if the user's guess is correct as generated num
if (userGuess === generatedNo) {
    console.log("congratulation , it's correct ");
}
else {
    console.log(`oh no! the correct number was ${generatedNo}. wanna play again !`);
}
