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

// watches the url
const locationHandler = async () => {
  // gets the url path and replaces hash with empty string e.g (#junior to junior)
  let location = window.location.hash.replace("#", "");
  // if the path length is 0, sets it to primary page route
  if (location.length == 0) {
    location = "/";
  }

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
