/**
 *The function listens to an event (click) and then displays the cities name and date
 * @param {click} event
 * Used moment.js library to get the different timezones and to format the date and time as I wanted
 *The dropdown has different cities with different timezones( by the code ISO),which means that in order to dislay the right timezone  the event("click") must target the value attributed to the  selected city
 *If the user selects his/her current city,and to get his/her city's timezone I used the moment.tz.gues() method
 * To display the city name I used the method .replace to replace _ by empty space and .split to separate the words in timezone and use only second one (continent/city)
 * To get the city hour used moment.js library and the method .tz with the variable cityTimeZone,that stores the city timezone
 *To display the cities in the innerHTML  I used template literals(``) to embed an expression into a part of a string,copied and pasted the block of code and replaced some parts with the  placeholders of the form ${expression} to perform substitutions for embedded expressions
 *I added a link that allows the user to go back and see Paris and Bahia  displayed on the screen
 * The cities on the dropdown were not updating the seconds on the screen so I had to create a new function (upDateCityTime) that contained everything and then use the timing event SetInterval that repeatedly calls the function with a 1000 seconds delay between each call
 */
function upDateCity(event) {
  function upDateCityTime() {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
      cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
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
        </div><a href="index.html">Main cities</a>`;
  }
  setInterval(upDateCityTime, 1000);
}

/**
 * This function allows me go get the time and date,then display it by just formatting them
 * Used moment.js library to format the time 1-12am/pm and date
 * To select the timezone of the city I chose to display when the user opens the app (Bahia and Paris) I used the method .tz and directly chose the city
 * To display the time(=CityTime) in Bahia and Paris (=cityCurrentTime) I used the method .format and chose the format of the time and  the [] to select what I did not want to format
 */
function upDateTime() {
  let firstCity = document.querySelector("#city-1");
  if (firstCity) {
    let firstCityElement = firstCity.querySelector(".date");
    firstCityElement.innerHTML = moment().format("MMMM Do YYYY");
    let cityCurrentTime = moment().tz("America/Bahia");
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
/**
 *  Selected the element "city-selected " and added an aventListener to the element city-selected, so whenever the user clicks on it the function upDate City is called
 */
let citiesSelect = document.querySelector("#city-selected");
citiesSelect.addEventListener("change", upDateCity);
