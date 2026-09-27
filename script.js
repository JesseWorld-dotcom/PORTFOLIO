/* =========================================================
JESSE ENAKHE PORTFOLIO
Vanilla JavaScript
========================================================= */

/* =========================================================
PROJECT DATA
========================================================= */

const projects = [
{
name: "Pedani Migration Services",
description:
"A professional website built for a real-world migration and travel business.",
tech:
"HTML · CSS · JavaScript",
image:
"images/pedani.png",
live:
"https://pedanimigrationservices.com",
github:
"#"
},


{
    name: "GitHub User Search",
    description:
        "Search GitHub users and explore their profiles, repositories and public information.",
    tech:
        "HTML · CSS · JavaScript · API",
    image:
        "images/git-user-search.png",
    live:
        "https://github-search-v2-beta.vercel.app/",
    github:
        "https://github.com/JesseWorld-dotcom/github-user-search/tree/main"
},

{
    name: "Advice Generator",
    description:
        "Generate random pieces of advice through a simple interactive API-powered interface.",
    tech:
        "HTML · CSS · JavaScript · API",
    image:
        "images/advice-generator.png",
    live:
        "https://advice-generator-app-main-ivory.vercel.app/",
    github:
        "https://github.com/JesseWorld-dotcom/advice-generator"
},

{
    name: "Weather App",
    description:
        "Check real-time weather information and forecasts for cities using a weather API.",
    tech:
        "HTML · CSS · JavaScript · API",
    image:
        "images/weather.png",
    live:
        "https://weather-app-main-five-green.vercel.app/",
    github:
        "https://github.com/JesseWorld-dotcom/weather-app"
},

{
    name: "E-Commerce Store",
    description:
        "Browse products, add items to a shopping cart and manage a simple online store experience.",
    tech:
        "HTML · CSS · JavaScript",
    image:
        "images/shopnova.png",
    live:
        "https://shopnova-beryl.vercel.app/",
    github:
        "https://github.com/JesseWorld-dotcom/shopnova/"
},

{
    name: "Hotel Landing Page",
    description:
        "A responsive hotel website concept for exploring rooms, amenities and booking information.",
    tech:
        "HTML · CSS · JavaScript",
    image:
        "images/hotel-landing page.png",
    live:
        "https://maison-soleil-omega.vercel.app/",
    github:
        "https://github.com/JesseWorld-Dotcom/maison-soleil"
},

{
    name: "Country Explorer",
    description:
        "Explore countries and discover information using data from a public REST API.",
    tech:
        "HTML · CSS · JavaScript · API",
    image:
        "images/country-explorer.png",
    live:
        "https://country-explorer-rho-snowy.vercel.app/",
    github:
        "https://github.com/JesseWorld-Dotcom/country-explorer"
},

{
    name: "Simple HTML & CSS Website",
    description:
        "A clean responsive website built from scratch using only HTML and CSS.",
    tech:
        "HTML · CSS",
    image:
        "images/html&css.png",
    live:
        "#",
    github:
        "https://github.com/JesseWorld-dotcom/project7"
}


];

/* =========================================================
DOM REFERENCES
========================================================= */

const projectsGrid =
document.querySelector(".projects-grid");

const themeToggle =
document.querySelector(".theme-toggle");

const themeIcon =
themeToggle?.querySelector("i");

const navLinks =
document.querySelectorAll(".nav-link");

const sections =
document.querySelectorAll("main section[id]");

/* =========================================================
PROJECT RENDERING
========================================================= */

function createProjectCard(project) {


const article =
    document.createElement("article");

article.className =
    "project-card scroll-card";

const liveIsAvailable =
    project.live &&
    project.live !== "#";

const githubIsAvailable =
    project.github &&
    project.github !== "#";

article.innerHTML = `
    <div class="project-preview">
        <img
            src="${project.image}"
            alt="${project.name} project preview by Jesse Enakhe"
            loading="lazy"
        >
    </div>

    <div class="project-content">

        <h3>${project.name}</h3>

        <p>${project.description}</p>

        <div class="tech">
            ${project.tech}
        </div>

        <div class="project-actions">

            ${
                liveIsAvailable
                    ? `
                        <a
                            href="${project.live}"
                            class="small-btn live"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Open ${project.name} live demo"
                        >
                            Live Demo ↗
                        </a>
                    `
                    : `
                        <span
                            class="small-btn live unavailable"
                            aria-label="${project.name} live demo unavailable"
                        >
                            Private
                        </span>
                    `
            }

            ${
                githubIsAvailable
                    ? `
                        <a
                            href="${project.github}"
                            class="small-btn github"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Open ${project.name} GitHub repository"
                        >
                            GitHub
                        </a>
                    `
                    : `
                        <span
                            class="small-btn github unavailable"
                            aria-label="${project.name} GitHub repository unavailable"
                        >
                            Private
                        </span>
                    `
            }

        </div>

    </div>
`;

return article;


}

function renderProjects() {


if (!projectsGrid) {
    return;
}

const fragment =
    document.createDocumentFragment();

projects.forEach(project => {

    const card =
        createProjectCard(project);

    fragment.appendChild(card);

});

projectsGrid.replaceChildren(fragment);


}

renderProjects();

/* =========================================================
THEME TOGGLE
========================================================= */

const savedTheme =
localStorage.getItem("jesse-theme");

if (savedTheme === "light") {
document.body.classList.add("light-theme");
updateThemeIcon(true);
}

function updateThemeIcon(isLight) {


if (!themeIcon) {
    return;
}

themeIcon.className =
    isLight
        ? "fa-regular fa-sun"
        : "fa-regular fa-moon";


}

themeToggle?.addEventListener("click", () => {


const isLight =
    document.body.classList.toggle("light-theme");

localStorage.setItem(
    "jesse-theme",
    isLight ? "light" : "dark"
);

updateThemeIcon(isLight);


});

/* =========================================================
ACTIVE NAVIGATION
========================================================= */

function updateActiveNav() {


let currentSection =
    "home";

const scrollPosition =
    window.scrollY + 140;

sections.forEach(section => {

    const sectionTop =
        section.offsetTop;

    const sectionHeight =
        section.offsetHeight;

    if (
        scrollPosition >= sectionTop &&
        scrollPosition <
            sectionTop + sectionHeight
    ) {
        currentSection =
            section.id;
    }

});

navLinks.forEach(link => {

    const target =
        link.getAttribute("href");

    link.classList.toggle(
        "active",
        target === `#${currentSection}`
    );

});


}

window.addEventListener(
"scroll",
updateActiveNav,
{ passive: true }
);

window.addEventListener(
"load",
updateActiveNav
);

/* =========================================================
SMOOTH NAVIGATION
========================================================= */

navLinks.forEach(link => {


link.addEventListener("click", event => {

    const targetId =
        link.getAttribute("href");

    if (
        !targetId ||
        !targetId.startsWith("#")
    ) {
        return;
    }

    const target =
        document.querySelector(targetId);

    if (!target) {
        return;
    }

    event.preventDefault();

    target.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    history.replaceState(
        null,
        "",
        targetId
    );

});


});

/* =========================================================
IMAGE ERROR HANDLING
========================================================= */

document.addEventListener(
"error",
event => {


    const element =
        event.target;

    if (
        element instanceof HTMLImageElement
    ) {

        element.classList.add(
            "image-error"
        );

    }

},
true


);

/* =========================================================
KEYBOARD ACCESSIBILITY
========================================================= */

document.addEventListener(
"keydown",
event => {


    if (
        event.key === "Escape"
    ) {

        document.activeElement?.blur();

    }

}


);

/* =========================================================
PERFORMANCE:
Pause animations when the page is hidden.
========================================================= */

document.addEventListener(
"visibilitychange",
() => {


    if (
        document.hidden
    ) {

        document.body.classList.add(
            "page-hidden"
        );

    } else {

        document.body.classList.remove(
            "page-hidden"
        );

    }

}


);

/* =========================================================
DEV CHECK
========================================================= */

if (window.location.hostname === "localhost") {


console.log(
    `Jesse Enakhe portfolio loaded with ${projects.length} projects.`
);


}
