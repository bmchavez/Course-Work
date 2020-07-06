// Init Weather Object
const weather = new Weather('Boston');

// Get Weather on Dom load
document.addEventListener('DOMContentLoaded', getWeather)

// weather.changeLocation('Miami');

function getWeather(){
  weather.getWeather()
    .then(results => {
      console.log(results);
    })
    .catch(err => console.log(err));
}
