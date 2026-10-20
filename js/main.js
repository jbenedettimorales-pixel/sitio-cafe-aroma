console.log("Cafe Aroma cargado");

// Validación del formulario de contacto
const form = document.getElementById("form-contacto");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const estado = document.getElementById("estado");
    const nombre = form.nombre.value.trim();
    const correo = form.correo.value.trim();
    const mensaje = form.mensaje.value.trim();

    const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);

    if (!nombre || !correoValido || mensaje.length < 10) {
      estado.textContent =
        "Completa todos los campos, escribe un correo válido y un mensaje de al menos 10 caracteres.";
      estado.style.color = "red";
      return;
    }

    estado.style.color = "green";
    estado.textContent =
      "¡Gracias " + nombre + ", te responderemos pronto!";

    form.reset();
  });
}

const anio = document.getElementById("anio");

if (anio) {
  anio.textContent = new Date().getFullYear();
}