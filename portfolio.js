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
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const elementsToObserve = document.querySelectorAll('.fade-in');
    elementsToObserve.forEach(element => {
        observer.observe(element);
    });
});