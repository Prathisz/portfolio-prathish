document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.animate');

    function checkScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;

        if (sectionTop < window.innerHeight && sectionBottom >= 0) {
          section.classList.add('active');
        } else {
          section.classList.remove('active');
        }
      });
    }

    window.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);

    // Initial check on page load
    checkScroll();
  });