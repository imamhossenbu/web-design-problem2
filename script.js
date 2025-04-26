gsap.registerPlugin(ScrollTrigger);

// Animate Category Cards
gsap.from(".card", {
  y: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#categories",
    start: "top 80%",
  },
});

// Animate How It Works Boxes
gsap.from(".box", {
  y: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
  scrollTrigger: {
    trigger: "#how-it-works",
    start: "top 80%",
  },
});
