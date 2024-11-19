
function toggleNavMenu() {
    const menu = document.getElementById("navMenu");
    menu.classList.toggle("open"); 
    const icon = document.querySelector('.icon');
    icon.classList.toggle("active"); 
}


document.addEventListener("DOMContentLoaded", () => {
    const now = new Date();
    const date = now.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    document.getElementById("datetime").innerHTML = date + "<br>" + time;
});


window.onscroll = function() {
    toggleScrollToTopBtn();
};

function toggleScrollToTopBtn() {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopBtn.style.display = "block"; 
    } else {
        scrollToTopBtn.style.display = "none"; 
    }
}


function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
document.addEventListener("DOMContentLoaded", function() {
    let lastScrollTop = 0;
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            
            if (entry.isIntersecting && window.scrollY > lastScrollTop) {
                entry.target.classList.add("is-visible"); 
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.5 
    });

    
    const elementsToAnimate = document.querySelectorAll('.skills, .skills2, .skills h5, .skills h2, .skills p, .skills2 img, .progress-bar');
    elementsToAnimate.forEach(element => {
        observer.observe(element); 
    });

    
    window.addEventListener("scroll", function() {
        lastScrollTop = window.scrollY; 
    });
});




