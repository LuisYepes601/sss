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