// Set appId
//get it by signing up here: https://openweathermap.org/
const appId = 'your api key here in this string';

// getDataForCity function that fetches weather info from openweathermap api

//STEP ONE: Find where we figured out on the openweathermap.org website how we should structure our query request:
// ( you will need to share this/maybe explain in our full group debrief )
const getDataForCity = (city) => fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appId}&units=metric`)
//STEP TWO: console.log response in a readable format (hint: you will have to use .json)
//STEP THREE: after doing this, get rid of the console log and just have it return with the response in this .json readable format
  .then(response => )
  .then(data => {
      // get the data we need for our html from the response
      // STEP FOUR: console.log the data object we receive from the successful PromiseResult - where was this in our previous console.logged response?
      

      //STEP FIVE: assign a const for name, temp (using Math.round to round to a full degree), 
      //feelsLike  (using Math.round to round to a full degree) and description using the console log to guide you with the key names
      // eg. const name = data.name
      // after this you are DONE !

      const emoji = emojis[data.weather[0].icon];

      // creating the card html
      const cardHtml = createCardHtml(name, emoji, temp, feelsLike, description);

      // render!
      weatherContainer.innerHTML = cardHtml;
    })
  .catch((error) => {
    weatherContainer.innerHTML = `<em>Server returned error: "${error.message}".</em>`;
  }); 

// createCardHtml function used to render the weather info 
const createCardHtml = (name, emoji, temp, feelsLike, description) => `
  <div class="card">
    <div class="row no-gutters align-items-center">    
      <div class="col-2 h2 pl-1 pt-1 text-center">                
        ${emoji}
      </div>
      <div class="col-10">
        <div class="card-body">
          <div class="row card-title justify-content-between align-items-center mr-3 mb-1">
            <h4>${name}</h4>
            <h6>${temp}c, feels like ${feelsLike}c</h6>
          </div>
          <div class="row">
            <h5 class="card-subtitle text-muted">${description}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

// emojis object used to find the right emoji from the icon code sent from the api
const emojis = {
  '01d': '☀️',
  '02d': '⛅️',
  '03d': '☁️',
  '04d': '☁️',
  '09d': '🌧',
  '10d': '🌦',
  '11d': '⛈',
  '13d': '❄️',
  '50d': '💨',
  '01n': '☀️',
  '02n': '⛅️',
  '03n': '☁️',
  '04n': '☁️',
  '09n': '🌧',
  '10n': '🌦',
  '11n': '⛈',
  '13n': '❄️',
  '50n': '💨',
};

// selecting all the things needed
const goButton = document.querySelector('#go-button');
const cityInput = document.querySelector('#city-input');
const weatherContainer = document.querySelector('#weather-container');

// event listener for a click event on the "Go!" button
goButton.addEventListener('click', (e) => {
  // get the city from the input field
  const city = cityInput.value;

  // get the weather data for the city
  getDataForCity(city)
    // .then(data => {
    //   // get the data we need for our html from the response
    //   const name = data.name;
    //   const emoji = emojis[data.weather[0].icon];
    //   const temp = data.main.temp;
    //   const feelsLike = data.main.feels_like;
    //   const description = data.weather[0].description;

    //   // create the card html
    //   const cardHtml = createCardHtml(name, emoji, temp, feelsLike, description);

    //   // render!
    //   weatherContainer.innerHTML = cardHtml;
    // });
});
