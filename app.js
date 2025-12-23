function EliminarSearch() {

    const search = document.querySelector(".search");

    const lupita = document.querySelector(".bi-search");


    if (!search) return;
    if (!lupita) return;


    search.addEventListener("input", (e) => {

        if (!search.value == "") {
            lupita.style.display = "none";
        } else {
            lupita.style.display = "block";
        }

    })
}

document.addEventListener("DOMContentLoaded", EliminarSearch)


function mostrarBurguerMenu() {

    const boton = document.querySelector(".bi-list");

    const header = document.querySelector(".nav-header");



    if (!boton) return;
    if (!header) return;


    boton.addEventListener("click", () => {
        header.classList.toggle("nav-header")
        header.classList.toggle("active-burguer");

    })
}

document.addEventListener("DOMContentLoaded", mostrarBurguerMenu)