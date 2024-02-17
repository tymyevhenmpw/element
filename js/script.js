var _width_ = window.innerWidth;
var prise2 = document.querySelector('.prise-2');









function onSuccess(googleUser) {
  console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
}
function onFailure(error) {
  console.log(error);
}
function renderButton() {
  gapi.signin2.render('my-signin2', {
    'scope': 'profile email',
    'width': 320,
    'height': 50,
    'longtitle': true,
    'theme': 'dark',
    'onsuccess': onSuccess,
    'onfailure': onFailure,
    
  });
}

//scroll animation

const animItems = document.querySelectorAll('.element-animation');

if (animItems.length>0){
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll(params){
    for(let index =0; index<animItems.length; index++){
      const animItem = animItems[index];
      const animItemHeight =animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight> window.innerHeight){
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
        animItem.classList.add('element-show');
      }
    }
  }
  function offset(el){
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return{ top:rect.top + scrollTop, left:rect.left + scrollLeft}
  }
  animOnScroll();
}





//
let burger = document.querySelector('.burger');
let bl = document.querySelectorAll(".bl");
let navUl = document.querySelector('.nav ul');
let nav = document.querySelector('.nav');
let body = document.querySelector('body');
let burgerBtn = document.querySelector('.burger-button');

burger.onclick = function(){
  burgerBtn.classList.toggle('active');
  for(let val of bl)
    val.classList.toggle('blur');
  navUl.classList.toggle('active');
  nav.classList.toggle('active');
  body.classList.toggle('active');
}



function adjustCenterElement(elementId, offsetDirection) {
  var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  var halfWindowWidth = windowWidth / 2;
  var centeredElement = document.getElementById(elementId);
  var elementWidth = centeredElement.offsetWidth;

  if (offsetDirection === 'right') {
    centeredElement.style.left = halfWindowWidth + elementWidth + 'px';
  } else if (offsetDirection === 'left') {
    centeredElement.style.left = -halfWindowWidth - elementWidth + 'px';
  }
}

adjustCenterElement('circle-to-animate-gsap-3', 'right');
adjustCenterElement('circle-to-animate-gsap-2', 'left');

window.addEventListener('resize', function () {
  adjustCenterElement('circle-to-animate-gsap-3', 'right');
  adjustCenterElement('circle-to-animate-gsap-2', 'left');
});




function adjustCenterCircle(circleId, offset) {
  var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  var halfWindowWidth = windowWidth / 2;
  var centeredCircle = document.getElementById(circleId);
  var circleWidth = (centeredCircle.offsetWidth) / 3;
  var circleInitialWidth = centeredCircle.offsetWidth
  
  if (offset === 'right') {
    centeredCircle.style.left = -halfWindowWidth + circleWidth - circleInitialWidth + 'px';
  } else {
    centeredCircle.style.left = halfWindowWidth - circleWidth + circleInitialWidth + 'px';
  }
}

const circlesToAdjust = [
  { id: 'circle-to-animate-gsap-4', offset: 'left' },
  { id: 'circle-to-animate-gsap-5', offset: 'left' },
  { id: 'circle-to-animate-gsap-6', offset: 'left' },
  { id: 'circle-to-animate-gsap-7', offset: 'right' },
  { id: 'circle-to-animate-gsap-8', offset: 'right' },
  { id: 'circle-to-animate-gsap-9', offset: 'right' },
];

circlesToAdjust.forEach(circle => {
  adjustCenterCircle(circle.id, circle.offset);
  window.addEventListener('resize', () => adjustCenterCircle(circle.id, circle.offset));
});

const parentElementWidthCache = {};

function debounce(callback, delay) {
  let timeoutId;
  return function () {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(callback, delay);
  };
}

function adjustCenteredLine(lineId, offset) {
  var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  var halfWindowWidth = windowWidth / 2;
  var centeredLine = document.getElementById(lineId);
  var parentElement = centeredLine.parentElement;
  var parentElementWidth;

  if (parentElementWidthCache[parentElement.id]) {
    parentElementWidth = parentElementWidthCache[parentElement.id];
  } else {
    parentElementWidth = parentElement.offsetWidth;
    parentElementWidthCache[parentElement.id] = parentElementWidth;
  }

  if (offset === 'right') {
    centeredLine.style.left = halfWindowWidth - parentElementWidth +100 + 'px';
  } else {
    centeredLine.style.left = -halfWindowWidth + parentElementWidth -100 + 'px';
  }
}

const lineToAdjust = [
  { id: 'line-to-animate-gsap-8', offset: 'left' },
  { id: 'line-to-animate-gsap-9', offset: 'left' },
  { id: 'line-to-animate-gsap-10', offset: 'left' },
  { id: 'line-to-animate-gsap-11', offset: 'left' },
  { id: 'line-to-animate-gsap-12', offset: 'left' },
  { id: 'line-to-animate-gsap-13', offset: 'left' },
  { id: 'line-to-animate-gsap-14', offset: 'left' },
  { id: 'line-to-animate-gsap-15', offset: 'left' },
  { id: 'line-to-animate-gsap-16', offset: 'left' },
  { id: 'line-to-animate-gsap-17', offset: 'right' },
  { id: 'line-to-animate-gsap-18', offset: 'right' },
  { id: 'line-to-animate-gsap-19', offset: 'right' },
  { id: 'line-to-animate-gsap-20', offset: 'right' },
  { id: 'line-to-animate-gsap-21', offset: 'right' },
  { id: 'line-to-animate-gsap-22', offset: 'right' },
  { id: 'line-to-animate-gsap-23', offset: 'right' },
  { id: 'line-to-animate-gsap-24', offset: 'right' },
  { id: 'line-to-animate-gsap-25', offset: 'right' },
];

lineToAdjust.forEach(line => adjustCenteredLine(line.id, line.offset));

const handleResize = debounce(() => {
  lineToAdjust.forEach(line => adjustCenteredLine(line.id, line.offset));
}, 250);



const b = document.querySelector('.concept-title');
window.addEventListener('resize',function(){
  if(this.window.innerWidth<430){
    b.innerHTML = 'Концепція <br>проєкту';
  }else{
    b.innerHTML = '-Концепція проєкту-';
  }
} ,handleResize);







document.querySelectorAll('.road-circle-to-animate-gsap-1').forEach(circle => {
  circle.style.left = 'calc(var(--size) * -200px)';
});


const probel = document.querySelectorAll('.left-list-item div');

const i = window.innerWidth;

console.log(window.innerWidth,window.innerHeight);

