const root = document.querySelector(".emos__shows");
const myForm = document.getElementById("myForm");
const inputEmo = document.getElementById("inputEmo");
const errorMeg = document.querySelector(".emos__error");
const errorList = [];


// Get data from GifAPI
const KEY = "jbHbQve6OotdhJ4pW4PWhMD8caOsE2Yn";

function addToHTML(gifs) {
  try {
    const img = document.createElement("img");
    console.log(gifs);
    if (gifs?.images?.["fixed_height"]?.url) {
      img.src = gifs.images["fixed_height"].url;
      img.classList.add("emos__img");

      root.appendChild(img);
      
    } else {
      errorList.push("No Gifs for this search");
    }
    
  } catch(error){
    console.log(error);
  }
  
}
async function fetchAPI(url) {
  try {
    const response = await axios.get(url);
    console.log(response);
    const gifsList = response.data.data;
    console.log(`${gifsList} : ${gifsList.length} `);
    if (gifsList.length == 0) {
      errorList.push("No Gifs for this search");
      // return;
    }
    gifsList.forEach((element) => {
      addToHTML(element);
    });
    console.log(errorList);

  } catch (error) {
    console.log(error);
  }
}

const inputText = inputEmo.value;
const URL = "https://api.giphy.com/v1/gifs/search?api_key=" + KEY + "&q=";
const finalURL =
  URL +
  inputText +
  "&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips";
inputEmo.onkeypress = function(e){
  console.log(e.key);
  if (e.key.toLowerCase() === "enter") {
    root.innerHTML = "";
    console.log(finalURL);
    fetchAPI(finalURL);
    console.log(errorList);

    if (errorList.length > 0) {
      errorMeg.innerHTML = errorList[0];
    }
    inputEmo.value = "";
    return false;
  }
  
}

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target.inputEmo);
  const inputSearch = e.target.inputEmo.value;
  let finalURL =
    URL +
    inputSearch +
    "&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips";
  root.innerHTML = "";
  console.log(finalURL);
  fetchAPI(finalURL);
  console.log(errorList);

  if (errorList.length > 0) {
    errorMeg.innerHTML = errorList[0]; // failed.
  }
  inputEmo.value = "";
  return false;
})