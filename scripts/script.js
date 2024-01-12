const root = document.querySelector(".gifs__details");

// Get data from GifAPI
const requestURL = "https://api.giphy.com";
const KEY =
  "jbHbQve6OotdhJ4pW4PWhMD8caOsE2Yn";
const categoriesURL =
  "https://api.giphy.com/v1/gifs/categories?api_key=";



function addToHTML(gifs) {
  const img = document.createElement("img");
  img.src = gifs.images["downsized"].url;
  img.classList.add("gifs__img");

  root.appendChild(img);
}
 async function fetchAPI() {
    try {
        let url = categoriesURL + KEY;
        const response = await axios.get(categoriesURL+KEY);
        console.log(response);
        const gifsList = response.data.data;
        console.log(gifsList);
        gifsList.forEach((element) => {
          addToHTML(element.gif)
        });
  
    } catch(error) {
        console.log(error);
    }
 } 
fetchAPI();