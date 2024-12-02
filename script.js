const burgerMenu = document.getElementById('burger-menu');
const navLinks = document.getElementById('nav-links');

// Toggle classes when the burger menu is clicked
burgerMenu.addEventListener('click', () => {
  // Toggle the 'open' class for burger animation
  burgerMenu.classList.toggle('open');
  
  // Toggle the 'hide' or 'show' class for the nav-links
  navLinks.classList.toggle('hide');
  
  // For mobile devices, make the navbar slide in and out
  navLinks.classList.toggle('show');
});

function scrollToContent() {
  document.getElementById('content').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

document.addEventListener("DOMContentLoaded", function() {
  const dropdownToggle = document.querySelector(".dropdown-toggle");
  const dropdownMenu = document.querySelector(".dropdown-menu");

  dropdownToggle.addEventListener("click", function(event) {
    event.preventDefault();
    dropdownMenu.classList.toggle("active");
  });

  // Optional: Close the dropdown if clicking outside
  document.addEventListener("click", function(event) {
    if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
      dropdownMenu.classList.remove("active");
    }
  });
});

