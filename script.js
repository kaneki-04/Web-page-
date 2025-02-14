document.addEventListener("DOMContentLoaded", function() {
    const mensaje = document.querySelector("p");
    mensaje.style.opacity = "0";
    setTimeout(() => {
        mensaje.style.transition = "opacity 2s";
        mensaje.style.opacity = "1";
    }, 500);
});
