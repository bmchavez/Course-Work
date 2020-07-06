class UI {
  constructor(){
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.windSpeed = document.getElementById('w-wind-speed');
    this.timeZone = document.getElementById('w-time-zone');
  }

  paint(weather) {
    this.location.textContent = weather.name;
    this.desc.textContent = weather.weather[0].description;
    this.string.textContent = weather.main.temp;
    
    this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
    this.humidity.textContent = `Humidity: ${weather.main.humidity}`
    this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like}`
    this.windSpeed.textContent = `Wind Speed: ${weather.wind.speed}`
    this.timeZone.textContent = `Time Zone: ${weather.timezone}`
  }
}