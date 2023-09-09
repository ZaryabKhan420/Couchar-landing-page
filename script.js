const header = document.querySelector('.header');
const menu = document.querySelector('.mobile-nav');

// Toggle Menu

const mobile_menu = () => {
    header.classList.toggle('active');
}
menu.addEventListener('click',()=>mobile_menu());

var tl = gsap.timeline();

tl.from(".line",{
    opacity:0,
    delay:0.5
})

tl.from(".header-left > h1 , .header-left > .navbar > .navbar-list > li  , .header-btns > a , .header-btns > #logout-icon , .mobile-nav",{
    y:-80,
    opacity:0,
    duration:0.8,
    stagger:0.3,
})

tl.from(".container-left > h1",{
    x:-50,
    opacity:0,
    duration:0.8,
})

tl.from(".line2",{
    opacity:0,
    duration:0.3,
})

tl.from(".solution-row > div > h2",{
    y:20,
    opacity:0,
    duration:0.6,
    stagger:0.3
})

tl.from(".container-right > img",{
    scale:0.5,
    opacity:0,
    duration:0.5,
    //     scrollTrigger:{
    //     trigger:"container-right > img",
    //     scroller:"body",
    //     scrub:2
    // }
})

gsap.from(".page2-row > .box",{
    scale:0,
    opacity:0,
    duration:1.5,
    scrollTrigger:{
        trigger:".page2-row > .box",
        scroller:"body",
        srub:5,
    },
    stagger:0.5,
})


