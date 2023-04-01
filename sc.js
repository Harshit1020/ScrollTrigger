gsap.to("#box",{
    
    scrollTrigger:{
        trigger:"#second",
        start:"top 50%",
        end :"20% 20%",
        scrub:4,
        markers:true,

    },
    
    rotate:"260deg",
    ease: Expo.easeInOut,
    duration:3


});