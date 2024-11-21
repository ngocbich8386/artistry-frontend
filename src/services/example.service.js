import axios from 'axios';

class ExampleService {
  myAPI = 'http://localhost:5000';

  getAllArtworks() {
    return axios.get(`${this.myAPI}/artworks`).then(response => response.data);
  }

  getAllCreators() {
    return axios.get(`${this.myAPI}/creators`).then(response => response.data);
  }

  findUser(){
    return axios.get(`${this.myAPI}/user/:userId`).then(response => response.data)
  }
}

const exampleServiceInstance = new ExampleService();  // Gán vào biến

export default exampleServiceInstance;  // Export biến instance
