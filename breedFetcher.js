const request = require("request");



const fetchBreedDescription = (breedName, callback) => {
let URL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(URL, (error, response, body) => {
    if (error) {
      callback("error",null);
    } else {
      let data = JSON.parse(body)[0];
      if (data === undefined) {
        callback("Cat breed not found");
      }
      callback(null,data.description);
    }
  });
};

module.exports = { fetchBreedDescription };