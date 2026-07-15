// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');

        if (targetId !== "#") {
            document.querySelector(targetId).scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Change header background while scrolling
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.background = "#111";
        header.style.boxShadow = "0 4px 12px rgba(0,0,0,0.5)";
    } else {
        header.style.background = "#000";
        header.style.boxShadow = "none";
    }
});

console.log("Boza Website Loaded Successfully");
