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