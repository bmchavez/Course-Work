class Weather {
  constructor(city) {
    this.apiKey = '24e7bcd4ee486859d60f5f19dba4fc0d'
    this.cityName = city
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&appid=${this.apiKey}`);
  
    const responseData = await response.json();
    
    return responseData
  };

  // Change weather location
  changeLocation(city){
    this.cityName = city
  }
}

