gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".bottom").forEach(element => {
gsap.to(element, { 
    trigger:element,
    duration:0,
    y:200,
    opacity:0
    });
});


gsap.utils.toArray(".bottom").forEach(element => {
gsap.to(element, {
    scrollTrigger: {
        trigger: element,
        start: "top 100%",
        end: "bottom top",
        toggleActions: "restart"
    },
    y:0,
    duration:1,
    opacity:1
    });
});

gsap.utils.toArray(".left").forEach(element => {
gsap.to(element, { 
    trigger:element,
    duration:0,
    x:-100,
    opacity:0
    });
});
    
    
gsap.utils.toArray(".left").forEach(element => {
gsap.to(element, {
    scrollTrigger: {
        trigger: element,
        start: "top 100%",
        end: "bottom top",
        toggleActions: "restart"
    },
    x:0,
    duration:1,
    opacity:1
    });
});

    
gsap.utils.toArray(".right").forEach(element => {
gsap.to(element, { 
    trigger:element,
    duration:0,
    x:100,
    opacity:0
    });
});
               
gsap.utils.toArray(".right").forEach(element => {
gsap.to(element, {
    scrollTrigger: {
        trigger: element,
        start: "top 100%",
        end: "bottom top",
        toggleActions: "restart"
        },
    x:0,
    duration:1,
    opacity:1
    });
});
        
gsap.utils.toArray(".fade").forEach(element => {
gsap.to(element, {
    scrollTrigger: {
        trigger: element,
        start: "top 100%",
        end: "bottom top",
        toggleActions: "restart"
        },
    duration:1,
    opacity:1
    });
});


