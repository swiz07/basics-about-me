const funFactAboutMe = [
  "I like pizza",
  "I like drawing",
  "I love to play games"
];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function updateFact() {
  const elem = document.getElementById("fact-target");
  const randomIndex = getRandomInt(funFactAboutMe.length);
  elem.innerText = funFactAboutMe[randomIndex];
}

updateFact();
