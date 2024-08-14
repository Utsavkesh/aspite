const button = document.querySelector(".prompt_submission");
const images_container = document.querySelector(".images_container");
const input = document.querySelector(".image_input");
const image = document.querySelectorAll(".image");
const form = document.querySelector("form");
const submit = document.querySelector(".submit");

submit.style.color = "white";

const tokken = "t5ZuqLMQVxBtufNZLKrayFS7QAkTcdeFvlcWbQgqOPo";
const page = 1;

const generateImages = async (images) => {
  try {
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${images}&client_id=${tokken}`;

    const response = await fetch(url);
    const data = await response.json();

    const random = Math.floor(Math.random() * 7);

    let html = `<div class="images image_1">
          <img
            class="image"
            src="${data.results[random].urls.small}"
            alt=""
          />
        </div>

        <div class="images image_2">
          <img
            class="image"
            src="${data.results[random + 1].urls.small}"
            alt=""
          />
        </div>

        <div class="images image_3">
          <img
            class="image"
            src="${data.results[random + 2].urls.small}"
            alt=""
          />
        </div>`
    images_container.innerHTML = html;

  } catch (err) {
    alert("Not Found");
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let images = input.value;
  generateImages(images);
});
