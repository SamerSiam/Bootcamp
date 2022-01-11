const request = require("request");
const axios = require("axios");
const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));
const url =
  "http://api.weatherstack.com/current?access_key=d68fb8b6c1b7ae24df9404dee5e690e1&query=jerusalem&units=m";

request({ url: url, json: true }, (error, response) => {
  if (error) {
    console.log("unable to connect to weather service");
  } else if (response.body.error) {
    console.log("unable to find location");
  } else {
    console.log(response.body.current);
    console.log(`it is currently ${response.body.current.temperature} C in Jerusalem`);
  }
});

const axiosCall = async (apiUrl) => {
  const result = await axios.get(apiUrl);
  const data = result.data;
  console.log("axios data", data);
};

const nodeFetch = async (apiUrl) => {
  const response = await fetch(apiUrl);
  const data = await response.json();
  console.log("fetch data", data);
};
axiosCall(url);
nodeFetch(url);
