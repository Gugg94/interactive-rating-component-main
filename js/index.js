var selectedScore = 0;

var ratingItems = document.querySelectorAll(".rating__item");

ratingItems.forEach((selectedItem) => {
  selectedItem.addEventListener("click", () => {
    ratingItems.forEach((ratingItem) =>
      ratingItem.classList.remove("rating__item--selected")
    );

    selectedScore = selectedItem.innerHTML;
    selectedItem.classList.add("rating__item--selected");
  });
});

var submitButton = document.querySelector(".card__btn-submit-rating");
submitButton.addEventListener("click", () => {
  var cardRatings = document.querySelector(".card-ratings");
  var cardThankYou = document.querySelector(".card-thank-you");
  var rating = document.querySelector(".card-thank-you__rating");

  rating.textContent = selectedScore;
  cardRatings.classList.add("card-ratings--hidden");
  cardThankYou.classList.remove("card-thank-you--hidden");
});
