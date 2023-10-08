if (window.innerWidth <= 600) { // Rediriger si la largeur de l'écran est inférieure ou égale à 600 pixels
    window.location.href = "mobile/mobile.html";
}

//barre de navigation des espces 
document.addEventListener("DOMContentLoaded", function () {
    const speciesLinks = document.querySelectorAll("#species-navbar a");

    speciesLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetSectionID = this.getAttribute("href");
            const targetSection = document.querySelector(targetSectionID);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});


// Initialiser ScrollReveal
ScrollReveal({
    reset: true
});

ScrollReveal().reveal('.presentation-content', { duration: 1000 });
ScrollReveal().reveal('.presentation-image', { duration: 1000 });

//apparition des chiens page chiens
document.addEventListener("DOMContentLoaded", function () {
    const sr = ScrollReveal({
        distance: '100px', // Distance de décalage
        duration: 1000,   // Durée de l'animation en millisecondes
        easing: 'ease',   // Type d'interpolation
        reset: true       // Réinitialiser les animations à chaque chargement de page
    });

    sr.reveal('.container-pub1', { origin: 'left' });
    sr.reveal('.container-pub2', { origin: 'right' });
    sr.reveal('.container-pub3', { origin: 'left' });
    sr.reveal('.container-pub4', { origin: 'right' });
    sr.reveal('.container-pub5', { origin: 'left' });
});




//affichage formulaire reservation en remplissant par numero du chiot
document.addEventListener("DOMContentLoaded", function () {
    const reservationButtons = document.querySelectorAll(".reservation-button");
    const reservationForm = document.getElementById("reservation-form");
    const messageField = document.getElementById("message");
    
    reservationButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            const chiotName = button.parentElement.textContent.replace("Réserver", "").trim();
            reservationForm.classList.remove("hidden");
            messageField.value = `Réservation ${chiotName}`;
            // Faire défiler la page vers le formulaire
            reservationForm.scrollIntoView({ behavior: "smooth" });
        });
    });
});



//version mobile

// Récupérez le bouton et la navbar
const navToggle = document.getElementById('nav-toggle');
const navbar = document.getElementById('navbar');

// Ajoutez un gestionnaire d'événements au bouton
navToggle.addEventListener('click', () => {
    navbar.classList.toggle('show'); // Ajoutez ou supprimez la classe 'show' pour afficher ou masquer la navbar
});
