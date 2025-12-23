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

    const main = document.querySelector(".main");

    boton.addEventListener("click", () => {
        header.classList.toggle("nav-header")
        header.classList.toggle("active-burguer");

        boton.classList.toggle("bi-x-circle-fill");

        if (boton.classList.contains("bi-x-circle-fill")) {

            boton.style.color = "#991002";
            main.style.opacity = "0.3";


        } else {
            boton.style.color = "black"
            main.style.opacity = "1";
        }


    })
}

document.addEventListener("DOMContentLoaded", mostrarBurguerMenu)

function botonSeleccionado() {


    const opciones = document.querySelectorAll(".nav-header-lista-item");

    opciones.forEach(element => {

        console.log(element.getAttribute("aria-selected"));


        if (element.getAttribute("aria-selected") == "true") {

            element.classList.add("btn-activo")
        }

        element.addEventListener("click", () => {

            if (element.getAttribute("aria-selected") !== "true") {


                opciones.forEach(element => {
                    element.setAttribute("aria-selected", "false")
                    element.classList.remove("btn-activo");
                });

                element.setAttribute("aria-selected", "true")

                element.classList.add("btn-activo")



            }

        })

    });






}

document.addEventListener("DOMContentLoaded", botonSeleccionado);

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    const search = document.querySelector(".bi-search");

    if (window.scrollY > 100) {


        header.classList.add("header-scrool-active");
        search.classList.add("bi-search-scrool-activate")

    } else {
        header.classList.remove("header-scrool-active")
        search.classList.remove("bi-search-scrool-activate")
    }

})
