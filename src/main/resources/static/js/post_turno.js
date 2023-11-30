document.addEventListener("DOMContentLoaded", function () {
  console.log("Hola Profe Lu!");

  const agregarTurnoForm = document.querySelector("form");

  agregarTurnoForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const pacienteId = document.querySelector("#idPaciente").value;
    const odontologoId = document.querySelector("#idOdontologo").value;
    const fechaTurno = document.querySelector("#fecha").value;

    const formData = {
      pacienteId: pacienteId,
      odontologoId: odontologoId,
      fechaTurno: fechaTurno,
    };

    const url = "/turno";
    const settings = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    try {
      const response = await fetch(url, settings);
      const data = await response.json();

      if (response.ok) {
        console.log(data);
        // Aquí puedes manejar la respuesta del servidor, por ejemplo, actualizar la interfaz de usuario
      } else {
        // Aquí puedes manejar errores del servidor, por ejemplo, mostrar una alerta
        alert("Error al agregar turno. Turno no encontrado.");
      }
    } catch (error) {
      console.log(error);
    }
  });
});
