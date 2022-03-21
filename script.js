const buttonSubmit = document.querySelector(".submit")
const ratingCard = document.querySelector(".rating-card")
const feedbackCard = document.querySelector(".thankyou-card")

const handleClickSubmit = () => {
    ratingCard.classList.add("hidden")
    feedbackCard.classList.remove("hidden")
}

buttonSubmit.addEventListener("click",handleClickSubmit)