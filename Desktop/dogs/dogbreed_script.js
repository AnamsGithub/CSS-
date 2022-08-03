let timer;
let deleteFirstPhotoDelay;

async function start() {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    const data = await response.json();
    createBreedList(data.message);
  } catch (e) {
    console.log("There was a problem fetching the breed list");
    console.log(e);
  }
}

start();

function createBreedList(breedList) {
  document.getElementById("breed").innerHTML = ` 
  <select onchange="loadByBreed(this.value )">
    <option>Choose a dog breed</option>
    ${Object.keys(breedList)
      .map(function (breed) {
        return `<option>${breed}</option>`;
      })
      .join("")}
  </select>`;
}

async function loadByBreed(breed) {
  if (breed != "Choose a dog breed") {
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
    const data = await response.json();
    // console.log(data);
    createSlideshow(data.message);
  } else {
    clearInterval(timer);
    clearTimeout(deleteFirstPhotoDelay);
    document.getElementById("slideshow").innerHTML = "";
  }

  function createSlideshow(images) {
    let currenPosition = 0;
    clearInterval(timer);
    clearTimeout(deleteFirstPhotoDelay);

    if (images.length > 1) {
      document.getElementById("slideshow").innerHTML = `
  <div class="slide" style=" background-image: url('${images[0]}')"></div> 
  <div class="slide" style=" background-image: url('${images[1]}')"></div>
  `;
      currenPosition += 2;
      if (images.length == 2) currenPosition = 0;

      timer = setInterval(nextSlide, 3000);
    } else {
      document.getElementById("slideshow").innerHTML = `
    <div class="slide" style=" background-image: url('${images[0]}')"></div> 
    <div class="slide"></div>
    `;
    }

    function nextSlide() {
      document
        .getElementById("slideshow")
        .insertAdjacentHTML(
          "beforeend",
          ` <div class="slide" style=" background-image: url('${images[currenPosition]}')"></div>`
        );

      deleteFirstPhotoDelay = setTimeout(() => {
        document.querySelector(".slide").remove();
      }, 1000);

      if (currenPosition + 1 >= images.length) {
        currenPosition = 0;
      } else {
        currenPosition++;
      }
    }
  }
}
