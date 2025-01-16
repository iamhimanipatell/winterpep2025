document.addEventListener('DOMContentLoaded', () => {
    const testimonialsContainer = document.getElementById('testimonials-container');
    const testimonies = testimonialsContainer.querySelectorAll('.testimony');
  
    let currentIndex = 0;
  
    // Function to scroll testimonies
    function scrollTestimony() {
      // Hide the current testimony by resetting animation
      testimonies[currentIndex].style.animation = 'none';
  
      // Move to the next testimony
      currentIndex = (currentIndex + 1) % testimonies.length;
  
      // Apply animation to the next testimony
      testimonies[currentIndex].style.animation = 'scrollTestimony 4s ease-out forwards';
  
      // Continue the process every 4 seconds
      setTimeout(scrollTestimony, 4000);
    }
  
    // Initialize the first testimony with animation
    testimonies[currentIndex].style.animation = 'scrollTestimony 4s ease-out forwards';
  
    // Start scrolling testimonies
    setTimeout(scrollTestimony, 4000); // Wait 4 seconds before the first scroll
  });
  