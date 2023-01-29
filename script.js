const selectedEl = document.querySelector(".selected")
const submitBtn = document.querySelector(".btn")
const ratingWrapper = document.querySelector(".rating-wrapper")
const thankYouContainer = document.querySelector(".thankyou-container")

submitBtn.addEventListener("click", function () {
  const selected = document.querySelector("input:checked")

  if (selected) {
    ratingWrapper.style.display = "none"
    thankYouContainer.style.display = "block"
    selectedEl.innerHTML = `You selected ${selected.dataset.value} out of 5`
  }
})