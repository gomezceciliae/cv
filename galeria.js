const contenedor = document.getElementById("galeria");

const imagenes = JSON.parse(contenedor.dataset.imagenes);

let indice = 0;

const imagen = document.getElementById("imagen-galeria");

function siguiente() {
    indice++;

    if (indice >= imagenes.length) {
        indice = 0;
    }

    imagen.src = imagenes[indice];
}

function anterior() {
    indice--;

    if (indice < 0) {
        indice = imagenes.length - 1;
    }

    imagen.src = imagenes[indice];
}