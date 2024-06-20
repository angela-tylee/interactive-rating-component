const submitBtn = document.querySelector(".submit-btn");
const ratingBtns = document.querySelectorAll(".rating-btn");
const ratingForm = document.querySelector(".rating-form");

// change ratingBtn's color upon clicking
function resetUI() {
  ratingBtns.forEach((ratingBtn) => {
    ratingBtn.removeAttribute("style");
  })
}

ratingBtns.forEach((ratingBtn) => {
  ratingBtn.addEventListener("click", function (e) {
    const rating = this.value;
    localStorage.setItem("rating", rating);
    resetUI();
    this.style.backgroundColor = "var(--white)";
    this.style.color = "var(--very-dark-blue)";
  })
});


submitBtn.addEventListener("click", function () {
  window.location = "./thank-you.html"
});
// window.addEventListener("click", resetUI);

resetUI();
