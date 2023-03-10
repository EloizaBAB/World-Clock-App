function upDateCity(event) {
  function upDateCityTime() {
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
        </div><a href="index.html">All cities</a>`;
  }
  setInterval(upDateCityTime, 1000);
}
function upDateTime() {
  let firstCity = document.querySelector("#city-1");
  if (firstCity) {
    let firstCityElement = firstCity.querySelector(".date");
    firstCityElement.innerHTML = moment().format("MMMM Do YYYY");
    let cityCurrentTime = moment().tz("America/Bahia");
    let CityTime = document.querySelector(".time");
    if (is24H) {
      CityTime.innerHTML = cityCurrentTime.format("HH:mm:ss");
    } else {
      CityTime.innerHTML = cityCurrentTime.format(
        "h:mm:ss [<small>]A[</small>]"
      );
    }
  }

  /**
   * Description placeholderjjkvdkdfkdjdjfkjdf
   * @date 01/03/2023 - 11:41:37
   *
   * @type {number}kkkkdkkdkdkkddkdkd
   * kdddd
   */
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
let is24H = false;

function changeTime(event) {
  event.preventDefault();
  is24H = !is24H;
}

upDateTime();
setInterval(upDateTime, 1000);

let citiesSelect = document.querySelector("#city-selected");
citiesSelect.addEventListener("change", upDateCity);

let changeUnity = document.querySelector("button");
changeUnity.addEventListener("click", changeTime);
