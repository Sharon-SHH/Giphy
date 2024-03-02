const root = document.querySelector(".emos__shows");
const myForm = document.getElementById("myForm");
const inputEmo = document.getElementById("inputEmo");
const errorMeg = document.querySelector(".emos__error");

// Get data from GifAPI
const KEY = "jbHbQve6OotdhJ4pW4PWhMD8caOsE2Yn";
const URL = "https://api.giphy.com/v1/gifs/search?api_key=" + KEY + "&q=";

function addToHTML(gifs) {
  try {
    const img = document.createElement("img");
    if (gifs?.images?.["fixed_height"]?.url) {
      img.src = gifs.images["fixed_height"].url;
      img.classList.add("emos__img");
      root.appendChild(img);
    } else {
      errorList.push("No Gifs for this search");
    }
  } catch (error) {
    console.log(error);
  }
}
async function fetchAPI(url) {
  try {
    const response = await axios.get(url);
    const gifsList = response.data.data;
    if (gifsList.length == 0) {
      errorMeg.style.display = "block";
    } else {
      errorMeg.style.display = "none";
    }
    gifsList.forEach((element) => {
      addToHTML(element);
    });
  } catch (error) {
    console.log(error);
  }
}

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputSearch = e.target.inputEmo.value;
  let finalURL =
    URL +
    inputSearch +
    "&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips";
  root.innerHTML = "";
  fetchAPI(finalURL);
  inputEmo.value = "";
  return false;
});

inputEmo.onkeypress = function (e) {
  const finalURL =
    URL +
    inputEmo.value +
    "&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips";
  if (e.key.toLowerCase() === "enter") {
    root.innerHTML = "";
    fetchAPI(finalURL);
    inputEmo.value = "";
    return false;
  }
};
