const root = document.querySelector(".gifs__details");

// Get data from GifAPI
const requestURL = "https://api.giphy.com";
const KEY =
  "jbHbQve6OotdhJ4pW4PWhMD8caOsE2Yn";
const categoriesURL =
  "https://api.giphy.com/v1/gifs/categories?api_key=";



function addToHTML(gifs) {
  // const gifs = gifsList.data[3].gif;
  // create an image element
  // const img = document.createElement("img");
  // img.src = gifs.images["480w_still"].url;

  const img1 = document.createElement("img");
  img1.src = gifs.images["downsized"].url;

  // const mp4 = document.createElement("video");
  // const source = document.createElement("source");
  // source.src = gifs.images["downsized_small"].mp4;
  // source.type = "video/mp4";
  // mp4.autoplay = true;
  // mp4.appendChild(source);
  // console.log(source);
  // console.log(mp4);

  // root.appendChild(img);
  root.appendChild(img1);
  // root.appendChild(mp4);
}
 async function fetchAPI() {
    try {
        let url = categoriesURL + KEY;
        console.log(url);
        const response = await axios.get(categoriesURL+KEY);
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