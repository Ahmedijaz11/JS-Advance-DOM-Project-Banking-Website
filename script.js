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




