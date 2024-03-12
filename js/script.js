"use strict";

let words = document.querySelectorAll(".word");
words.forEach((word) => {
  let letters = word.textContent.split("");
  word.textContent = "";
  letters.forEach((letter) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.className = "letter";
    word.append(span);
  });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let rotateText = () => {
  let currentWord = words[currentWordIndex];
  let nextWord =
    currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];
  // rotate out letters of current word
  Array.from(currentWord.children).forEach((letter, i) => {
    setTimeout(() => {
      letter.className = "letter out";
    }, i * 80);
  });
  // reveal and rotate in letters of next word
  nextWord.style.opacity = "1";
  Array.from(nextWord.children).forEach((letter, i) => {
    letter.className = "letter behind";
    setTimeout(() => {
      letter.className = "letter in";
    }, 340 + i * 80);
  });
  currentWordIndex =
    currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

rotateText();
setInterval(rotateText, 3000);
// Wait for the DOM content to load
document.addEventListener('DOMContentLoaded', function() {
    // Get the About Me section element
    var aboutMeSection = document.getElementById('about-me');

    // Hide the About Me section initially
    aboutMeSection.style.display = 'none';

    // Add a scroll event listener to the window
    window.addEventListener('scroll', function() {
        // Check if the user has scrolled past a certain point
        if (window.scrollY > 400) { // Adjust this value according to your needs
            // Show the About Me section
            aboutMeSection.style.display = 'block';
            aboutMeSection.classList.add('fade-in');
        } else {
            // Hide the About Me section if the user scrolls back up
            aboutMeSection.style.display = 'none';
        }
    });
});
