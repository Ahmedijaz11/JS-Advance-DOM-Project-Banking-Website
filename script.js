'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (x) {
  x.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});



/*


// ---------- CRUD OPERATIONS IN DOM --------


//------------1 SELECTION---------



//Different methods to select elements

// 1--to select entire page css , or specfic area like head or body
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');

//2 --selecting all sections (containing section class)
const allSection = document.querySelectorAll('.section');

// 3-- selecting by id  class name and tags 

document.getElementById('section--1');

const allButtons = document.getElementsByTagName('button');

document.getElementsByClassName('btn');



//------------2 CREATE AND INSERT---------



//Creating and inserting elements

const message = document.createElement('div');
message.classList.add('cookie-message');
//message.textContent = 'we use cookies for improved functionality and analytics.';
message.innerHTML = 'we use cookies for improved functionality and analytics <button class="btn btn--close-cookie"> Got it !</button>';

//header.prepend(message);
header.append(message);
//header.before(message);
//header.after(message);
//header.append(message.cloneNode(true));



//------------3 DELETE ELEMENTS---------

document.querySelector('.btn--close-cookie').addEventListener('click', function(){
  message.remove();
});


//----------END CRUD OPERATIONS------


//-------NOW Working with STYLES---------

message.style.backgroundColor = '#37383d';
message.style.width = '120%';
message.style.height = '58px'; 

document.documentElement.style.setProperty('--color-primary', 'orange');


//-------NOW Working with ATTRIBUTES---------

const logo = document.querySelector('.nav__logo');
logo.alt = " Beautiful minimalist logo";


const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));// by using get attribute it will show absolute address

//Data Attributes

console.log(logo.dataset.versionNumber);

//classes

logo.classList.add('c', 'pqr');
logo.classList.remove('c', 'lmn');
logo.classList.toggle('abc');
logo.classList.contains('crt');// not includes

console.log(logo.classList);
//Don't use
logo.className = 'xyz';

*/


//---------- Start main Work-----------
//---------- Smooth scrolling using learn more button in HERO----------


const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

//New Gen Way

btnScrollTo.addEventListener('click', function(e){
  section1.scrollIntoView({behavior:'smooth'});
});
  
/*

//Hard way -- old school way


btnScrollTo.addEventListener('click', function(e){

  const s1cords = section1.getBoundingClientRect();
  window.scrollTo({
    left: s1cords.left + window.pageXOffset,
    top: s1cords.top + window.pageYOffset,
    behavior: 'smooth',

  });

});

*/


//-------Smooth scrolling Nav bar-----------


document.querySelector('.nav__links').addEventListener('click', function(e){

  console.log(e.target);
  if(e.target.classList.contains('nav__link')){

    e.preventDefault();
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior: 'smooth'});
  }

});




//-------Creating Tabs-------------

const Tabs = document.querySelectorAll('.operations__tab');
const TabsContainer = document.querySelector('.operations__tab-container');
const TabsContet = document.querySelectorAll('.operations__content');

 TabsContainer.addEventListener('click', function(e){
const clicked = e.target.closest('.operations__tab');
console.log(clicked);

//guard class
if(!clicked) return;


// removing inactive tab and tab content
Tabs.forEach(t => t.classList.remove('operations__tab--active'));
TabsContet.forEach(content => content.classList.remove('operations__content--active'));

//showing tabs content and activating tab
clicked.classList.add('operations__tab--active');
document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active'); 

 });




//--------------(menu hover effect creation) => Normal approach without optimization----------



//  const  nav = document.querySelector('.nav');
//  nav.addEventListener('mouseover', function(e){
 
//   if(e.target.classList.contains('nav__link')) {

//     const clickLink = e.target;
//     console.log(clickLink);
//     const siblings = clickLink.closest('.nav').querySelectorAll('.nav__link');
//     const logo = clickLink.closest('.nav').querySelector('img');

//       siblings.forEach(el => {
//         if(el == clickLink)
//          {
          
//           el.style.color = 'white';
//           el.style.fontWeight = '700';
//           el.style.backgroundColor = 'black';
//           el.style.padding = '4px';
//           el.style.borderRadius = '6px';        
//         }
//      });
//    }
// });

//  nav.addEventListener('mouseout', function(e){
 
//   if(e.target.classList.contains('nav__link')) {

//     const clickLink = e.target;
//     const siblings = clickLink.closest('.nav').querySelectorAll('.nav__link');
//     const logo = clickLink.closest('.nav').querySelector('img');

//       siblings.forEach(el => {

//         if(el == clickLink){ 
          
//           el.style.color = 'black';
//           el.style.fontWeight = '400';
//           el.style.backgroundColor = '';
//           el.style.padding = '';
//           el.style.borderRadius = '';
//          }
//       });
//     }  
// });







//-----------(menu hover effect creation) => Advance approach with code optimization

//--------------Start of mouse hover in and out on nav bar----------------------

//selecting nav bar
const  nav = document.querySelector('.nav');

//creating function for hover effect
const handelHover = function(e,color,fontWeight,backgroundColor,padding,borderRadius){

 
  if(e.target.classList.contains('nav__link')) {

const clickLink = e.target;
const siblings = clickLink.closest('.nav').querySelectorAll('.nav__link');
const logo = clickLink.closest('.nav').querySelector('img');

      siblings.forEach(el => {
        if(el == clickLink)
         {
          
           el.style.color = color;
           el.style.fontWeight = fontWeight;
           el.style.backgroundColor = backgroundColor;
           el.style.padding = padding +'px';
           el.style.borderRadius = borderRadius + 'px';
        }
    });
  } 
}

//creating function for Mouse out / hover out

const handelHoverOut = function(e,color,fontWeight,backgroundColor,padding,borderRadius){

  if(e.target.classList.contains('nav__link')) {

    const clickLink = e.target;
    const siblings = clickLink.closest('.nav').querySelectorAll('.nav__link');
    const logo = clickLink.closest('.nav').querySelector('img');

      siblings.forEach(el => {

        if(el == clickLink){ 
          
          el.style.color = color;
          el.style.fontWeight = fontWeight;
          el.style.backgroundColor = backgroundColor;
          el.style.padding = padding;
          el.style.borderRadius = borderRadius;
          
        }
      });
  }
}
 

//------------------ End of  hover in and out Functions---------------







//---------- Start of Calling Functions for hover effect---------------
nav.addEventListener('mouseover', function(e){
  handelHover(e, 'white', '700','black',4, 6);
 }); 

 nav.addEventListener('mouseout', function(e){
  handelHoverOut(e, 'black', '400','','', '');
 }); 

 //---------- End of Calling Functions for hover effect---------------





 // scroll down annimations of sections

const allSection = document.querySelectorAll('.section');

 const revealSection = function (entries, observer){
    
  const[entry] = entries;
  if (!entry.isIntersecting) return;
  
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);


 };

 const sectionObserver = new IntersectionObserver(revealSection, {

  root: null,
  threshold: 0.15,


 });
 
 
 allSection.forEach(function(section){

  sectionObserver.observe(section);
  section.classList.add('section--hidden');

 });


 //-------------- Start Lazy loading images------------

 const imgTarget = document.querySelectorAll('img[data-src]');
 
 const loadImg = function(entries, observer){
  const [entry] = entries; 
  //console.log(entries);

  if(!entry.isIntersecting) return;

  //replace lazy image to orignal and remove blure

  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function(){
    entry.target.classList.remove('lazy-img');

  });
  observer.unobserve(entry.target);
 };

 const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
 });

 imgTarget.forEach(img=> imgObserver.observe(img));

 //-------------- End of Lazy loading images------------




 //----------------- start of  reviews slider------------------


 const slides = document.querySelectorAll('.slide');
 const sliderr = document.querySelector('.slider');
 const btnLeft = document.querySelector('.slider__btn--left');
 const btnRight = document.querySelector('.slider__btn--right');
 let curSlider = 0;
 const maxSlide = slides.length;




 //sliderr.style.overflow = 'visible';
 

 const goToSlide = function(slide){
  slides.forEach((s,i) => s.style.transform = `translateX(${100 * (i- curSlider)}%)`);

 };
 goToSlide(0);


 //next slide

 const nextSlide = function (){
  if(curSlider == maxSlide - 1 ){
    curSlider= 0;
    
  }

  else{
    curSlider++
  }
  
  goToSlide(curSlider);
 };


 const prevSlide = function(){

  if(curSlider == 0){
    curSlider = maxSlide - 1;
  }
  else{
curSlider--;
  }
  goToSlide(curSlider);


 };

 btnRight.addEventListener('click', nextSlide);
 btnLeft.addEventListener('click', prevSlide);


 //-----------keyboard events -- handelling slider with keys------

 document.addEventListener('keydown', function(e){
if(e.key == 'ArrowLeft') prevSlide();
e.key === 'ArrowRight' && nextSlide();

 });



 //-------------------END---------------------------------