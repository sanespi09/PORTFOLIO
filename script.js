const proyectos = [
  {
    id: 1,
    name: "Estudio Terrero Homepage",
    img: "./assets/images/TERRERO-PAGE.jpg",
    description:
      "Fully responsive website that i made for my personal Homestudio",
    tech: ["HTML", "Sass", "Javascript", "jQuery"],
    url: "https://estudio-terrero.pages.dev",
    github: "https://github.com/sanespi09/ESTUDIO-TERRERO",
  },
  {
    id: 2,
    name: "Anisynth",
    img: "./assets/images/ANISYNTH-PAGE.png",
    description:
      "Visual Sound Sinthetizer, made for a research scholarship where i studied the bonds beetween sound and image, this project really helped me develop a strong JavaScript foundation, facing a lot of challenges with code architecture and design",
    tech: ["HTML", "JavaScript", "Web Audio API", "Canvas", "P5.js"],
    url: "https://anisynth.pages.dev",
    github: "https://github.com/sanespi09/ANISYNTH-UNQ",
  },
  {
    id: 3,
    name: "Caiman Discos Homepage",
    img: "./assets/images/CAIMAN-PAGE.jpg",
    description:
      "Website made for a local record label, showcasing their artists and news. This project was fullstack, i had to implement a back end in NodeJS for small blog capabilities, paired with an admin panel on the front, for easy site updates",
    tech: [
      "HTML",
      "Sass",
      "Javascript",
      "jQuery",
      "NodeJS",
      "Express",
      "MongoDB",
    ],
    url: "https://caimandiscos.pages.dev",
    github: "https://github.com/sanespi09/CAIMAN-BACK",
  },
  {
    id: 4,
    name: "CookMaster",
    img: "./assets/images/COOKMASTER-PAGE.jpg",
    description:
      "User-based, Personal recipe catalogue with ingredient based search capabilities. Made with NextJS",
    tech: ["HTML", "Sass", "NextJS", "CSSModules", "Firebase"],
    url: "https://cookmaster.vercel.app",
    github: "https://github.com/sanespi09/COOK-MASTER",
  },
];

const handPicker = document.createElement("div");
handPicker.innerHTML = "<span class='conocimientos-selector'>👉</span>";

if (window.location.pathname.includes("proyectos")) {
  addProjects(proyectos);
}

const conocimientosItem = document.getElementsByClassName("conocimientos-item");
const proyects = document.getElementsByClassName("proyect");
const form = document.formContacto;
const imgs = document.getElementsByTagName("img");
// console.log(imgs);

// for(let i = 0; i < imgs.length; i++){

//     imgs[i].onloadend = (e) => e.target.style.opacity = 1;

//     if(imgs[i].complete && imgs[i].naturalWidth != 0){
//         imgs[i].style.opacity = 1;
//     }
// }

addListeners();

function addListeners() {
  const navButton = document.getElementsByClassName("navbar-toggler");
  const closeNavButton = document.getElementById("nav-mobile-close");

  navButton[0].addEventListener("click", showNav);
  closeNavButton.addEventListener("click", hideNav);

  // console.log(proyects.length)
  // for(let i = 0; i < conocimientosItem.length; i++){
  //     conocimientosItem[i].addEventListener('pointerenter', showPicker)
  //     //conocimientosItem[i].addEventListener('pointerleave', removePicker)
  // }
  for (let i = 0; i < proyects.length; i++) {
    proyects[i].addEventListener("pointerenter", showProyectAside);
    proyects[i].addEventListener("pointerleave", hideProyectAside);
  }

  form.addEventListener("submit", validateForm);
}

function showPicker(e) {
  console.log("show");
  let target = e.target;
  let firstChild = target.firstChild;
  target.insertBefore(handPicker, firstChild);
}

/*function removePicker (e){
    let target = e.target
    let child = target.firstChild
    target.removeChild(child)
}*/

function showProyectAside(e) {
  console.log("listo");
  let target = e.target;
  let childs = target.children;
  console.log(childs);

  for (let i = 0; i < childs.length; i++) {
    if (childs[i].classList.contains("proyect-aside")) {
      console.log("listo");
      childs[i].classList.remove("out");
      childs[i].classList.add("in");
    }
  }
}

function showNav(e) {
  const navMenu = document.getElementById("navMobileMenu");

  navMenu.classList.add("active");
}

function hideNav(e) {
  const navMenu = document.getElementById("navMobileMenu");

  navMenu.classList.remove("active");
  navMenu.classList.add("closing");

  navMenu.addEventListener("animationend", () => {
    navMenu.classList.remove("closing");
  });
}

function hideProyectAside(e) {
  console.log("listo");
  let target = e.target;
  let childs = target.children;
  console.log(childs);

  for (let i = 0; i < childs.length; i++) {
    if (childs[i].classList.contains("proyect-aside")) {
      console.log("listo");
      childs[i].classList.remove("in");
      childs[i].classList.add("out");
    }
  }
}

function validateForm(e) {
  if (!form.checkValidity()) {
    e.preventDefault();
    e.stopPropagation();
  }

  form.classList.add("was-validated");
}

function addProjects(pro) {
  const container = document.getElementById("project-container");

  pro.forEach((pro) => {
    const project = document.createElement("div");
    project.className = "project-container";

    let html = projectItem(pro);
    project.innerHTML = html;

    container.appendChild(project);
  });
}

function projectItem(item) {
  let techComposition = ``;

  item.tech.forEach((tech) => {
    let html = `<div class="tech-item">${tech}</div>`;
    techComposition += html;
  });

  return `<div class="project-img">
            <img src=${item.img} alt='project screenshot' />
        </div>
        <div class="project-title"><h3>${item.name}</h3></div>
        <div class="project-tech">${techComposition}</div>
        <div class="project-description">
            <p>${item.description}</p>
        </div>
        <div class="proyect-links">
            <a href=${item.github}><div class="proyect-btn_github">GITHUB</div></a>
            <a href=${item.url}><div class="proyect-btn_url">VISIT</div></a>
        </div>`;
}
