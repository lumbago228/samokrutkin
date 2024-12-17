document.addEventListener('DOMContentLoaded', function() {
    const parallaxContainer = document.querySelector('.parallax-container');

    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        parallaxContainer.style.transform = `translateY(${scrollPosition * 0.3}px)`;
    });
});
