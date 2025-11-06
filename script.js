// Smooth scroll for navbar links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

// Form submission handling
const enquiryForm = document.querySelector("#enquiry form");
if (enquiryForm) {
  enquiryForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you! Your enquiry has been submitted successfully.");
    enquiryForm.reset();
  });
}
