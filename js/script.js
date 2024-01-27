var scroll = window.scrollY;


document.addEventListener("DOMContentLoaded", function () {
    // Elementos a animar:
    var corazon = document.querySelector('.corazon');
    var primerTexto = document.querySelector('.section1 p');
    var icon1 = document.querySelector('.icon1');
    var icon2 = document.querySelector('.icon2');
    var icon3 = document.querySelector('.icon3');
    var icon4 = document.querySelector('.icon4');

    // Evento de desplazamiento
    window.addEventListener('scroll', function () {
        console.log(window.scrollY);

        // Calcula el factor de escala en función del desplazamiento
        var scale = 2 - 0.01 * window.scrollY;
        var visibilityPercentage = 0.007 * window.scrollY;



        // Limita el factor del cambio
        scale = Math.max(1, scale);
        visibilityPercentage = Math.min(1, Math.max(0, visibilityPercentage));

        // Aplica transformaciones a los elemento
        corazon.style.transform = 'scale(' + scale + ')';
        primerTexto.style.opacity = visibilityPercentage;

        icon1.style.transform = 'translate3d(0,' + window.scrollY * -0.05 + 'px, 0)';
        icon2.style.transform = 'translate3d(0,' + window.scrollY * -0.2 + 'px, 0)';
        icon3.style.transform = 'translate3d(0,' + window.scrollY * -0.10 + 'px, 0)';
        icon4.style.transform = 'translate3d(0,' + window.scrollY * -0.15 + 'px, 0)';
    });
});