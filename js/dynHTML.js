// import { info } from "./data.js";

async function displayData(info, location) {
  // await locationHandler();
  let cardsEl = document.querySelector(".cards");
  // if (location === "/") {
  info.forEach((obj) => {
    if (obj.difficulty === location || location === "/") {
      let icons = ``;

      for (let i = 0; i < obj.technology.length; i++) {
        icons += `
      <ion-icon
        name="logo-${obj.technology[i]}"
        class="card__info__difficulty__icon card__info__difficulty__icon--${obj.technology[i]}"
        >
      </ion-icon>`;
      }

      cardsEl.innerHTML += `
      <div class="card">
      <a href=${obj.link} class="card__link">
      <img src=${obj.image} alt="C" class="card__image" />

      <div class="card__info">
      <h2 class="card__info__title">
        ${obj.title}
      </h2>
      <div class="card__info__difficulty">
      ${icons}
        <p class="card__info__difficulty__level card__info__difficulty__level--${obj.difficulty}">
          <span class="card__info__difficulty__level--num card__info__difficulty__level--num--${obj.difficulty}"> ${obj.difficultyNum} </span>
          <span class="card__info__difficulty__level--title card__info__difficulty__level--title--${obj.difficulty}">
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
    } else {
      console.log(location);
      console.log("why here");
    }
  });
  // } else {
  //   console.log(location);
  // }
}
// displayData(info);

export { displayData };
