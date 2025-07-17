gsap.from("header", {
  y: -100,
  duration: 1,
  ease: "power3.out",
  opacity: 0,
});

const button = document.querySelector(".cta-button");

button.addEventListener("mouseenter", () => {
  gsap.to(button, {
    scale: 1.1,
    duration: 0.3,
    ease: "power1.inOut",
    repeat: 1,
    yoyo: true,
  });
});

gsap.utils.toArray("main section").forEach((section) => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out",
  });
});
