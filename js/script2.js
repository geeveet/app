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
const searchContainer = document.querySelector('.search-container');

if (searchContainer) {
    searchContainer.addEventListener('click', () => {
        window.location.href = 'entitat_buscador.html';
    });
}



// ----- GEEVEET EN MAPA
const givitImgs = document.querySelectorAll('.givit');
const geeveetPopups = document.querySelectorAll('.geeveet_popup');

if (givitImgs.length > 0 && geeveetPopups.length > 0) {
    givitImgs.forEach(givit => {
        givit.addEventListener('click', () => {
            const id = givit.dataset.id;

            // Toggle del activo
            const yaActivo = givit.classList.contains('activa');
            givitImgs.forEach(g => g.classList.remove('activa'));
            geeveetPopups.forEach(p => p.classList.remove('visible'));

            if (!yaActivo) {
                givit.classList.add('activa');
                const popupToShow = document.querySelector(`.geeveet_popup[data-id="${id}"]`);
                if (popupToShow) popupToShow.classList.add('visible');
            }
        });
    });
}

const popupContainers = document.querySelectorAll('.geeveet_popup');

popupContainers.forEach(popup => {
    popup.addEventListener('click', () => {
        window.location.href = 'entitat_geeveet_especifico.html'; // Cambia esto por la URL que quieras
    });
});

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
