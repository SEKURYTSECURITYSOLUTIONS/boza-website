// ===============================
// BOZA WEBSITE V2
// ===============================

// Sticky header effect
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.background = "#000";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.6)";
    } else {
        header.style.background = "rgba(0,0,0,0.92)";
        header.style.boxShadow = "none";
    }
});

// Smooth scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {

        if(this.getAttribute('href').startsWith("#")){

            e.preventDefault();

            document.querySelector(this.getAttribute('href'))
            .scrollIntoView({
                behavior:"smooth"
            });

        }

    });
});

// Fade in cards
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(40px)";
card.style.transition="all .8s ease";

observer.observe(card);

});

console.log("Boza Website Version 2 Loaded");
