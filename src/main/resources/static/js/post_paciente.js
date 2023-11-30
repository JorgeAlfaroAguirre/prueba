document.addEventListener("DOMContentLoaded", function () {
  console.log("Hola Profe Lu!");

  const agregarPacienteForm = document.querySelector("#form_pacientes");

  agregarPacienteForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = {
      nombre: document.querySelector("#nombre").value,
      apellido: document.querySelector("#apellido").value,
      cedula: document.querySelector("#cedula").value,
      fechaIngreso: document.querySelector("#fecha").value,
      email: document.querySelector("#email").value,
      domicilio: {
        calle: document.querySelector("#calle").value,
        numero: document.querySelector("#numero").value,
        localidad: document.querySelector("#localidad").value,
        provincia: document.querySelector("#provincia").value,
      },
    };

    const url = "/paciente";
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
      console.log(data);

    } catch (error) {
      console.log(error);
    }
  });
});
