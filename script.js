// Bookmark Toggle ON/OFF
const iconBookmark = document.querySelector('[data-js="icon-bookmark"]');

iconBookmark.addEventListener("click", () => {
  iconBookmark.classList.toggle("change-bookmark");
});

// Show/Hide Answer

const answerButton = document.querySelector('[data-js="button-answer"]');
const answer = document.querySelector('[data-js="answer-hidden"]');

answerButton.addEventListener("click", () => {
  answer.classList.toggle("answer--hiden");

  if (answer.classList.value === "hidden") {
    answerButton.textContent = "Show Answer";
  } else {
    answerButton.textContent = "Hide Answer";
  }
});
