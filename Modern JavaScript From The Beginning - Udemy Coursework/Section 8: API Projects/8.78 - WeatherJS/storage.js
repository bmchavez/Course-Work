class Storage {
  constructor() {
    this.cityName;
    this.defaultCityName = 'New York';
  }

  getLocationData() {
    if(localStorage.getItem('city') === null) {
      this.cityName = this.defaultCityName;
    } else {
      this.cityName = localStorage.getItem('city');
    }

    return {
      city: this.cityName
    }
  }

  setLocationData(cityName) {
    localStorage.setItem('city', cityName);
  }
}