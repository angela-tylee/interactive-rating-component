function getRating() {
  return localStorage.getItem("rating");
}

document.addEventListener("DOMContentLoaded", function() { 
  function getResult() {
    const storedRating = getRating();
    if (storedRating) {
      document.querySelector('.rating-result').innerHTML = `<span>You selected ${storedRating} out of 5</span>`;
    } else {
      document.querySelector('.rating-result').innerHTML = `<span>You didn\'t reviewed yet.<span>`;
    }
  }
  
  getResult();
});