// ----- SELECCIÓN DE BOTONES DE CATEGORÍA
document.querySelectorAll('.categoria').forEach(categoria => {
    categoria.addEventListener('click', () => {
        categoria.classList.toggle('seleccionada');
    });
});

// ----- SLIDER DE KM
const slider = document.getElementById("distancia");
const span = document.getElementById("valorDistancia");

function actualitzarDistancia(valor) {
    const percent = (valor / slider.max) * 100;
    slider.style.background = `linear-gradient(to right, #1E2F50 ${percent}%, #FFF ${percent}%)`;

    span.innerText = valor == slider.max ? "+200 km (màxim)" : `${valor} km`;
}

// Solo ejecuta si el slider existe (para evitar errores en otras páginas)
if (slider && span) {
    slider.addEventListener("input", e => actualitzarDistancia(e.target.value));
    actualitzarDistancia(slider.value);
}

// ----- MOSTRAR Y OCULTAR RESULTADOS EN BUSCADOR
const searchResults = document.getElementById("searchResults");
const searchContainer = document.querySelector(".search-container");

if (searchResults && searchContainer) {
    document.addEventListener("click", function(event) {
        if (!searchContainer.contains(event.target)) {
            searchResults.style.display = "none";
        }
    });
}

// ----- GEEVEET EN MAPA
const givitImgs = document.querySelectorAll('.givit');
const popup = document.querySelector('.geeveet_popup');

if (popup && givitImgs.length > 0) {
    givitImgs.forEach(givit => {
        givit.addEventListener('click', () => {
            const activa = givit.classList.contains('activa');

            givitImgs.forEach(g => g.classList.remove('activa'));
            popup.classList.remove('visible');

            if (!activa) {
                givit.classList.add('activa');
                popup.classList.add('visible');
            }
        });
    });
}

// ----- SLIDER DE FOTOS (solo en slider.html)
function showSlides() {
    const slides = document.getElementsByClassName("mySlides");
    if (slides.length === 0) return;

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000);
}

let slideIndex = 0;
showSlides();

const popupContainer = document.querySelector('.geeveet_popup');

if (popupContainer) {
    popupContainer.addEventListener('click', () => {
        window.location.href = 'voluntari_geeveet_especifico.html'; // Cambia esto por la URL que quieras
    });
}