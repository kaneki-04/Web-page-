document.addEventListener("DOMContentLoaded", () => {
    const mensaje = document.querySelector(".message");
    
    // Asegura que el mensaje comience oculto
    mensaje.classList.add("oculto");

    // Espera 500ms antes de mostrar el mensaje con animación
    setTimeout(() => {
        mensaje.classList.remove("oculto");
        mensaje.classList.add("animado");
    }, 500);
});
