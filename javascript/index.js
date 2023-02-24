function upDateTime() {
  let fisrtCity = document.querySelector("#city-1");
  let fisrtCityElement = fisrtCity.querySelector(".date");
  fisrtCityElement.innerHTML = moment().format("MMMM Do YYYY");
  let cityCurrentTime = moment().tz("Europe/Lisbon");
  let CityTime = document.querySelector(".time");
  CityTime.innerHTML = cityCurrentTime.format("h:mm:ss [<small>]A[</small>]");

  let SecondCity = document.querySelector("#city-2");
  let SecondCityElement = SecondCity.querySelector(".date");
  SecondCityElement.innerHTML = moment().format("MMMM Do YYYY");
  let parisCurrentTime = moment().tz("Europe/Paris");
  let CityParisTime = document.querySelector(".paris-time");
  CityParisTime.innerHTML = parisCurrentTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}
setInterval(upDateTime, 1000);
