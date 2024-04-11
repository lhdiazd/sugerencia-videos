import Reproductor from './reproductor.js';

document.addEventListener('DOMContentLoaded', function () {

    let reproductorMusica = new Reproductor("musica", "https://www.youtube.com/embed/WjLw3_E4j5k?si=udtM0fAZ7ex1BZ9l");
    let reproductorPeliculas = new Reproductor("peliculas", "https://www.youtube.com/embed/6EnqXJXGuGQ?si=4b9rpawTB6iCYgwX");
    let reproductorSeries = new Reproductor("series", "https://www.youtube.com/embed/hjAyDQvbolw?si=j4tE1Lz6Y9O7Veeo");

    reproductorMusica.playMultimedia();
    reproductorPeliculas.playMultimedia();
    reproductorSeries.playMultimedia();

    reproductorMusica.setInicio(35);

});

