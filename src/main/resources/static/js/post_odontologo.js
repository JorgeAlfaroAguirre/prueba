document.addEventListener("DOMContentLoaded", function () {
  console.log("Hola Profe Lu!");

  const agregarOdontologo = document.querySelector("#agregar_odontologo");

  agregarOdontologo.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = {
      nombre: document.querySelector("#nombre").value,
      apellido: document.querySelector("#apellido").value,
      matricula: document.querySelector("#matricula").value,
    };

    const url = "/odontologo";
    const settings = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    fetch(url, settings)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

});
