function upDateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", "").split("/")[1];
  cityHour = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityHour.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityHour.format(
            "h:mm:ss"
          )}<small>${cityHour.format("A")}</small>
          </div>
        </div>`;
}
function upDateTime() {
  let firstCity = document.querySelector("#city-1");
  if (firstCity) {
    let firstCityElement = firstCity.querySelector(".date");
    firstCityElement.innerHTML = moment().format("MMMM Do YYYY");
    let cityCurrentTime = moment().tz("Europe/Lisbon");
    let CityTime = document.querySelector(".time");
    CityTime.innerHTML = cityCurrentTime.format("h:mm:ss [<small>]A[</small>]");
  }

  let SecondCity = document.querySelector("#city-2");
  if (SecondCity) {
    let SecondCityElement = SecondCity.querySelector(".date");
    SecondCityElement.innerHTML = moment().format("MMMM Do YYYY");
    let parisCurrentTime = moment().tz("Europe/Paris");
    let CityParisTime = document.querySelector(".paris-time");
    CityParisTime.innerHTML = parisCurrentTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}
upDateTime();
setInterval(upDateTime, 1000);

let citiesSelect = document.querySelector("#city-selected");
citiesSelect.addEventListener("change", upDateCity);
