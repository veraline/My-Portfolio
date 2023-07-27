// Get the theme toggle icon element
const themeToggle = document.getElementById('theme-toggle');

// Add a click event listener to the theme toggle icon
themeToggle.addEventListener('click', function() {
  // Get the <body> element
  const body = document.body;
  const hamburger = document.querySelector('.hamburger');
  const links = document.querySelector('.link-2');
  

  // Toggle the "dark-theme" class on the body element
  body.classList.toggle('dark-theme');
  links.classList.toggle('dark-theme');
hamburger.classList.toggle('dark-theme');

  // Toggle the icon class between sun and moon
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