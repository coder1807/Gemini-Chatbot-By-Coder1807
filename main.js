const suggestionList = document.querySelector(".suggestion-list");

suggestionList.addEventListener("wheel", function (event) {
  event.preventDefault();
  suggestionList.scrollLeft += event.deltaY;
});
