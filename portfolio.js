document.addEventListener('DOMContentLoaded', function() {
    const loading = document.getElementById("loading");
    window.onload = function() {
        setTimeout(() =>{
            loading.classList.add("loaded");
        }, 800);
    }
});

