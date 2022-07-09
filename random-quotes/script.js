"use script";

// DOM ELEMENTS

const btn = document.querySelector("button");
const p = document.querySelector("p");
const figcaption = document.querySelector("figcaption");

// DATA

const quotes = [
  ["Steve Jobs", "Innovation distinguishes between a leader and a follower"],
  [
    "Søren Kierkegaard",
    "Life is not a problem to be solved but a reality to be experienced",
  ],
  [
    "Seth Godin",
    "How much time are you spending deciding what to spend time on?",
  ],
  [
    "Henry David Thoreau",
    "A man is rich in proportion to the number of things he can afford to let alone",
  ],
  [
    "Oscar Wilde",
    "Morality is simply the attitude we adopt towards people we personally dislike",
  ],
];

// VARIABLES

let author;
let quote;
const max = quotes.length;

// FUNCTIONS

const getRandomInt = function (max) {
  return Math.floor(Math.random() * max);
};

// FUNCTIONALITY

btn.addEventListener("click", (event) => {
  const getRandomQuote = function () {
    const x = getRandomInt(max);
    quote = quotes[x][1];
    author = quotes[x][0];

    p.textContent = quote;
    figcaption.textContent = author;
  };
  getRandomQuote();
});
