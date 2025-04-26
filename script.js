var tl1=gsap.timeline();

tl1.from(".logo",{
    duration:1,
    y:-100,
    opacity:0,
    ease:"power2.out"
})

tl1.from(".nav-links li",{
    duration:1,
    y:-100,
    opacity:0,
    ease:"power2.out",
    stagger:0.3
},"same")

tl1.from(".hero-text",{
    duration:1,
    x:-100,
    opacity:0,
},"same")

var tl2=gsap.timeline({
    scrollTrigger:{
        trigger:".categories",
        start:"top 80%",
        end:"top 30%",
        scrub:3,
    }
})


tl2.from(".categories .card",{
    duration:1,
    y:-100,
    opacity:0,
    ease:"power2.out",
    stagger:0.3
})
