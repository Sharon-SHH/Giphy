const root = document.querySelector(".emos__shows");

// Get data from GifAPI
const KEY = "jbHbQve6OotdhJ4pW4PWhMD8caOsE2Yn";
const URL = "https://api.giphy.com/v1/gifs/categories?api_key=" + KEY + "&q=";
const inputText = "sad"
const finalURL = URL + inputText + "&limit=25&offset=0";


function addToHTML(gifs) {
  const img = document.createElement("img");
  console.log(gifs.images["downsized"]);
  img.src = gifs.images["downsized"].url;
  img.classList.add("gifs__img");

  root.appendChild(img);
}
async function fetchAPI() {
  try {
    const response = await axios.get(finalURL);
    const gifsList = response.data.data;
    console.log(gifsList);
    addToHTML(gifsList[0].gif);
    // gifsList.forEach((element) => {
    //   addToHTML(element.gif);
    // });
  } catch (error) {
    console.log(error);
  }
}
fetchAPI();
