function searchCity(city) {
  let apikey = "8714aed335fo8d04bt89a4b5c1266e26";
  let apiurl = `"https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}&units=metric"`;
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
