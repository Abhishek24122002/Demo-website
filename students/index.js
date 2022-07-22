/*------------------------------
Register plugins
------------------------------*/
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

/*------------------------------
Init ScrollSmoother
------------------------------*/
const scrollerSmoother = ScrollSmoother.create({
  content: "#content",
  wrapper: "#wrapper",
  smooth: 1,
  effects: false,
  normalizeScroll: true
});

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".accordions",
    pin: true,
    start: "top top",
    end: "bottom top",
    scrub: 1,
    ease: "linear"
  }
});

tl.to(".accordion .text", {
  height: 0,
  paddingBottom: 0,
  opacity: 0,
  stagger: 0.5
});
tl.to(
  ".accordion",
  {
    marginBottom: 1,
    stagger: 0.5
  },
  "<"
);
