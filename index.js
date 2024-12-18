let prompt = require('prompt-sync')(); // For enter input fromm user


// 1. Light Bulb Experiment    
console.log("1. Light Bulb Experiment");
          
let userInput = prompt("Enter your input 0 or 1 : ");

if(userInput == 0){
    console.log("Light is off");
}
else if(userInput ==1){
    console.log("Light is on");
}
else{    
    console.log("Invalid input");
}


// 2. Traffic Light Simulator
console.log("2. Traffic Light Simulator");

let signalCall = prompt("Enter the signal color : ");

if(signalCall === "red" || signalCall === "Red" || signalCall === "RED"){
    console.log("Stop");
}
else if(signalCall === "yellow" || signalCall === "Yellow" || signalCall === "YELLOW"){
    console.log("Slow Down"); 
}
else if(signalCall === "green" || signalCall === "Green" || signalCall === "Green"){
    console.log("Go"); 
}
else{
    console.log("Invalid color");
    
}


// 3. Water Temperature Checker
console.log("3. Water Temperature Checker");

let temperature = prompt("Tell the temprature in Celsius :  ");
if(temperature < 0){
    console.log("Freezing");
}
else if(temperature <= 0){
    console.log("Freezing");
}
else if(temperature <= 15){
    console.log("Cold");
}
else if(temperature <= 30){
    console.log("Warm");
}
else if(temperature > 30){
    console.log("Hot");
}
else{
    console.log("Invalid input");  
}


// 4. Rock-Paper-Scissors Game
console.log("4. Rock-Paper-Scissors Game");

let P1_turn = prompt("Enter P1 turn : ");
let P2_turn = prompt("Enter P2 turn : ");

if(P1_turn === "rock" && P2_turn === "rock"){
    console.log("It's a tie");
}
else if(P1_turn === "paper" && P2_turn === "paper"){
    console.log("It's a tie");
}
else if(P1_turn === "scissor" && P2_turn === "scissor"){
    console.log("It's a tie");
}
else if(P1_turn === "paper" && P2_turn === "rock"){
    console.log("Player 1 win.");
}
else if(P1_turn === "rock" && P2_turn === "scissor"){
    console.log("Player 1 win.");
}
else if(P1_turn === "scissor" && P2_turn === "paper"){
    console.log("Player 1 win.");
}
else if(P1_turn === "rock" && P2_turn === "paper"){
    console.log("Player 2 win.");
}
else if(P1_turn === "paper" && P2_turn === "scissor"){
    console.log("Player 2 win.");
}
else if(P1_turn === "scissor" && P2_turn === "rock"){
    console.log("Player 2 win.");
}


// 5. Simple Alarm System
console.log("5. Simple Alarm System");
let door = prompt("Is the door open? : ");
let motion = prompt("Is motion detected? :");

if(door == "yes" || motion == "yes"){
    console.log("Alarm Triggered");
}
else if(door == "no" || motion == "no"){
    console.log("All safe")
}
else{
    console.log("Please enter your answer in yes/no");   
}


// 6. Simple Temperature Conversion
console.log("6. Simple Temperature Conversion");
let userType = prompt(`Please choose a conversion type. 1 for for Celsius to Fahrenheit, 2 for Fahrenheit to Celsius.Your type : `);

if(userType == 1){
    let temp_Cel = Number(prompt("Enter your temperature in Celsius : "));
    let C_to_F =(temp_Cel* 9/5)+32;
    console.log(`There is ${C_to_F} Fahrenheit in ${temp_Cel} Celsius`);
}
else if(userType == 2){
    let temp_Far = Number(prompt("Enter your temperature in Fahrenheit : "));
    let F_to_C =(temp_Far - 32) * 5/9;
    console.log(`There is ${F_to_C} Celsius in ${temp_Far} Fahrenheit`);
}
else{
    console.log("Invalid Input");
}


// 7. Password Strength Checker
console.log("7. Password Strength Checker");
let pswd = prompt("Enter your password : ");
let length = pswd.length;
if(length>= 8){
    console.log("Strong Password");
}
else if(length< 8 && length >= 5){
    console.log("Moderate Password")
}
else{
    console.log("Weak Password");
}


// 8. Coin Toss Simulator
console.log("8. Coin Toss Simulator");
let PC_turn = Math.floor(Math.random() * 2);
let your_tossTurn = prompt("Enter 0 = tails and 1 for heads : ")

if (your_tossTurn !== null && (your_tossTurn === "0" || your_tossTurn === "1")) {
    your_tossTurn = parseInt(your_tossTurn);

if(PC_turn == your_tossTurn){
    console.log("You Won.");
}
else{
    console.log("You Lose.");   
}
}


// 9. Weather Suggestion Experiment
console.log("9. Weather Suggestion Experiment");
let weather = prompt("Enter weather according to you : ");
if (weather === "Sunny"){
    console.log("Wear sunglasses");
}
else if(weather === "Rainy"){
    console.log("Take an umbrella");
}
else if(weather === "Cold"){
    console.log("Wear Jacket");
}
else{
    console.log("Invalid Input");
}



// 10. Simple Arithmetic Quiz
console.log("10. Simple Arithmetic Quiz");
// Generate two random numbers between 1 and 10
const number1 = Math.floor(Math.random() * 10) + 1;
const number2 = Math.floor(Math.random() * 10) + 1;
// List of operators
const operators = ['+', '-', '*', '/'];
// Randomly choose an operator
const operator = operators[Math.floor(Math.random() * operators.length)];

let guessNumber = Number(prompt("Guess the number : "));
if (guessNumber == operator) {
    console.log("Correct!");
    
} else {
    console.log("Try Again.");
}

// 11. Eligibility for Voting
console.log("11. Eligibility for Voting");
let age = prompt("Enter your age : ");
if (age < 18 ) {
    console.log("You are not eligible for voting");
} 
else if(age >= 18){
    console.log("You are eligible for voting");
}
else{
    console.log('Invalid Input');
}

// 12. Maximum of Two Numbers
console.log("12. Maximum of Two Numbers");
let num1 = prompt("Enter first number : ");
let num2 = prompt("Enter second number : ");
if(num1 > num2){
    console.log("First number is greater than second number");
}
else if(num1 < num2){
    console.log("Second number is greater than first number");
}
else if(num1 == num2){
    console.log("Both numbers are equal");
}
else{
    console.log("Not valid");
}
