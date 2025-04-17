function enviarMensajeWhatsApp(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;

    const texto = `Hola Argenis José 👋, soy ${nombre} (${email}). Quería decirte:\n\n${mensaje}`;
    const url = `https://wa.me/573209872010?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
}