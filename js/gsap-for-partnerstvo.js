gsap.registerPlugin(ScrollTrigger);

//text animation
let text;

function initializeSplit() {
    text = new SplitType('.partnerstvo-title', { types: "lines" });
    var lineElements = document.querySelectorAll(".line");

    lineElements.forEach(function (lineElement) {
        var maskElement = document.createElement("div");
        maskElement.className = "line-mask";
        lineElement.appendChild(maskElement);

        const tl_to_scroll_1 = gsap.timeline({
            scrollTrigger: {
                trigger: maskElement,
                // markers: true,
                scrub: 1,
                start: "bottom 45%",
                end: "bottom 40%",
            },
        });

        tl_to_scroll_1.to(maskElement, { width: "0%", duration: 1, ease:"power1.inOut"});
    });
}

initializeSplit();

window.addEventListener("resize", function () {
    text.revert();
    initializeSplit();
});



const tl_to_scroll_2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".promotion-to-animate-1",
        // markers: true,
        scrub: 1,
        start: "top 80%",
        end: "top -20%",
    },
});

const tl_to_scroll_2_1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".circle-to-animate-11",
        // markers: true,
        scrub: 1,
        anticipatePin: 1,
        start: "top 80%",
        end: "top -220%",
    },
});

const tl_to_scroll_3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".promotion-to-animate-2",
        // markers: true,
        scrub: 1,
        start: "top 80%",
        end: "top -30%",
    },
    smoothChildTiming: true,
});

const tl_to_scroll_4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".partnerstvo-suptitle",
        //markers: true,
        scrub: 1,
        start: "top 70%",
        end: "top 60%",
    },
    smoothChildTiming: true,
});







tl_to_scroll_2.to(".line-to-animate-gsap-27", {height: "100%", duration: 3}) 
              .fromTo(".text-left-to-animate-gsap-1", {y: "100rem", x: "-100rem"}, {y: 0, x: 0, duration: 2})
              .to(".text-left-to-animate-1", {"--opacity": "1", duration: 2})
              .fromTo(".text-left-to-animate-gsap-2", {y: "100rem", x: "-100rem"}, {y: 0, x: 0, duration: 2})
              .to(".text-left-to-animate-2", {"--opacity": "1", duration: 2})
              .fromTo(".text-left-to-animate-gsap-3", {y: "100rem", x: "-100rem"}, {y: 0, x: 0, duration: 2})
              .to(".text-left-to-animate-3", {"--opacity": "1", duration: 2})


var parentOfCircle = document.querySelector(".promotion-right-to-animate-1");
var parentOfCircleOffsetHeight = parentOfCircle.offsetHeight;
var parentOfCircleOffsetWidth = parentOfCircle.offsetWidth;


tl_to_scroll_2_1.fromTo(".circle-to-animate-11", {x: "100rem"}, {x:0, rotate:"-360deg", duration: 3})
                .to(".circle-to-animate-11", {y: parentOfCircleOffsetHeight + 24, rotate: "360deg",  duration:10})
                .to(".circle-to-animate-11", {x: -parentOfCircleOffsetWidth, rotate: "90deg",  duration:2})
                .to(".circle-line-to-animate-gsap-11", {height: "100%", width: "100%", boxShadow: "0px 0px 10px 2px var(--primary-color), inset 0px 0px 10px 1px var(--primary-color)", duration: 4})
                .to(".circle-to-animate-11", {boxShadow: "0px 0px 0px 0px var(--primary-color), inset 0px 0px 0px -0px var(--primary-color)", duration: 2}, 15)
                .to(".circle-to-animate-11", {y: (parentOfCircleOffsetHeight*2) + 24, rotate: "360deg",  duration:8}, 15)
                .to(".circle-to-animate-11", {x: "-100rem", rotate: "-90deg", duration: 4})


var parentOfCircle = document.querySelector(".promotion-right-to-animate-2");
var parentOfCircleOffsetHeight = parentOfCircle.offsetHeight;
var parentOfCircleOffsetWidth = parentOfCircle.offsetWidth;


tl_to_scroll_3.to(".line-to-animate-gsap-28", {height: "100%", duration: 3}) 
              .fromTo(".text-right-to-animate-gsap-1", {y: "100rem", x: "100rem"}, {y: 0, x: 0, duration: 2})
              .to(".text-right-to-animate-1", {"--opacity": "1", duration: 2})
              .fromTo(".text-right-to-animate-gsap-2", {y: "100rem", x: "100rem"}, {y: 0, x: 0, duration: 2})
              .to(".text-right-to-animate-2", {"--opacity": "1", duration: 2})
              .fromTo(".text-right-to-animate-gsap-3", {y: "100rem", x: "100rem"}, {y: 0, x: 0, duration: 2})
              .to(".text-right-to-animate-3", {"--opacity": "1", duration: 2})


tl_to_scroll_4.fromTo(".partnerstvo-suptitle", { opacity: 0}, {opacity: 1, duration: 2})



//text animation
// let words;

// function initializeSplitWord() {
//     words = new SplitType('.to-word', { types: "lines, words" });
//     var wordElements = document.querySelectorAll(".word");

//     wordElements.forEach(function(){

//         const tl_to_scroll_5 = gsap.timeline({
//             scrollTrigger: {
//                 trigger: ".to-word",

//                 start: "bottom 90%",
//                 end: "bottom -10%",
//             },
//         });

//         tl_to_scroll_5.fromTo(".word", {y:100}, { y:0, duration: 1, stagger: 0.03});
//     });
// }

// initializeSplitWord();

// window.addEventListener("resize", function () {
//     words.revert();
//     initializeSplitWord();
// });
