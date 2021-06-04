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
    document.querySelector('#main-nav').style.opacity = 0.8;
  } else {
    document.querySelector('#main-nav').style.opacity = 1;
  }
});

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  burger.addEventListener('click' , () => {
    nav.classList.toggle('nav-active');
  });
}

navSlide();