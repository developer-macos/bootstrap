document.querySelector('.animated-link').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the default action
    this.classList.add('clicked');
    
    // Optionally, remove the class after animation
    setTimeout(() => {
      this.classList.remove('clicked');
    }, 500); // Adjust the time based on your animation duration
  });

  
  // Select the section we want to animate
const animatedSection = document.querySelector('.animated-section');

// Create a function to detect if the section is in view
function isInView(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

// Function to add the class if the section is in view
function checkSectionVisibility() {
  if (isInView(animatedSection)) {
    animatedSection.classList.add('in-view');
  }
}

// Add an event listener for scrolling
window.addEventListener('scroll', checkSectionVisibility);

// Optionally, call it once when the page loads
checkSectionVisibility();


// Select the elements
const warningText = document.querySelector('.warning-text');
const dismissButton = document.querySelector('.dismiss-button');

// Function to dismiss the warning text
dismissButton.addEventListener('click', () => {
  warningText.style.display = 'none';
  dismissButton.style.display = 'none';
});


// Select all sections with the class .scroll-section
const sections = document.querySelectorAll('.scroll-section');

// Function to check if a section is in the viewport
function isInView(element) {
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
}

// Function to add 'visible' class to sections when they are scrolled into view
function handleScroll() {
  sections.forEach(section => {
    if (isInView(section)) {
      section.classList.add('visible');
    }
  });
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Call the function on page load to reveal sections already in view
handleScroll();
