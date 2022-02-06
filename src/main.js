// let person = {
//   name: "Krzysztof Zacharjasz",
//   age: 32,
//   country: "Poland",
// };

// function logData() {
//   console.log(
//     person.name + " is " + person.age + " and lives in " + person.country
//   );
// }
// logData();

// let age = 15;
// let price = "";

// age = 4;
// if (age <= 6) {
//   price = "free";
// } else if (age > 6 && age < 17) {
//   price = "child discount";
// } else if (age > 18 && age < 26) {
//   price = "student discount";
// } else if (age > 27 && age < 66) {
//   price = "full price";
// } else {
//   price = "senior citizen discount";
// }

// let discount =
//   age <= 6
//     ? "Free"
//     : age < 17
//     ? "child discount"
//     : age < 27
//     ? "student discount"
//     : age < 67
//     ? "full price"
//     : "senior citizen discount";

// console.log(age);
// console.log(discount);
// console.log(price);

// let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"];

// let text = "The 5 largest countries in the world:\n"
// for (let i = 0; i < largeCountries.length; i++) {
//   text += "- " + largeCountries[i] + "\n";
// }

// console.log(text);

// let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];

// largeCountries.shift();
// largeCountries.pop();
// largeCountries.unshift("China");
// largeCountries.push("Pakistan");

// console.log(largeCountries);

// let dayOfMonth = 13;
// let weekday = "Friday";

// if (dayOfMonth === 13 && weekday === "Friday") {
//   console.log("oh-no");
// }

let handPlayer1 = ["rock", "paper", "scissor"];
let handPlayer2 = ["rock", "paper", "scissor"];
let randomHandPlayer1 =
  handPlayer1[Math.floor(Math.random() * handPlayer1.length)];

let randomHandPlayer2 =
  handPlayer2[Math.floor(Math.random() * handPlayer2.length)];

let winner =
  randomHandPlayer1 === "rock" && randomHandPlayer2 === "scissor"
    ? "Player 2 wins"
    : randomHandPlayer1 === "rock" && randomHandPlayer2 === "paper"
    ? "Player 1 wins"
    : randomHandPlayer1 === "scissor" && randomHandPlayer2 === "paper"
    ? "Player 1 wins"
    : randomHandPlayer1 === "scissor" && randomHandPlayer2 === "rock"
    ? "Player 2 wins"
    : randomHandPlayer1 === "paper" && randomHandPlayer2 === "rock"
    ? "Player 1 wins"
    : randomHandPlayer1 === "paper" && randomHandPlayer2 === "scissor"
    ? "Player 2 wins"
    : "Tie";
    
console.log(randomHandPlayer1);
console.log(randomHandPlayer2);
console.log(winner);
