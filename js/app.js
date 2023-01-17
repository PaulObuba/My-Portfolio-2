// TYPING ANIMATION
var typed = new Typed(".typing", {
  strings: [
    "",
    "Web Designer",
    "Web Developer",
  ],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});

// MAIN SECTION ANIMATIONS
const nav = document.querySelector(".nav");
const navList = nav.querySelectorAll("li");
const totalNavList = navList.length;
const allSection = document.querySelectorAll(".section");
const totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");

  a.addEventListener("click", function () {
    rightSectionTogglerBtn();
    removeBackSection();
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        addBackSection(j)
      }
      navList[j].querySelector("a").classList.remove("active");
    }

    this.classList.add("active");
    showSection(this);
  });
}

// ADD-BACK-SECTION
function addBackSection(num) {
  allSection[num].classList.add("back-section");
}

// REMOBE-BACK-SECTION
function removeBackSection() {
  for (let i = 0; i < totalNavList; i++) {
    allSection[i].classList.remove("back-section");
  }
}

// SHOW-SECTION
function showSection(element) {
  for (let i = 0; i < totalNavList; i++) {
    allSection[i].classList.remove("active");
  }

  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

// HIRE BUTTON

function updateNav(element) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];

    if (
      target ===
      navList[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}

document.querySelector(".hire-me").addEventListener("click", function () {
  showSection(this);
  updateNav(this);
});

// MORE-ABOUT-ME BUTTON

function updateNav2(element) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];

    if (
      target ===
      navList[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}

document.querySelector(".more-about-me").addEventListener("click", function () {
  showSection(this);
  updateNav2(this);
});

// MOBILE NAVIGATION

const navTogglerBtn = document.querySelector(".nav-toggler");
const rightSection = document.querySelector(".right-section");

navTogglerBtn.addEventListener("click", () => {
  rightSectionTogglerBtn();
});

function rightSectionTogglerBtn() {
  rightSection.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
}
