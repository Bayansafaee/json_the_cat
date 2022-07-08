const request = require("request");

const arg = process.argv[2];
console.log(arg);

request(`https://api.thecatapi.com/v1/breeds/search?q=${arg}`, (error, response, body) => {
  if (error) {
    console.log('error:', error); // Print the error if one occurred
    return;
  }
  const data = JSON.parse(body);
  console.log(data);
  if (data.length === 0) {
    console.log("breed not found");
    return;
  }
  console.log(data[0].description);
});