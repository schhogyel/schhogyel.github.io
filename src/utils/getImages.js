import axios from "axios";

const baseUrl = "https://api.nasa.gov/planetary/apod";
const apiKey = "vtYnBJ5FYR3OXcot0EcysN2TnUxxUrPaDQS3ownq";
const proxyurl = "https://cors-anywhere.herokuapp.com/";

export { getImages };

function getImages() {
  const url = `${baseUrl}?api_key=${apiKey}`;
  return axios
    .get(proxyurl + url)
    .then(response => {
      return response.data;
    })
    .catch(error => console.log(error));
}
