const request = require("request");

const breed = process.argv[2];

let URL =`https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(URL, (error, response, body) => {
    if (error) {
      console.log("error");
    } 
    else {
      let data = JSON.parse(body)[0];
      if (data ===undefined) {
        return console.log("Cat breed not found")}
      console.log(data.description);

    }
  }
);
