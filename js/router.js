// creates an object that maps the url to the template, title, and description
const routes = {
  404: {
    template: "/templates/404.html",
    title: "404",
    description: "Error page",
  },
  "/": {
    template: "/templates/index.html",
    title: "Frontend Mentor Challenges",
    description: "Frontend Mentor Challenges",
  },
  newbie: {
    template: "/templates/newbie.html",
    title: `FEMC — Newbie`,
    description: "Frontend Mentor Challenges",
  },
  junior: {
    template: "/templates/junior.html",
    title: "FEMC — Junior",
    description: "Frontend Mentor Challenges",
  },
  intermediate: {
    template: "/templates/intermediate.html",
    title: "FEMC — Intermediate",
    description: "Frontend Mentor Challenges",
  },
  advanced: {
    template: "/templates/advanced.html",
    title: "FEMC — Advanced",
    description: "Frontend Mentor Challenges",
  },
  guru: {
    template: "/templates/guru.html",
    title: "FEMC — Guru",
    description: "Frontend Mentor Challenges",
  },
};

// remembers active page route
let activePage;
// watches the url
const locationHandler = async () => {
  // gets the url path and replaces hash with empty string e.g (#junior to junior)
  let location = window.location.hash.replace("#", "");
  console.log(location);
  // if the path length is 0, sets it to primary page route
  if (location.length == 0) {
    location = "/";
    console.log(location);

    // adds style to navigation depending on which page route is active
    document.querySelectorAll(`[href="/"]`)[1].classList.add("active");
  } else {
    document.querySelectorAll(`[href="/"]`)[1].classList.remove("active");
    document.querySelector(`[href="#${location}"]`).classList.add("active");

    if (typeof activePage != "undefined" && activePage != "/") {
      document
        .querySelector(`[href="#${activePage}"]`)
        .classList.remove("active");
    }
  }
  activePage = location;
  console.log(activePage);

  // gets the route object from the routes object
  const route = routes[location] || routes["404"];
  // gets the html code from the routes template
  const html = await fetch(route.template).then((response) => response.text());

  // sets content div's content to fetched html code
  document.querySelector(".content").innerHTML = html;
  // sets documents title to routes title
  document.title = route.title;
  // sets documents description to routes description
  document
    .querySelector('meta[name="description"]')
    .setAttribute("content", route.description);
};

//watches the hash and calls the locationHandler function
window.addEventListener("hashchange", locationHandler);
// calls locationHandler to load the page
locationHandler();

// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

//mobile nav button (unhide & hide navigation)
const navButtonEl = document.querySelector(".header__btn-mobile");

navButtonEl.addEventListener("click", function () {
  document.querySelector(".navigation").classList.toggle("navigation--show");
  document
    .querySelector(".header__btn-mobile")
    .classList.toggle("header__btn-mobile--active");
});
