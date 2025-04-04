var tl = gsap.timeline({scrollTrigger:{
    trigger: ".second-section",
    start: "20% 100%",
    end: "50% 50%",
    scrub: true,
    // markers: true
}})

tl.to("#cookie", {
    top: "158%",
    left: "0%",
    rotate: "50%"
},'cookie')

tl.to("#chips", {
    width: "10vw",
    top: "125%",
    left: "88%"
},'cookie')

// second seciton
var t2 = gsap.timeline({scrollTrigger:{
    trigger: ".third-section",
    start: "20% 100%",
    end: "50% 50%",
    scrub: true,
    // markers: true
}})

t2.to('#cookie',{
    top: "270%",
    left: "43%",
    width: "13vw",
    rotate: "-50deg"
},"cookism")

t2.from('#cookism',{
    rotate: "0"
},"cookism")
t2.to('#cookism',{
    rotate: "-50deg"
},"cookism")
