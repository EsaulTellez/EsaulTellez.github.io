document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name.trim() === "") {
        alert("ingresa un nombre");
        return;
    }

    if (email.trim() === "") {
        alert("email invalido");
        return;
    }

    if (message.trim() === "") {
        alert("ingresa un mensaje");
        return;
    }

    // Aquí puedes enviar el formulario, por ejemplo, a través de AJAX
    alert("datos enviados");
    // Resetear el formulario
    document.getElementById("formulario").reset();
});
