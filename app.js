const header = document.querySelector(".header");
const bars = document.querySelector(".bars");

const exit = document.getElementById("exit");
// close mobile navigation
exit.addEventListener("click", () => header.classList.remove("mobile"));
// hamburger menu
bars.addEventListener("click", () => header.classList.toggle("mobile"));

document.querySelector("main").addEventListener("click", () => {
  if (header.classList.contains("mobile")) {
    header.classList.remove("mobile");
  }
});

// navigation background changer
window.addEventListener("scroll", () => {
  if (window.pageYOffset >= 20) {
    header.classList.add("light");
  } else {
    header.classList.remove("light");
  }
});

new Glider(document.querySelector(".glider"), {
  slidesToShow: 1,
  slidesToScroll: 1,
  scrollLock: true,
  draggable: false,
  dots: "#resp-dots",
  arrows: {
    prev: ".glider-prev",
    next: ".glider-next",
  },

  responsive: [
    {
      breakpoint: 775,
      settings: {
        slidesToShow: "auto",
        slidesToScroll: "auto",
        itemWidth: 250,
        duration: 0.25,
      },
    },
    {
      breakpoint:1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        itemWidth: 250,
        duration: 0.25,
      }
    },
  ],
});

document.querySelectorAll(".btn").forEach((element) => {
  element.addEventListener("click", () => {
    console.log("clicked");
  });
});


//gsap animations

gsap.from('.col-2', {opacity:0, height:10, duration: 2});
gsap.from('.col-1', {opacity:0, y:200, duration: 2});
gsap.from('.header', {opacity:0, duration: 2, delay: 1});



window.sr = ScrollReveal();


sr.reveal('.animate-left', {
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 300
});

sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 300
});

sr.reveal('.animate-top', {
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 400
});

sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 400
});