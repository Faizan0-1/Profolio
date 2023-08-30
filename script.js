var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
  });


   var swiper = new Swiper(".mySwiper2", {
      slidesPerView: 3,
      spaceBetween: 30,
      freeMode: true,
      pagination: {
        el: ".swiper-pagination2",
        clickable: true,
      },
      autoplay: {
        delay: 1000,
      },
    });

document.addEventListener("DOMContentLoaded", function () {
  const elementsToAnimate = document.querySelectorAll(".animated");

  function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

  function animateElement(element) {
    gsap.to(element, {
      duration: getRandomNumber(0.5, 1.5), 
      x: getRandomNumber(-10, 10), 
      y: getRandomNumber(-10, 10), 
      rotation: getRandomNumber(-10, 10), 
      ease: "power1.out",
      onComplete: () => animateElement(element), 
    });
  }

  gsap.registerPlugin(ScrollTrigger);

  elementsToAnimate.forEach((element) => {
    animateElement(element);
  });
});

const navLinks = document.querySelectorAll("nav ul li a");

gsap.from(navLinks, {
  opacity: 0,
  y: -20,
  stagger: 0.1,
  duration: 1.8,
  ease: "power2.out",
});

const animateDivs = document.querySelectorAll(".animate-div");

animateDivs.forEach((div) => {
  gsap.fromTo(
    div,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: div,
        start: "top 90%", 
      },
    }
  );
});


