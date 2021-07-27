scrollBtn = document.getElementById("scrollBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}


window.addEventListener('scroll', function() {
  if (window.scrollY > 150) {
    
    this.document.querySelector('#logo').style.height = '4rem';
    this.document.querySelector('#main-nav').style.height = '4rem';
    
  } else {
    this.document.querySelector('#logo').style.height = '5rem';
    this.document.querySelector('#main-nav').style.height = '5rem';
  }
});


const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
  burger.addEventListener('click' , () => {
    nav.classList.toggle('nav-active');

    navLinks.forEach((link,index) => {
      if(link.style.animation){
        link.style.animation = '';
      } else {
        link.style.animation =`navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
    });
    burger.classList.toggle('toggle');
  });
}

navSlide();