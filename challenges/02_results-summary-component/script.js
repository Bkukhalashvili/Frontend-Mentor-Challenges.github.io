const displayData = function () {
  let componentSkills = document.querySelector(".component__right__skills");
  fetch("./data.json")
    .then((response) => response.json())
    .then((json) => {
      const info = json;
      info.forEach((obj) => {
        componentSkills.innerHTML += `
        <div class="component__right__skills__container">
        <div
          class="component__right__skills__container__text-box ${obj.category.toLowerCase()}"
        >
          <img src=${obj.icon} alt="" />
          <span
            class="component__right__skills__container__text-box__text"
          >
          ${obj.category}</span
          >
        </div>
        <div class="component__right__skills__container__score">
          <span
            class="component__right__skills__container__score__number"
          >
            ${obj.score}
          </span>
          <span
            class="component__right__skills__container__score__out-of"
          >
            / 100
          </span>
        </div>
      </div>
        `;
      });
    });
};

displayData();

// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
