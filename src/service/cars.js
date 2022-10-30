const services = {
  constructor(garagename) {
    this.garagename = garagename;
    this.garageUrl = `https://wagon-garage-api.herokuapp.com/${this.garageName}/cars`
  },

  async getCars() {
    try {
      const response = await fetch(this.garageUrl);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  },

  async postCar(car) {
    try {
      const response = await fetch(this.garageUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(car)
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  },
}


export default services
