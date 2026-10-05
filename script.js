
gsap.registerPlugin(ScrollTrigger);


// PAGE-LOAD ANIMATION 
const introTimeline = gsap.timeline({
  delay: 0.3,
  defaults: { ease: "power3.out" }
});

introTimeline
  .from(".hero__subtitle", { y: 20, opacity: 0, duration: 0.8 })
  .from(".hero__word", { y: 70, opacity: 0, duration: 1, stagger: 0.2 }, "-=0.4")
  .from(".stat", { y: 30, opacity: 0, duration: 0.8, stagger: 0.15 }, "-=0.5")
 
  .from(".orb", { opacity: 0, duration: 1.2 }, "-=1")
  .from(".hero__scroll-hint", { opacity: 0, duration: 0.8 }, "-=0.2");


//SCROLL-DRIVEN HERO 
const scrollTimeline = gsap.timeline({
  defaults: { ease: "none" },   
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",           
    end: "+=250%",              
    pin: true,                  
    scrub: 1,                   
    anticipatePin: 1,           
                   
  }
});

scrollTimeline
  
  .fromTo(
    ".orb",
    { x: "-45vw", rotation: -90, scale: 0.8 },
    { x: "65vw", rotation: 450, scale: 1.15, duration: 1 },
    0 
  )

  
  .to(".hero__scene--one", { opacity: 0, y: -60, duration: 0.3 }, 0.15)

 
  .fromTo(
    ".hero__scene--two",
    { opacity: 0, y: 60 },
    { opacity: 1, y: 0, duration: 0.4 },
    0.5
  );

