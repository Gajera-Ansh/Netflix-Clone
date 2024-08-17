const question = document.querySelectorAll(".question");
question.forEach((question) => {
  const icon = question.querySelector(".icon");
  const answer = question.querySelector(".answer");

  question.addEventListener("click", () => {
    if (icon.classList.contains("active")) {
      icon.classList.remove("active");
      answer.style.padding = "0px 20px 0px 20px"
      answer.style.maxHeight = null;
    } else {
      icon.classList.add("active");
      answer.style.padding = "20px 20px 20px 20px"
      answer.style.maxHeight = "300px";
    }
  });
});
