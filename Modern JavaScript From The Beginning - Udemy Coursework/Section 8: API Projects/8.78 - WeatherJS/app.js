// Init Weather Object
const weather = new Weather('Boston');
const ui = new UI;

// Get Weather on Dom load
document.addEventListener('DOMContentLoaded', getWeather)

// weather.changeLocation('Miami');

function getWeather(){
  weather.getWeather()
    .then(results => {
      ui.paint(results);
      console.log(results);
    })
    .catch(err => console.log(err));
}
