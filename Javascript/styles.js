const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', function() {
  const body = document.body;
  const hamburger = document.querySelector('.hamburger');
  const links = document.querySelector('.link-2');
  

  body.classList.toggle('dark-theme');
  links.classList.toggle('dark-theme');
hamburger.classList.toggle('dark-theme');

  themeToggle.firstElementChild.classList.toggle('fa-moon');
  themeToggle.firstElementChild.classList.toggle('fa-sun');
});



const hamburger =document.querySelector('.hamburger');
const navlinks =document.querySelector('.nav-links');
const iconContainer = document.querySelector('#theme-toggle');

hamburger.addEventListener('click', function(){

    navlinks.classList.toggle('show');
    iconContainer.classList.toggle('show');

});