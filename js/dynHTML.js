import { info } from "./data.js";

async function displayData(info, location) {
  // await locationHandler();
  let cardsEl = document.querySelector(".cards");
  if (location === "/") {
    info.forEach((obj) => {
      let icons = ``;

      for (let i = 0; i < obj.technology.length; i++) {
        icons += `
      <ion-icon
        name="logo-${obj.technology[i]}"
        class="card__info__difficulty__icon card__info__difficulty__icon--html"
        >
      </ion-icon>`;
      }

      cardsEl.innerHTML += `
      <div class="card">
      <a href="#" class="card__link">
      <img src="/img/test.jpg" alt="C" class="card__image" />

      <div class="card__info">
      <h2 class="card__info__title">
        ${obj.title}
      </h2>
      <div class="card__info__difficulty">
      ${icons}
        <p class="card__info__difficulty__level">
          <span class="card__info__difficulty__level--num"> 01 </span>
          <span class="card__info__difficulty__level--title">
            ${obj.difficulty}
          </span>
        </p>
      </div>
      <p class="card__info__description">
        ${obj.description}
      </p>
    </div>
      </a>
      </div>
      `;
    });
  } else {
    console.log(location);
  }
}
// displayData(info);

export { displayData };
