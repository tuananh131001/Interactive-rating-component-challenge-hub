const rateNumberIcon = document.querySelectorAll(".rate-button");
const buttonSubmit = document.querySelector(".submit");
const ratingCard = document.querySelector(".rating-card");
const feedbackCard = document.querySelector(".thankyou-card");
const numberRate = document.querySelector(".numberRate");

let numberRateValue = null;

const handleRateButton = ({ target }) => {
  removeAllActiveClass();
  target.classList.add("active");
  numberRateValue = target.value;
};

const removeAllActiveClass = () =>
  rateNumberIcon.forEach((button) => button.classList.remove("active"));

const handleClickSubmit = () => {
  numberRate.innerHTML = numberRateValue;
  ratingCard.classList.add("hidden");
  feedbackCard.classList.remove("hidden");
};

rateNumberIcon.forEach((button) => {
  button.addEventListener("click", handleRateButton);
});
buttonSubmit.addEventListener("click", handleClickSubmit);
