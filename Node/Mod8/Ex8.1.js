const http = require("http");
const url =
  "http://api.weatherstack.com/current?access_key=d68fb8b6c1b7ae24df9404dee5e690e1&query=jerusalem&units=m";
const request = http.request(url, (response) => {
  let data = "";
  response.on("data", (chunk) => {
    data = data + chunk.toString();
    console.log(chunk);
  });
  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
  request.on("error", (err) => {
    console.log("An error", err);
  });
});

request.end();
