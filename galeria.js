const contenedor = document.getElementById("galeria");
const imagenes = JSON.parse(contenedor.dataset.imagenes);

let indice = 0;
let imagen = document.getElementById("imagen-galeria");
let video = null;

function esVideo(url) {
    return url.endsWith(".mp4") || url.endsWith(".webm") || url.endsWith(".ogg");
}

function mostrarMedia() {
    const url = imagenes[indice];

    if (esVideo(url)) {

        if (!video) {
            video = document.createElement("video");
            video.id = "imagen-galeria";
            video.controls = true;
            video.autoplay = true;
            video.loop = true;
            video.style.maxWidth = "100%";

            imagen.replaceWith(video);
        }

        video.src = url;
        video.play();

    } else {

        if (video) {
            const img = document.createElement("img");
            img.id = "imagen-galeria";

            video.replaceWith(img);

            imagen = img;
            video = null;
        }

        imagen.src = url;
    }
}

function siguiente() {
    indice++;

    if (indice >= imagenes.length) {
        indice = 0;
    }

    mostrarMedia();
}

function anterior() {
    indice--;

    if (indice < 0) {
        indice = imagenes.length - 1;
    }

    mostrarMedia();
}