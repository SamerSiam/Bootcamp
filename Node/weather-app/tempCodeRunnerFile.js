

const nodeFetch = async (apiUrl) => {
  const response = await fetch(apiUrl);
  const data = await response.json();
  console.log("fetch data", data);
};
axiosCall(url);
nodeFetch(url);
