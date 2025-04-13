document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.nav-toggle');
    const navSections = document.querySelector('.nav-sections');
  
    if (toggle && navSections) {
      toggle.addEventListener('click', () => {
        navSections.classList.toggle('active');
      });
    }
  });
  