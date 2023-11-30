document.addEventListener("DOMContentLoaded", function () {
  console.log("Hola Profe Lu!");

  const agregarOdontologo = document.querySelector("#agregar_odontologo");

  agregarOdontologo.addEventListener("submit", async (e) => {
    e.preventDefault();

    const before = await obtenerLongitudOdontologos();

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

    try {
      const response = await fetch(url, settings);
      const data = await response.json();

      const after = await obtenerLongitudOdontologos();
      const clean =()=>{
        document.querySelector("#nombre").value = "";
        document.querySelector("#apellido").value = "";
        document.querySelector("#matricula").value = "";
      }

      if (before !== after) {
        alert("Odontologo Agregado con exito");
        clean()
      } else {
        alert("No se ha podido agregar odontologo");
        clean()
      }
    } catch (error) {
      console.log(error);
    }
  });
});

async function obtenerLongitudOdontologos() {
  const url = "/odontologo";
  const settings = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(url, settings);
    const data = await response.json();
    return data.length;
  } catch (error) {
    console.log(error);
  }
}
