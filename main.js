document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("comer-button");
    const respuesta = button.nextElementSibling;

    button.addEventListener("click", function () {
        respuesta.style.display = "block"; // Muestra la respuesta al hacer clic en el botón
        setTimeout(function () {
            respuesta.style.display = "none"; // Oculta la respuesta después de 10 segundos
        }, 10000);
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("comer-button2");
    const respuesta = button.nextElementSibling;

    button.addEventListener("click", function () {
        respuesta.style.display = "block"; // Muestra la respuesta al hacer clic en el botón
        setTimeout(function () {
            respuesta.style.display = "none"; // Oculta la respuesta después de 10 segundos
        }, 10000);
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("comer-button3");
    const respuesta = button.nextElementSibling;

    button.addEventListener("click", function () {
        respuesta.style.display = "block"; // Muestra la respuesta al hacer clic en el botón
        setTimeout(function () {
            respuesta.style.display = "none"; // Oculta la respuesta después de 10 segundos
        }, 10000);
    });
});