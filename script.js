const questions = document.querySelectorAll(".faq-question");
const icons = document.querySelectorAll("faq-toggle-icon");

const handleBtnClick = (event) => {
  const target = event.target.closest(".faq-question");
  const questionId = target.id;
  const answerId = questionId.replace("question", "answer");
  const answerElement = document.getElementById(answerId);
  const iconElement = target.querySelector(".faq-toggle-icon img");

  if (answerElement.classList.contains("displayBlock")) {
    answerElement.classList.remove("displayBlock");
    iconElement.src = "./assets/images/icon-plus.svg";
  } else {
    answerElement.classList.add("displayBlock");
    iconElement.src = "./assets/images/icon-minus.svg";
  }
};

questions.forEach((question) => {
  question.addEventListener("click", handleBtnClick);
});

icons.forEach((icon) => {
  icon.addEventListener("click", (event) => {
    event.stopPropagation();
    handleBtnClick(event);
  });
});
