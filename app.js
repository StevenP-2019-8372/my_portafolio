const botonSubir = document.querySelector(".boton-subir");

// Ocultar botón al inicio
botonSubir.style.display = "none";

window.addEventListener("scroll", () => {
  // Mostrar botón cuando el usuario se desplaza hacia abajo
  if (window.scrollY > 100) {
    botonSubir.style.display = "block";
  } else {
    botonSubir.style.display = "none";
  }
});

botonSubir.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

/*enviar formulario*/

const btn = document.getElementById("button");

document
  .getElementById("formulario-contacto")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    btn.value = "Sending...";

    const serviceID = "default_service";
    const templateID = "template_s30uh9f";

    // Obtén una referencia al elemento de entrada
    var inputName = document.getElementById("nombre");
    var inputEmail = document.getElementById("correo");
    var inputMensaje = document.getElementById("mensaje");

    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        btn.value = "Send Email";
        alert("Enviado correctamente!");
        // Limpia el contenido del campo de entrada
        inputName.value = "";
        inputEmail.value="";
        inputMensaje.value="";
      },
      (err) => {
        btn.value = "Send Email";
        alert(JSON.stringify(err));
      }
    );
  });
