// Select all elements to animate on scroll
const animatedElements = document.querySelectorAll('.animate');

// Create the observer — watches each element
const observer = new IntersectionObserver((entries) => {

  // For each observed element...
  entries.forEach((entry) => {

    // ...if it's visible on screen...
    if (entry.isIntersecting) {

      // ...add the class that triggers the CSS animation
      entry.target.classList.add('visible');

      // Stop observing (animation happens only once)
      observer.unobserve(entry.target);
    }
  });

}, {
  threshold: 0.15
});

// Start observing each element
animatedElements.forEach((element) => {
  observer.observe(element);
});
