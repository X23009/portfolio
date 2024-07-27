document.addEventListener('DOMContentLoaded', function() {
    const loading = document.getElementById("loading");
    window.onload = function() {
        setTimeout(() =>{
            loading.classList.add("loaded");
        }, 800);
    }
});



document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, observerOptions);

    const elementsToObserve = document.querySelectorAll('.fade-in');
    elementsToObserve.forEach(element => {
        observer.observe(element);
    });
});

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const content = document.querySelector('.logo-opacity');

    
    let opacity = 1.0 - (scrollPosition / windowHeight);
    content.style.opacity = opacity;
});