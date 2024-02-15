
gsap.registerPlugin(ScrollTrigger);



const tl_to_display_1 = gsap.timeline();

let startTlToScroll1 = "top 99%";

const tl_to_scroll_1 = gsap.timeline({scrollTrigger:{
    trigger: ".concept-title",
    // markers: true,
    start: startTlToScroll1,
    end: "top 20%",
    scrub: 1,
  }

})


const tl_to_scroll_2 =gsap.timeline({scrollTrigger: {
  trigger: ".concept-suptitle",
  // markers: true,
  scrub: 1,
  start: ("bottom 70%"),
  end: ("bottom 5%"),  
}
})


const tl_to_scroll_3 =gsap.timeline({scrollTrigger: {
  trigger: ".enumerate2-to-gsap-1",
  //markers: true,
  scrub: 1,
  start: ("bottom 80%"),
  end: ("bottom 50%"),  
  toggleActions: "play restart none none",
}
})


const tl_to_scroll_4 =gsap.timeline({scrollTrigger: {
  trigger: ".enumerate2-to-gsap-1",
  // markers: true,
  scrub: 1,
  start: ("bottom 75%"),
  end: ("bottom 10%"),  
  toggleActions: "play restart none none",
}
})

const tl_to_scroll_5 =gsap.timeline({scrollTrigger: {
  trigger: ".enumerate2-to-gsap-2",
  // markers: true,
  scrub: 1,
  start: ("top 90%"),
  end: ("bottom 40%"),  
  toggleActions: "play reverse none none",
}
})

const tl_to_scroll_6 =gsap.timeline({scrollTrigger: {
  trigger: ".enumerate2-to-gsap-2",
  // markers: true,
  scrub: 1,
  start: ("top 50%"),
  end: ("top 0%"),  
  toggleActions: "play restart none none",
}
})

const tl_to_scroll_7 =gsap.timeline({scrollTrigger: {
  trigger: ".road-circle-to-animate-gsap-2",
  // markers: true,
  scrub: 1,
  start: ("center 50%"),
  end: ("top 0%"),  
  toggleActions: "play restart none none",
}
})

const tl_to_scroll_8 =gsap.timeline({scrollTrigger: {
  trigger: ".lines-to-flang",
  //markers: true,
  scrub: 1,
  start: ("center 90%"),
  end: ("top 40%"),  
  toggleActions: "play restart none none",
}
})

const tl_to_scroll_9 =gsap.timeline({scrollTrigger: {
  trigger: ".waves-to-animate-1",
  //markers: true,
  scrub: 1,
  start: ("top 80%"),
  end: ("top -20%"),  
  toggleActions: "play restart none none",
}
})

const tl_to_scroll_10 =gsap.timeline({scrollTrigger: {
  trigger: ".circle-to-animate-gsap-4",
  // markers: true,
  scrub: 1,
  start: ("center 60%"),
  end: ("bottom 30%"),  
  toggleActions: "play restart none none",
}
})

const tl_to_scroll_11 =gsap.timeline({scrollTrigger: {
  trigger: ".circle-to-animate-gsap-10",
  //markers: true,
  scrub: 0.5,
  start: ("center 60%"),
  end: ("bottom 1%"),  
  toggleActions: "play restart none none",
}
})

const tl_to_scroll_12 =gsap.timeline({scrollTrigger: {
  trigger: ".circle-to-animate-gsap-9",
  // markers: true,
  scrub: 0.5,
  start: ("center 70%"),
  end: ("bottom 1%"),  
  toggleActions: "play restart none none",
}
})

let pinner = true;
let wayToPlayGsap = true;

let removeElement = document.querySelector(".fire-to-animate-gsap-1");
let removeElement2 = document.querySelector(".fire-to-animate-gsap-2");
let priseElement = document.querySelector(".prise-to-animate-gsap-1")

let triggerTlToScroll13 = ".fire-to-animate-gsap-1";
let startTlToScroll13 = "bottom 70%";
let endTlToScroll13 = "bottom -500%";

const widthToDisplay = window.innerWidth;

widthToDisplay <= 1300 ? (pinner = false, wayToPlayGsap = false, removeElement.style.display = "none", removeElement2.style.display = "flex", priseElement.style.marginTop = "-200px", triggerTlToScroll13 = ".fire-to-animate-gsap-2", startTlToScroll13 = "bottom 90%", endTlToScroll13 = "bottom 40%") : (pinner = true, wayToPlayGsap = true, removeElement.style.display = "flex", removeElement2.style.display = "none", priseElement.style.marginTop = "0px", triggerTlToScroll13 = ".fire-to-animate-gsap-1", startTlToScroll13 = "bottom 70%", endTlToScroll13 = "bottom -500%");

let tl_to_scroll_13 =gsap.timeline({scrollTrigger: {
  trigger: triggerTlToScroll13,
  // markers: true,
  pin: pinner,
  scrub: 0.5,
  start: startTlToScroll13,
  end: endTlToScroll13,  
  toggleActions: "play restart none none",
}
})









const customCubicBezier = gsap.parseEase("cubic-bezier(.22,.68,0,1.71)");


if (widthToDisplay  < 1079 && widthToDisplay > 700){
  tl_to_display_1.fromTo(".right-to-gsap-1", {x: "100rem"}, {x: 0, duration: .5, delay: 0.3, ease: "power3.in",})
  .fromTo(".border-left", {opacity: 0}, {opacity: 1, duration: 0})
  .fromTo(".left-list-item-to-gsap-1", {y: "50rem"}, {y: 0, duration: .5, ease: "power3.in",})
  .fromTo(".left-list-item-to-gsap-2", {y: "50rem"}, {y: 0, duration: .5, ease: "power3.in",})
  .fromTo(".left-list-item-to-gsap-3", {y: "50rem"}, {y: 0, duration: .5, ease: "power3.in",});
  console.log("True", widthToDisplay);
}else {
  tl_to_display_1.fromTo(".right-to-gsap-1", {x: "100rem"}, {x: 0, duration: .5, delay: 0.3, ease: "power3.in",})
  .fromTo(".border-left", {opacity: 0}, {opacity: 1, duration: 0})
  .fromTo(".left-list-item-to-gsap-1", {x: "-100rem"}, {x: 0, duration: .5, ease: "power3.in",})
  .fromTo(".left-list-item-to-gsap-2",{x: "-100rem"},  {x: 0, duration: .5, ease: "power3.in",})
  .fromTo(".left-list-item-to-gsap-3", {x: "-100rem"},  {x: 0, duration: .5, ease: "power3.in",})
  tl_to_scroll_1.to(".left-list-item-to-gsap-1", {y: -1000, duration: .5,  delay: .01, ease: "power3.inOut"})
  .to(".left-list-item-to-gsap-2", {y: -1000, duration: .5, ease: "power3.inOut"})
  .to(".left-list-item-to-gsap-3", {y: -1000, duration: .5, ease: "power3.inOut"})  
  .to(".border-left", {opacity: 0, duration: .3, ease: "power3.inOut"})
  .fromTo(".right-to-gsap-1", {x:0}, {x: "100rem", duration: .8, ease: "power3.inOut"})
}





gsap.to(".concept-title", {
    transform: "scaleX(1)",
    scale: 1.3,
    borderBottom: "1px solid #d30000",
    textShadow: "rgba(161, 3, 6, 0.74) 2px 2px 3px;",
    boxShadow: "0px 15px 10px -15px #d30000",
    duration: .3,
    scrollTrigger: {
      trigger: ".concept-title",
      start: ("center 60%"),
      end: ("bottom 30%"),  
      scrub: 1,
    }

})

tl_to_scroll_2.to(".line-to-animate-gsap-1", {height: "100%", duration: .4, delay: .01, ease: "power3.inOut"})
              .to(".circle-to-animate-gsap-1", {height: "90px", width: "90px", marginTop: "-45px", duration: .4, ease: "power3.inOut"})
              .to(".circle-to-animate-gsap-1", {backgroundSize: "100% 100%", duration: .4, ease: "power3.inOut"})
              .to(".circle-to-animate-gsap-1", {boxShadow: "0px 0px 1000px 100px #d30000", duration: .7, ease: "power3.inOut"})
              .fromTo(".concept-part-to-center-gsap-1", {x: "-100rem"}, {x: 0,   duration: .4, delay: .1})


tl_to_scroll_3.to(".enumerate2-to-gsap-1", {textShadow:  "rgb(161, 3, 5) 2px 5px 3px", fontSize: "195%", boxShadow: "inset 15px 0 15px -5px rgb(161, 3, 5)", padding: "10px", borderRadius: "50%", duration: .3, delay: .01, ease: "power3.inOut"})
              .to(".line-to-animate-gsap-2", {height: "100%", duration: .4, ease: "power3.inOut"})

tl_to_scroll_4.fromTo(".concept-part-to-right-gsap-1", {x: "100rem"}, {x: 0,   duration: .4, ease: "power3.inOut"})
              .to(".enumerate2-to-gsap-2", {textShadow:  "rgb(161, 3, 5) 2px 5px 3px", fontSize: "195%", boxShadow: "inset 15px 0 15px -5px rgb(161, 3, 5)", padding: "10px", borderRadius: "50%", duration: .3, ease: "power3.inOut"}, 0)


var centeredElement1 = document.getElementById("circle-to-animate-gsap-2");
var elementWidth1 = centeredElement1.offsetWidth;
var centeredElement2 = document.getElementById("circle-to-animate-gsap-3");
var elementWidth2 = centeredElement2.offsetWidth;


tl_to_scroll_5.to(".circle-to-animate-gsap-2", {x: elementWidth1, duration: 1, delay: 1,})
              .to(".circle-to-animate-gsap-3", {x: -elementWidth1, duration: 1, delay: 1}, 0)
              .to(".circle-to-animate-gsap-2", {boxShadow: "0px 0px 1000px 100px #d30000,  inset 0px 0px 100px -20px #d30000", duration: 1, ease: "power3.inOut"})
              .to(".circle-to-animate-gsap-3", {boxShadow: "0px 0px 1000px 100px #d30000,  inset 0px 0px 100px -20px #d30000", duration: 1, delay:1, ease: "power3.inOut"}, 1)


tl_to_scroll_6.to(".road-circle-to-animate-gsap-1", {opacity: 1, duration: .4, delay: .01, ease: "power3.inOut"})
              .to(".line-to-animate-gsap-3", {height: "calc(var(--size)*150px", duration: .4, ease: "power3.inOut"})
              .to(".road-circle-to-animate-gsap-2", {opacity: 1, duration: .4, ease: "power3.inOut"})

  
tl_to_scroll_7.to(".line-to-animate-gsap-4", {height: "calc(var(--size)*150px", duration: .4, delay: .01, ease: "power3.inOut"})
              .to(".road-circle-to-animate-gsap-3", {opacity: 1, duration: .4, ease: "power3.inOut"})
              .to(".road-circle-to-animate-gsap-3", {backgroundSize: "100% 100%", boxShadow: "0px 0px 150px 50px #d30000", duration: .7, ease: "power3.inOut"})


tl_to_scroll_8.fromTo(".line-to-animate-gsap-5",{x:"-100rem"}, {x: 0, duration: 1, delay: .01, ease: "power2.inOut"})
              .fromTo(".line-to-animate-gsap-6", {x:"100rem"},{x: 0, duration: 1, ease: "power2.inOut"}, 0)
              .to(".enumerate2-to-gsap-3", {textShadow:  "rgb(161, 3, 5) 2px 5px 3px", fontSize: "195%", boxShadow: "inset 15px 0 15px -5px rgb(161, 3, 5)", padding: "10px", borderRadius: "50%", duration: .3, ease: "power2.inOut"}, 0)
              .to(".concept-part-to-center-to-semi-final-gsap-1", {y: -800, duration: .3, ease: "power2.inOut"}, 0)


const circleXAnimationParams = { duration: 3};

tl_to_scroll_9.to(".circle-to-animate-gsap-4", { x: -500, ...circleXAnimationParams })
              .to(".circle-to-animate-gsap-7", { x: 500, ...circleXAnimationParams }, 0)
              .to(".circle-to-animate-gsap-5", { x: -500, ...circleXAnimationParams }, 1)
              .to(".circle-to-animate-gsap-8", { x: 500, ...circleXAnimationParams }, 1)
              .to(".circle-to-animate-gsap-6", { x: -500, ...circleXAnimationParams }, 2)
              .to(".circle-to-animate-gsap-9", { x: 500, ...circleXAnimationParams }, 2);

  
const circleAnimationParams = { duration: 3};

tl_to_scroll_10.to(".circle-to-animate-gsap-4", { rotation: -60, ...circleAnimationParams })
               .to(".circle-to-animate-gsap-7", { rotation: 60, ...circleAnimationParams }, 0)
               .to(".circle-to-animate-gsap-5", { rotation: -60, ...circleAnimationParams }, 1)
               .to(".circle-to-animate-gsap-8", { rotation: 60, ...circleAnimationParams }, 1)
               .to(".circle-to-animate-gsap-6", { rotation: -60, ...circleAnimationParams }, 2)
               .to(".circle-to-animate-gsap-9", { rotation: 60, ...circleAnimationParams }, 2);


tl_to_scroll_11.to(".circle-to-animate-gsap-10", {opacity: 1, duration: 1, delay: .01, ease: "power2.inOut"})
               .to(".line-to-animate-gsap-7", {keyframes: [{ height: 0, duration: 1 },{ height: 700, duration: 8 },]})
               .to(".circle-to-animate-gsap-10", {keyframes: [{ scale: 1, duration: 1 },{ scale: 2, top: 23, duration: 8 },], ease: "power2.inOut"}, 0)


const trophyAnimationParams = { scale: 1.2, duration: 5, ease: "power2.inOut" };


tl_to_scroll_12.to(".trophy-to-animate-gsap-1", { y: -1000, ...trophyAnimationParams, delay: 0.01 })
               .to(".trophy-to-animate-gsap-2", { y: -800, ...trophyAnimationParams }, 0)
               .to(".trophy-to-animate-gsap-3", { y: -700, ...trophyAnimationParams }, 0)
               .to(".trophy-to-animate-gsap-4", { y: -900, ...trophyAnimationParams }, 0)
               .to(".trophy-to-animate-gsap-5", { y: -1100, ...trophyAnimationParams }, 0);

      
var animations = gsap.utils.toArray('.a, .a-1, .a-2, .a-3, .b, .b-1, .b-2, .b-3, .b-4');
function startAnimations() {
  animations.forEach(function (animation) {
    gsap.to(animation, {
      scrollTrigger: {
        trigger: animation,
        start: 'top 90%', 
        onEnter: function () {
          animation.style.animationPlayState = 'running';
        },
        onLeaveBack: function () {
          animation.style.animationPlayState = 'paused';
          animation.style.animation = 'none'; // Clear the animation
          void animation.offsetWidth; // Trigger reflow
          animation.style.animation = null; // Reset the animation
        },
        onEnterBack: function () {
          animation.style.animationPlayState = 'running';
        },
      },
    });
  });
}
// Call the function when the page is loaded
document.addEventListener('DOMContentLoaded', startAnimations);

let barsLeftOffSet = "0%";
let barsRightOffSet = "0%";
function changeBarsOffset(){
  if (widthToDisplay>1550){
    barsLeftOffSet = 350;
    barsRightOffSet = -450;
  } else if(widthToDisplay>1350){
    barsLeftOffSet = 150;
    barsRightOffSet = -250;
    console.log("yes");
  }else if(widthToDisplay>1080){
    barsLeftOffSet = 50;
    barsRightOffSet = -150;
  }
}




window.addEventListener('resize', changeBarsOffset());

if (wayToPlayGsap){
  tl_to_scroll_13.fromTo(".line-to-animate-8", {x:-500, y:200}, {x: 0, y:0, duration: 2}, 0)
                .fromTo(".line-to-animate-16", {x:-500, y:-200}, {x: 0, y:0, duration: 2}, 0)
                .fromTo(".line-to-animate-9", {x:-500, y:200}, {x: 0, y:0, duration: 2}, 1)
                .fromTo(".line-to-animate-15", {x:-500, y:-200}, {x: 0, y:0, duration: 2}, 1)
                .fromTo(".line-to-animate-10", {x:-500, y:200}, {x: 0, y:0, duration: 2}, 2)
                .fromTo(".line-to-animate-14", {x:-500, y:-200}, {x: 0, y:0, duration: 2}, 2)
                .fromTo(".line-to-animate-11", {x:-500, y:200}, {x: 0, y:0, duration: 2}, 3)
                .fromTo(".line-to-animate-13", {x:-500, y:-200}, {x: 0, y:0, duration: 2}, 3)
                .fromTo(".line-to-animate-12", {x:-500}, {x:0, duration: 4}, 4)
                .fromTo(".line-to-animate-17", {x:500, y:200}, {x: 0, y:0, duration: 2}, 0)
                .fromTo(".line-to-animate-25", {x:500, y:-200}, {x: 0, y:0, duration: 2}, 0)
                .fromTo(".line-to-animate-18", {x:500, y:200}, {x: 0, y:0, duration: 2}, 1)
                .fromTo(".line-to-animate-24", {x:500, y:-200}, {x: 0, y:0, duration: 2}, 1)
                .fromTo(".line-to-animate-19", {x:500, y:200}, {x: 0, y:0, duration: 2}, 2)
                .fromTo(".line-to-animate-23", {x:500, y:-200}, {x: 0, y:0, duration: 2}, 2)
                .fromTo(".line-to-animate-20", {x:500, y:200}, {x: 0, y:0, duration: 2}, 3)
                .fromTo(".line-to-animate-22", {x:500, y:-200}, {x: 0, y:0, duration: 2}, 3)
                .fromTo(".line-to-animate-21", {x:500}, {x:0, duration: 4}, 4)
                .to(".enumerate2-to-gsap-4", {textShadow:  "rgb(161, 3, 5) 2px 5px 3px", fontSize: "120%", boxShadow: "inset 15px 0 15px -5px rgb(161, 3, 5)", padding: "10px", borderRadius: "50%", duration: .1, ease: "power2.inOut"}, 5)
                .fromTo(".concept-part-to-final-gsap-1", {y: 600}, {y:0, duration: 2}, 6)
                .fromTo(".bars-to-animate-1", {rotate: 0}, {rotate: 90, duration: 3}, 7)
                .to(".bars-to-animate-left-1", {x: barsLeftOffSet, duration: 2}, 9)
                .to(".bars-to-animate-right-1", {x: barsRightOffSet, duration: 2}, 9)
                .to(".line-to-animate-gsap-12", {width: "60%", duration: 2}, 10)
                .to(".line-to-animate-gsap-21", {width: "60%", duration: 2}, 10)
                .to(".bars-to-animate-1", {scale: 3, duration: 4}, 11)
                .to(".fire", {opacity: 1, duration: 2}, 13)
                .fromTo(".prise-to-animate-gsap-1", {y:500}, {y: 0, duration: 2}, 15)
                .to(".bars-to-animate-right-1", {display: "none", duration: 1}, 15)
                .to(".bars-to-animate-left-1", {display: "none", duration: 1}, 15)
}else {
  tl_to_scroll_13.to(".enumerate2-to-gsap-4", {textShadow:  "rgb(161, 3, 5) 2px 5px 3px", fontSize: "120%", boxShadow: "inset 15px 0 15px -5px rgb(161, 3, 5)", padding: "10px", borderRadius: "50%", duration: .1, ease: "power2.inOut"})
                 .fromTo(".concept-part-to-final-gsap-1", {y: 600},{y: 0, duration: 2})
                 .fromTo(".prise-to-animate-gsap-1", {y: 100}, {y: 0, duration: 2})
}

gsap.to(".text-to-animate-1", {
    duration: 5,
    ease: "none",
    x: "+=500",
    modifiers: {
    x: gsap.utils.unitize(x => parseFloat(x) % 500)},
    repeat: -1       
});
