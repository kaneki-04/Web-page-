document.addEventListener("DOMContentLoaded", function() {
    const mensaje = document.querySelector("p");
    mensaje.style.opacity = "0";
    mensaje.style.transform = "translateY(10px)";
    setTimeout(() => {
        mensaje.style.transition = "opacity 1.5s, transform 1.5s";
        mensaje.style.opacity = "1";
        mensaje.style.transform = "translateY(0)";
    }, 500);
});
